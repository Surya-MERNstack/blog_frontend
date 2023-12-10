import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black   xl:px-[100px] lg:px-[100px] md:px-[500px] px-8 flex gap-10 justify-between text-sm md:text-md py-8 md:mt-8">
        <div className="flex flex-col text-white mb-4 md:mb-0 ">
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            Featured Blogs
          </p>
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            Most viewed
          </p>
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            Readers choice
          </p>
        </div>

        <div className="flex flex-col text-white mb-4 md:mb-0">
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            Most engaging
          </p>
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            Recent Posts
          </p>
        </div>

        <div className="flex flex-col text-white">
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            About us
          </p>
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            Terms & Conditions
          </p>
          <p className="hover:border-b border-white mt-2 hover:cursor-pointer">
            Terms & Services
          </p>
        </div>
      </div>
      <p className="py-2 pb-2 text-center text-white bg-black">
        All rights reserved @2023
      </p>
    </>
  );
};

export default Footer;
