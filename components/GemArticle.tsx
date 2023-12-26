import React from 'react';
import Image from 'next/image';
import GemCard from './GemCard';



export function GetArticle() {
  return (
    <>
      <div className="padding-x mt-12 py-10 Gemarticle" id="GemArticles">

        <div className=" flex flex-col items-center ">
          <h1 className='global__title text-center text-[#FFF]'>Gemstones Recent Articles</h1>
          <p className='text-white  text-[22px] mt-3 leading-8 md:w-[80%] text-center'>Unveiling the World of Gemstones: In-depth Articles and Insights on the Beauty, History, and Mystique of Earth's Precious Treasures</p>
        </div>
        <div className="grid mt-12 gap-5  lg:grid-cols-2 xl:grid-cols-3 ">


          <GemCard></GemCard>
          <GemCard></GemCard>
          <GemCard></GemCard>






        </div>
        <div className="flex flex-col items-center">

          <button className=" text-[#FFFFFF] text-2xl font-semibold leading-10 hover:bg-[#FFFFFF] hover:text-[#000] whitespace-nowrap justify-center items-center border mt-12 px-16 py-2 rounded-md border-solid border-[#FFFFFF] max-md:mt-10 max-md:px-5">
            View all
          </button>

        </div>


      </div>


    </>
  )
}

export default GetArticle