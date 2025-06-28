import { NextResponse } from "next/server";
import { prisma } from "@/prisma"; // adjust the import to your Prisma client
import { ObjectId } from "mongodb"; // or from "bson" depending on your setup

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    console.log(id);
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    await prisma.blog.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Something went wrong while deleting the blog" },
      { status: 500 }
    );
  }
}
