import * as React from "react";
import Image from "next/image";

function GemAbout() {
  return (
    <div className="padding-x py-10">
      <h1 className="text-black text-center global__title">
        Gemstones
      </h1>

      <div className="flex  flex-col xl:flex-row gap-10 mt-10">

        <div className="flex-1  xl:h-[500px] padding-x py-10 border backdrop-blur-[1.5px] rounded-lg border-solid border-neutral-300 bg-white bg-opacity-50">

          <h1 className="text-black text-5xl font-semibold leading-[61px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            The Most Rarest Gemstones
          </h1>


          <div className="text-black text-lg leading-8 self-stretch mt-5  max-md:max-w-full">
            <p className="text-justify">
              &quot;Embark on a journey through the rarest treasures of the
              Earth with our collection of the most elusive gemstones. Each
              one is a marvel of nature, boasting exquisite colors,
              exceptional clarity, and a scarcity that adds to its allure.
              Discover the mystique of these precious stones, from the
              mesmerizing blue hues of benitoite to the enchanting pink of
              musgravite.
             
            </p>
            <button className="ml-[50%] sm:ml-[80%] w-[120px] h-[48px] text-white bg-[#6B03C1] px-4 py-2 rounded-sm cursor-pointer text-xl font-medium leading-8 whitespace-nowrap mr-12 mt-1.5 max-md:mr-2.5">
                See all
              </button>

          </div>

        </div>
        <div className="xl:flex-1 w-full relative h-[300px] m sm:h-[500px]">

          <Image src="/assets/fimages/gemabout.png" alt="not found" fill />


        </div>



      </div>

    </div>
  );
}

export default GemAbout;
