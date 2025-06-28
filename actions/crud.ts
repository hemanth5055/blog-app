import { prisma } from "@/prisma";
import { ObjectId } from "mongodb";

export const getBlog = async (id: string) => {
  if (!ObjectId.isValid(id)) return null;
  const blog = await prisma.blog.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });
  return blog;
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
