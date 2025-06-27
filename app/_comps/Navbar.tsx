import React from "react";
import { LuPenLine } from "react-icons/lu";
import { HiOutlineNewspaper } from "react-icons/hi2";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import { FiLogOut } from "react-icons/fi";

const Navbar = async () => {
  const session = await auth();
  if (!session) {
    return (
      <div className="w-full flex z-50 h-[50px] relative items-center justify-end  py-3 px-4 gap-4"></div>
    );
  }
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
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/signin" });
        }}
      >
        <button
          className="w-[50px] h-[50px] hover:bg-[#e2e1e1] dark:hover:bg-[#171717] rounded-full flex justify-center items-center cursor-pointer"
          type="submit"
        >
          <FiLogOut size={20}></FiLogOut>
        </button>
      </form>
      <div className="w-[40px] h-[40px] rounded-full">
        <img
          src={session.user.image}
          alt="user profile"
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
