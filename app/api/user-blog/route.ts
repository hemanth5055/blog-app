import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // or "bson" if you're using that
import { prisma } from "@/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!ObjectId.isValid(userId)) {
      return NextResponse.json({ blogs: [] });
    }

    const blogs = await prisma.blog.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        updatedAt: true,
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
