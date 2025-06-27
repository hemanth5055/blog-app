import React from "react";

const Blog = () => {
  const blogContent = `
    <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight" dir="ltr"><span style="font-family: Montserrat; white-space: pre-wrap;">This is Heading 1</span></h3><p class="leading-7 [&amp;:not(:first-child)]:mt-6" dir="ltr"><span style="font-family: Verdana; white-space: pre-wrap;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, </span><i><em class="italic" style="font-family: Verdana; white-space: pre-wrap;">making this the first true generator on the Internet. </em></i><span style="font-family: Verdana; white-space: pre-wrap;">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from.</span></p>
  `;

  return (
    <div className="w-full flex flex-col gap-5 px-6">
      <div className="w-full flex flex-col gap-2">
        <h1 className="font-mont text-[40px] dark:text-[#E5E5E5] w-[75%] leading-[50px] font-medium tracking-[-0.055em]">
          A real-time chat application built with the MERN stack and WebSockets
          (socket.io).
        </h1>

        <div className="w-full flex gap-4 items-center justify-between">
          <div className="flex gap-2 items-center py-2">
            <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]" />
            <h2 className="font-mont text-[18px] dark:text-[#7f7f7f] font-medium tracking-[-0.055em] text-[#4d4d4d]">
              John Doe
            </h2>
            <h2 className="font-mont text-[18px] px-2 dark:text-[#7f7f7f] font-medium tracking-[-0.055em] text-[#4d4d4d]">
              2 Min Read
            </h2>
          </div>
        </div>

        <div className="w-[60%] h-[2px] bg-gray-300  dark:bg-gray-500 my-5" />

        {/* Render HTML from backend */}
        <div
          className="prose prose-lg dark:prose-invert font-mont"
          dangerouslySetInnerHTML={{ __html: blogContent }}
        />
      </div>
    </div>
  );
};

export default Blog;
