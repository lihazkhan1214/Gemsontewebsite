import * as React from "react";
import Image from "next/image";

function AllBstoneHero() {
  return (
    <div className="flex-col overflow-hidden relative flex min-h-[607px] justify-center items-stretch">
      
      <div className="absolute h-full w-full object-cover object-center inset-0">
      
      <Image src="/assets/fimages/allBhero.png" alt="not found" fill/>
      </div>
      <div className="relative backdrop-blur-[7.5px] flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-[636px] max-w-full flex-col items-center mt-16 mb-28 max-md:my-10">
        
            
            <h1 className="text-white text-center text-6xl font-medium leading-[75px] ">Birth Gemstones</h1>
       
          <p className="text-white text-center text-2xl leading-9 self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          Birthstones, also known as birth gems, are precious or semi-precious stones associated with each month of the year, believed to bring good luck and align with the wearer's astrological sign.
          </p>
        </div>
      </div>
    </div>
  );
}


export default AllBstoneHero;
