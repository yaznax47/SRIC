"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Category from "@/components/Categories";
import Popular_course from "@/components/Popular_course";
import Testimonial from "@/components/Testimonial";
import CustomButton from "@/components/CustomButton";

export default function ProgramPage() {
  // const [widthcount, setWidthCount] = useState(window.screen.width);
  // const actualWidth = () => {
  //   setWidthCount(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", actualWidth);
  //   return () => {
  //     window.removeEventListener("resize", actualWidth);
  //   };
  // });

  return (
    <>
      <div className=" ">
        <div className=" relative overflow-hidden">
          <div className="absolute z-10 bg-black/50 w-[100%] h-[100%]"></div>

          <Image
            src="/images/banner1.jpg"
            width={1000}
            height={1000}
            className=" w-full h-[350px] object-cover"
            quality={85}
            alt="my-img"
          />
          <div className=" ">
            <h1 className="text-white z-10 font-bold text-4xl absolute  top-[30%] left-[45%] ">
              Popular Program
            </h1>
            {/* <h1 className="text-white z-10 font-bold  absolute  top-[35%] left-[45%] ">Home/Popular Program</h1> */}
          </div>
        </div>
      </div>
      {/* <div className="mx-auto w-auoto justify-center items-center flex">
        <p>The actual size of screen is</p>
        <h1>{widthcount}</h1>
      </div> */}
      <Category />
      <Popular_course />
      <Testimonial />
      <CustomButton />
    </>
  );
}
