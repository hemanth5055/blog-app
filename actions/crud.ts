import { prisma } from "@/prisma";
import { ObjectId } from "mongodb";

// Fetch single blog and track unique views
export const getBlog = async (id: string, viewerId?: string) => {
  if (!ObjectId.isValid(id)) return null;
  try {
    if (viewerId && ObjectId.isValid(viewerId)) {
      const existing = await prisma.blog.findUnique({
        where: { id },
        select: { views: true },
      });

      if (existing && !existing.views.includes(viewerId)) {
        await prisma.blog.update({
          where: { id },
          data: {
            views: {
              push: viewerId,
            },
          },
        });
      }
    }

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

    if (!blog) return null;
    return {
      ...blog,
      views: blog.views?.length ?? 0,
    };
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

  return blogs.map((blog) => ({
    ...blog,
    views: blog.views.length,
  }));
};
