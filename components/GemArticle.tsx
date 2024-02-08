import React from 'react';
import Image from 'next/image';
import GemCard from './GemCard';
import Link from 'next/link';




export function GetArticle() {

  return (
    <>
      <div className="padding-x mt-12 py-10 relative w-full h-full " id="GemArticles">
        <Image src="/assets/fimages/article.png" alt='not found' fill className='absolute  -z-40'/>
       

        <div className=" flex flex-col items-center ">
          <h1 className='global__title text-center text-[#FFF]'>Gemstones  Recent Articles</h1>
          
          <p className='text-white text-[22px] mt-3 leading-8 md:w-[80%] text-center'>Unveiling the World of Gemstones: In-depth Articles and Insights on the Beauty, History, and Mystique of Earth&apos;s Precious Treasures</p>

        </div>
        
<GemCard></GemCard>


        <div className="flex flex-col items-center">

          <Link href="/allarticles" className=" text-[#FFFFFF] text-2xl font-semibold leading-10 hover:bg-[#FFFFFF] hover:text-[#000] whitespace-nowrap justify-center items-center border mt-12 px-16 py-2 rounded-md border-solid border-[#FFFFFF] max-md:mt-10 max-md:px-5">
            View all
          </Link>

        </div>


      </div>


    </>
  )
}

export default GetArticle