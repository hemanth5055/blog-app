// app/signin/page.tsx or wherever your route is
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import SignInButton from "./SignInButton"; // separate client component

const Signin = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 px-6">
      <SignInButton />
    </div>
  );
};

export default Signin;
