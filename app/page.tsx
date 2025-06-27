import React from "react";
import Item from "./_comps/Item";

const Home = () => {
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
        <Item canDelete={false}></Item>
      </div>
      <div className="w-full h-[50px]"></div>
    </div>
  );
};

export default Home;
