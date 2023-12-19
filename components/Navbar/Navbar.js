"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" w-full  flex h-[72px] justify-center items-center ">
        <div className="flex w-[1280px] pl-[32px] justify-between items-center">
          <Image
            className="ml-[50px] mt-[25px]"
            src="/assets/Brand Logo - Nexsales.png"
            alt="me"
            width="150"
            height="40"
          />
        <div className="flex justify-end items-center gap-3 w-full h-[auto]"></div>
 
        </div>
      </div>
    </>
  );
};

export default Navbar;
