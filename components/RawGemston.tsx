// "use client"

import { Rawgemcard } from "./RawgemCard"

export function RawGemston() {
  return (
    <>
      <div className="padding-x mt-12  py-10 RawGem" id="GemArticles">


        <h1 className='global__title  text-[#FFF]'>Raw Gemstones</h1>

        <p className='text-white text-[22px] mt-5 leading-8 md:w-[80%] text-justify'>
  Embark on a global gemstone odyssey, from Sri Lanka&apos;s dazzling sapphires to Colombia&apos;s lush emeralds, exploring the countries with the richest variety of precious stones.
</p>


        <Rawgemcard />
        <Rawgemcard />
        <Rawgemcard />

        <div className="flex flex-col items-center">

          <button className=" text-[#FFFFFF] text-2xl font-semibold leading-10 whitespace-nowrap justify-center items-center border mt-12 px-16 py-2 rounded-md border-solid border-[#FFFFFF] hover:text-[#000] hover:bg-[#FFF] max-md:mt-10 max-md:px-5">
            View all
          </button>

        </div>


      </div>


    </>
  )
}

