import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
function AllBstoneCard() {
    return (
        <>

            <div className="  flex flex-col justify-between cursor-pointer hoverAnimation rounded-[16px]   bg-[#FFF] shadow-md shadow-[#bebec0]">
                 <div className="py-5">
                <div className="relative w-[208px] mx-auto h-[163px]">

                    <Image src="/assets/dami/card4.png" alt='not found' fill />
                </div>
                </div>


                <div className="bg-[#EDEDED] py-5 px-3 mt-5 ">
                    <h1 className="cardTitle text-[#000] text-center">Amethy - february</h1>

                    <p className="text-sm  text-[#111111] font-normal text-center mt-10 leading-7">garnet is an entire group of minerals that vary in their
chemical composition, resulting in a variety chemical composition, resulting in a variety of…
                       </p>
                </div>

            </div>

        </>
    )
}

export default AllBstoneCard;