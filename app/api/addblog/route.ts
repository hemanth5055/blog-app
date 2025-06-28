// app/api/addblog/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, userId, content } = body;
    // Basic validation
    if (!name || !userId || !content) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }
    // Create the blog in the database
    const newBlog = await prisma.blog.create({
      data: {
        name,
        userId,
        content,
      },
    });

    return NextResponse.json(
      { success: true, blogId: newBlog.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
