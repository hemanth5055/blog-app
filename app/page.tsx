import React from "react";
import Item from "./_comps/Item";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { allBlogsExceptUser } from "@/actions/crud";

const Home = async () => {
  const session = await auth();
  if (!session) redirect("/signin");
  const blogs = await allBlogsExceptUser(session.user.id);
  console.log(blogs);
  return (
    <div className="w-full flex flex-col gap-4 px-6">
      {/* heading */}
      <div className="w-full flex flex-col">
        <h1 className="font-mont dark:text-[#E5E5E5] text-[64px] font-medium tracking-[-0.055em]">
          See What’s
        </h1>
        <h4 className="font-mont text-[40px] dark:text-[#b0b0b0] relative bottom-[20px] font-medium tracking-[-0.055em] text-[#CBCBCB]">
          Happening Around
        </h4>
      </div>
      {/* blog */}
      <div className="w-full flex flex-col gap-[25px] ">
        {/* blog-items */}
        {blogs.length === 0 ? (
          <p className="text-lg text-gray-500 font-mont">
            No blogs yet from others.
          </p>
        ) : (
          blogs.map((item) => (
            <Item
              key={item.id} // ✅ Correct: key on the outer component
              canDelete={false}
              name={item.name}
              id={item.id}
              updatedAt={item.updatedAt}
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

export default Home;
