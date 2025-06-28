import { prisma } from "@/prisma";
import { ObjectId } from "mongodb";

export const getBlog = async (id: string) => {
  // Validate ID
  if (!ObjectId.isValid(id)) return null;

  try {
    // Increment view count
    await prisma.blog.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    // Fetch blog with user data
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export const allBlogsExceptUser = async (userId: string) => {
  if (!ObjectId.isValid(userId)) return [];

  const blogs = await prisma.blog.findMany({
    where: {
      userId: {
        not: userId,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      updatedAt: true,
      views: true,
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  return blogs;
};
