import React from "react";

const Signin = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 px-6">
      <div className="flex items-center gap-4 relative top-[250px] bg-[#F5F5F5] dark:bg-[#171717] p-2 px-6 cursor-pointer rounded-[13px]">
        <div className="w-[35px] h-[35px]">
          <img src="/google-icon.png" alt="google-icon" />
        </div>
        <h1 className="font-mont dark:text-[#7f7f7f] text-[20px] leading-[50px] font-medium tracking-[-0.055em]">
          Sign-in with Google.
        </h1>
      </div>
    </div>
  );
};

export default Signin;
