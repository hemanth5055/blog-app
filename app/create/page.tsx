"use client";
import React, { useState } from "react";
import EditorDemo from "../_comps/Myeditor";
import { createEditor } from "lexical";
import { $generateHtmlFromNodes } from "@lexical/html";

const Create = () => {
  const [content, setContent] = useState({});
  const handleSubmit = () => {
    console.log(content);
  };
  return (
    <div className="w-full flex flex-col gap-4 px-6">
      <div className="w-full flex flex-col relative bottom-[50px] ">
        <h1 className="font-mont dark:text-[#E5E5E5] text-[54px] font-medium tracking-[-0.055em]">
          Create a Blog
        </h1>
        <h4 className="font-mont  dark:text-[#b0b0b0] text-[30px] relative bottom-[20px] font-medium tracking-[-0.055em] text-[#CBCBCB]">
          Share Ideas. Inspire Change.
        </h4>
      </div>
      {/* title-editor */}
      <div className="w-full flex flex-col gap-4 relative bottom-[50px]">
        <div className="w-full flex justify-between">
          <input
            type="text"
            placeholder="Title"
            className="outline-none border-b-2 dark:text-[#E5E5E5] border-0 w-[50%] h-[50px] placeholder:text-[#B6B4B4] text-[23px] font-mont font-medium tracking-[-0.055em]"
          />
        </div>
        <EditorDemo setContent={setContent}></EditorDemo>
        <div className="w-full flex justify-center items-center">
          <div
            className="font-mont text-[20px] cursor-pointer bg-[#151515] py-1 px-4 rounded-[10px] text-white font-medium tracking-[-0.055em]"
            onClick={handleSubmit}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
