"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../_comps/Item";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

const Myblogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/signin");
        return;
      }
      try {
        const res = await axios.post("/api/user-blog", {
          userId: session.user.id,
        });
        setBlogs(res.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [router]);
  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete("/api/deleteblog", {
        data: { id },
      });
      if (res.data.success) {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 px-6">
      {/* heading */}
      <div className="w-full flex flex-col">
        <h1 className="font-mont max-sm:text-[40px] dark:text-[#E5E5E5] text-[64px] font-medium tracking-[-0.055em]">
          Your Blogs
        </h1>
        <h4 className="font-mont text-[40px] max-sm:text-[25px] dark:text-[#b0b0b0] relative bottom-[20px] max-sm:bottom-[15px] font-medium tracking-[-0.055em] text-[#CBCBCB]">
          Everything You've Written
        </h4>
      </div>
      {/* Top loading spinner */}
      {loading && (
        <div className="flex justify-start py-2">
          <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* blog list */}
      <div className="w-full flex flex-col gap-[25px] ">
        {!loading && blogs.length === 0 ? (
          <p className="text-lg text-gray-500 font-mont">
            Go ahead and start writing blogs.
          </p>
        ) : (
          blogs.map((item) => (
            <Item
              key={item.id}
              handleDelete={handleDelete}
              canDelete={true}
              name={item.name}
              views={item.views}
              id={item.id}
              updatedAt={new Date(item.updatedAt)}
              user={{
                id: item.user.id,
                name: item.user.name ?? "Unknown User",
                image: item.user.image ?? "/google-icon.png",
              }}
            />
          ))
        )}
      </div>

      <div className="w-full h-[50px]"></div>
    </div>
  );
};

export default Myblogs;
