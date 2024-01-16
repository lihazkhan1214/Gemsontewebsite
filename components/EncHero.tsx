import * as React from "react";
import Image from "next/image";

function EncHero() {
  return (
    <div className="flex-col overflow-hidden relative flex min-h-[607px] justify-center items-stretch">
      
      <div className="absolute h-full w-full object-cover object-center inset-0">
      
      <Image src="/assets/fimages/Enc.png" alt="not found" fill/>
      </div>
      <div className="relative backdrop-blur-[7.5px]  flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-[636px] max-w-full flex-col items-center mt-16 mb-28 max-md:my-10">
          <div className="text-white text-center text-6xl font-medium leading-[75px] max-w-[345px] max-md:text-4xl max-md:leading-[54px]">
            <h2 className=" text-4xl text-white">Gemstones</h2>
            
            <h1 className="mt-3r">Encyclopedia</h1>
          </div>
          <p className="text-white text-center text-2xl leading-9 self-stretch mt-20 max-md:max-w-full max-md:mt-10">
            Varied minerals cut and polished for use in jewelry; these natural
            treasures encompass a spectrum of colors, hardness, and cultural
            significance worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}


export default EncHero;
