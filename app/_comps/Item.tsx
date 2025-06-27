import React from "react";
import { LuTrash2 } from "react-icons/lu";

const Item = ({ canDelete }: { canDelete: boolean }) => {
  return (
    <div className="w-[75%] flex flex-col gap-2">
      {/* title */}
      <h2 className="font-mont dark:text-[#E5E5E5] hover:dark:text-blue-400 leading-[45px] hover:underline cursor-pointer hover:text-blue-500  text-[35px] font-medium tracking-[-0.055em]">
        Clean layout and thoughtful hierarchy make this blog section both
        functional and visually appealing.
      </h2>
      {/* details */}
      <div className="w-full flex gap-4 items-center justify-between">
        <div className="flex gap-2 items-center py-2">
          <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]"></div>
          <h2 className="font-mont text-[18px] dark:text-[#7f7f7f]  font-medium tracking-[-0.055em] text-[#4d4d4d]">
            John Doe
          </h2>
          <h2 className="font-mont text-[18px] px-2 dark:text-[#7f7f7f] font-medium tracking-[-0.055em] text-[#4d4d4d]">
            2 Min Read
          </h2>
        </div>
        {canDelete ? (
          <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full cursor-pointer">
            <LuTrash2 size={20} className="hover:text-red-400"></LuTrash2>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* line */}
      <div className="w-[100%] h-[2px] bg-gray-300 dark:bg-gray-500"></div>
    </div>
  );
};

export default Item;
