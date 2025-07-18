import React from "react";
import { LuPenLine } from "react-icons/lu";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RiHomeLine } from "react-icons/ri";

import Link from "next/link";
import { auth, signOut } from "@/auth";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  if (!session) {
    return (
      <div className="w-full flex z-50 h-[50px] relative items-center justify-end  py-3 px-4 gap-4">
        <Link href="/signin">
          <div className="w-[50px] h-[50px] max-sm:w-[45px] max-sm:h-[45px] hover:bg-[#e2e1e1] dark:hover:bg-[#171717] rounded-full flex justify-center items-center cursor-pointer">
            <RiHomeLine size={20}></RiHomeLine>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full flex z-50 relative items-center justify-end  py-3 px-4 gap-4">
      <Link href="/">
        <div className="w-[50px] h-[50px] max-sm:w-[45px] max-sm:h-[45px] hover:bg-[#e2e1e1] dark:hover:bg-[#171717] rounded-full flex justify-center items-center cursor-pointer">
          <RiHomeLine size={20}></RiHomeLine>
        </div>
      </Link>
      <Link href="/create">
        <div className="w-[50px] h-[50px] max-sm:w-[45px] max-sm:h-[45px] hover:bg-[#e2e1e1] dark:hover:bg-[#171717] rounded-full flex justify-center items-center cursor-pointer">
          <LuPenLine size={20}></LuPenLine>
        </div>
      </Link>
      <Link href="/myblogs">
        <div className="w-[50px] h-[50px] max-sm:w-[45px] max-sm:h-[45px] hover:bg-[#e2e1e1] dark:hover:bg-[#171717] rounded-full flex justify-center items-center cursor-pointer">
          <HiOutlineNewspaper size={20}></HiOutlineNewspaper>
        </div>
      </Link>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/signin" });
        }}
      >
        <button
          className="w-[50px] h-[50px] max-sm:w-[45px] max-sm:h-[45px] hover:bg-[#e2e1e1] dark:hover:bg-[#171717] rounded-full flex justify-center items-center cursor-pointer"
          type="submit"
        >
          <FiLogOut size={20}></FiLogOut>
        </button>
      </form>
      <div className="w-[40px] relative h-[40px] max-sm:w-[35px] max-sm:h-[35px] rounded-full">
        <Image
          src={session.user.image}
          referrerPolicy="no-referrer"
          alt="user profile"
          className="rounded-full object-cover"
          fill
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
