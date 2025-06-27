import React from "react";
import { LuPenLine } from "react-icons/lu";
import { HiOutlineNewspaper } from "react-icons/hi2";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex z-50 relative items-center justify-end  py-3 px-4 gap-4">
      <Link href="/create">
        <div className="w-[50px] h-[50px] hover:bg-[#e2e1e1] dark:hover:bg-[#171717] rounded-full flex justify-center items-center cursor-pointer">
          <LuPenLine size={20}></LuPenLine>
        </div>
      </Link>
      <Link href="/myblogs">
        <div className="w-[50px] h-[50px] hover:bg-[#e2e1e1] dark:hover:bg-[#171717] rounded-full flex justify-center items-center cursor-pointer">
          <HiOutlineNewspaper size={20}></HiOutlineNewspaper>
        </div>
      </Link>
      <div className="w-[45px] h-[45px] rounded-full bg-[#220e0e]  dark:bg-amber-50"></div>
    </div>
  );
};

export default Navbar;
