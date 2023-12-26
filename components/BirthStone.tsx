import React from 'react';
import Image from 'next/image';
import BirthCard from './BirthCard';



export function Birthstone() {
  return (
    <>
      <div className="padding-x mt-12 py-10 " id="GemBirth">

        <div className=" flex flex-col items-center ">
          <h1 className='global__title text-center text-[#000000]'>Birth Gemstones</h1>
          <p className='text-[#404040]  text-[22px] mt-3 leading-8 md:w-[80%] text-center'>Certainly! Here are birthstones for each month along with a brief.</p>
        </div>
        <div className="grid mt-12 gap-5  lg:grid-cols-2 xl:grid-cols-3 ">


         <BirthCard></BirthCard>

         <BirthCard></BirthCard>
         <BirthCard></BirthCard>




        </div>
        <div className="flex flex-col items-center">

          <button className=" text-[#FFFFFF] bg-[#6B03C1] text-2xl font-semibold leading-10 hover:text-[#FFFFFF] hover:bg-[#000] whitespace-nowrap justify-center items-center border mt-12 px-16 py-2 rounded-md  max-md:mt-10 max-md:px-5">
            View all
          </button>

        </div>


      </div>


    </>
  )
}

export default Birthstone