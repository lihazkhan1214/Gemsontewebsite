
"use client"
import Image from "next/image";

import { useState,useEffect } from "react";
import { Textanimation } from "./Textanimaiton";
import { Posts } from "@/services/index";
// import Banner from "@/app/components/Banner";



export function HeroSection() {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    getBannerData();
  }, []);

  const getBannerData = async () => {
    const res = await Posts();
    console.log("res",res)
    setData(res);
    return;
  };
  console.log("data",data)
  return (<>
    <div className="flex-col overflow-hidden relative flex min-h-[854px] px-2 md:padding-x  py-12 items-start max-md:px-5">

      <div className="absolute h-full w-full object-cover object-center inset-0">
        <Image src="/assets/fimages/hero.png" alt="not found" fill /></div>
      <div >
        <div className=" hidden md:block h-[160px]">

          <Textanimation />
        </div>

      </div>
     <h1  className="block md:hidden relative text-white flex text-7xl font-semibold leading-[90px] w-[772px] max-w-full ml-4 md:ml-12 mt-14 max-md:text-4xl max-md:leading-[54px] max-md:mt-10"> Discover the World of  Gemstones</h1>

      <div className="relative text-white text-2xl leading-9 w-[578px] max-w-full ml-4 md:ml-12 mt-11 max-md:mt-10">
        Unveiling Earths Treasures Explore the Radiance of Gemstones  Your
        Ultimate Guide to the World of Precious and Semi-Precious Gems
      </div>{" "}
      <div className="relative text-white text-2xl font-medium leading-[54.72px] whitespace-nowrap justify-center items-stretch bg-violet-800 ml-12 mt-20 mb-48 px-12 py-2 rounded-lg max-md:ml-2.5 max-md:my-10 max-md:px-5">
        Get Started
      </div>
    </div>




  </>
  );
}

