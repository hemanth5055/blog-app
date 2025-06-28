"use client";
import React from "react";
import { VscEye } from "react-icons/vsc";

import { LuTrash2 } from "react-icons/lu";
import Link from "next/link"; // ⬅️ import Next.js Link

const Item = ({
  canDelete,
  name,
  id,
  updatedAt,
  views,
  handleDelete,
  user,
}: {
  canDelete: boolean;
  name: string;
  handleDelete: any;
  id: string;
  views: number;
  updatedAt: Date;
  user: { id: string; name: string; image: string };
}) => {
  return (
    <div className="w-[75%] flex flex-col gap-2 max-sm:w-[100%]">
      {/* title with redirect */}
      <Link href={`/blog/${id}`}>
        <h2 className="font-mont dark:text-[#E5E5E5] hover:dark:text-blue-400 leading-[45px] hover:underline cursor-pointer hover:text-blue-500 text-[35px] max-sm:text-[20px] max-sm:leading-[30px] font-medium tracking-[-0.055em]">
          {name}
        </h2>
      </Link>

      {/* details */}
      <div className="w-full flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center py-2">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              src={user.image}
              alt="user"
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="font-mont text-[18px] max-sm:text-[13px] dark:text-[#7f7f7f] font-medium tracking-[-0.055em] text-[#4d4d4d]">
            {user.name}
          </h2>
          <div className="flex items-center">
            <VscEye className="dark:text-[#7f7f7f]"></VscEye>
            <h2 className="font-mont text-[18px]  px-2 dark:text-[#7f7f7f] max-sm:hidden font-medium tracking-[-0.055em] text-[#4d4d4d]">
              {views}
            </h2>
          </div>

          <h2 className="font-mont text-[18px] px-2 max-sm:text-[12px] dark:text-[#7f7f7f] font-medium tracking-[-0.055em] text-[#4d4d4d]">
            {new Date(updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </h2>
        </div>
        {canDelete && (
          <div
            className="w-[35px] h-[35px] flex justify-center items-center rounded-full cursor-pointer"
            onClick={() => {
              handleDelete(id);
            }}
          >
            <LuTrash2 size={20} className="hover:text-red-400" />
          </div>
        )}
      </div>

      {/* line */}
      <div className="w-[100%] h-[2px] bg-gray-300 dark:bg-gray-500"></div>
    </div>
  );
};

export default Item;
