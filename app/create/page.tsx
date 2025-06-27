// app/create/page.tsx (or wherever your route is)
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CreateBlog from "./Create"; // separate client component

const Create = async () => {
  const session = await auth();
  if (!session) redirect("/signin");

  return <CreateBlog />;
};

export default Create;
