import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
function GemCard() {
  return (
    <>
    
    <div className="sm:w-[390px] hoverAnimation sm:h-[390px] mx-auto p-5 bg-[#FCFCFF]  rounded-[16px]">

<div className="relative w-[138px] mx-auto h-[131px]">

  <Image src="/assets/dami/card1.png" alt='not found' fill />
</div>

<h1 className="cardTitle text-[#21294D]">What Is Ruby Gemstone Facts and Information</h1>

<p className="text-[16px] text-[#717084] font-normal text-justify mt-3 leading-7">Ruby is probably the most iconic coloured gemstone in the world, and its name will forever be linked with its striking, definitive colour...</p>

<button className='text-[#6B03C1] text-lg mt-3 font-medium flex items-center'>Read more <ChevronRight /> </button>

</div>
    
    </>
  )
}

export default GemCard