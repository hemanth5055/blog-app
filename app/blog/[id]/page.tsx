import { getBlog } from "@/actions/crud";
import { notFound } from "next/navigation";
import { VscEye } from "react-icons/vsc";

import React from "react";

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const blog = await getBlog(id);
  if (!blog) {
    notFound();
  }
  const blogContent = blog?.content;

  return (
    <div className="w-full flex flex-col gap-5 px-6">
      <div className="w-full flex flex-col gap-2">
        <h1 className="font-mont text-[40px] max-sm:text-[25px] dark:text-[#E5E5E5] w-[75%] max-sm:w-[100%] leading-[50px] max-sm:leading-[35px] font-medium tracking-[-0.055em]">
          {blog?.name}
        </h1>

        <div className="w-full flex gap-4 items-center justify-between">
          <div className="flex gap-4 items-center py-2">
            <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]">
              <img
                src={blog?.user?.image ? blog?.user?.image : ""}
                alt="user avatar"
                referrerPolicy="no-referrer"
                className="rounded-full h-full w-full"
              />
            </div>
            <h2 className="font-mont text-[18px] max-sm:text-[14px] dark:text-[#7f7f7f] font-medium tracking-[-0.055em] text-[#4d4d4d]">
              {blog?.user?.name}
            </h2>
            <div className="flex items-center">
              <VscEye className="dark:text-[#7f7f7f]"></VscEye>

              <h2 className="font-mont max-sm:hidden text-[18px] px-2 dark:text-[#7f7f7f] font-medium tracking-[-0.055em] text-[#4d4d4d]">
                {blog.views}
              </h2>
            </div>
            <h2 className="font-mont text-[18px] max-sm:text-[14px] px-2 dark:text-[#7f7f7f] font-medium tracking-[-0.055em] text-[#4d4d4d]">
              {new Date(blog.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </h2>
          </div>
        </div>

        <div className="w-[60%] h-[2px] bg-gray-300  dark:bg-gray-500 my-5 max-sm:my-3" />

        {/* Render HTML from backend */}
        <div
          className="prose prose-lg dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: blogContent }}
        />
      </div>
    </div>
  );
};

export default Blog;
