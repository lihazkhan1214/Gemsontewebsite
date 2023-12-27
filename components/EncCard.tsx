import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
function EncCard() {
    return (
        <>

            <div className="  flex flex-col justify-between cursor-pointer hoverAnimation    bg-[#FFF] shadow-md shadow-[#bebec0]">
               <div className="py-5">
                <div className="relative w-[208px] mx-auto h-[163px]">

                    <Image src="/assets/dami/card4.png" alt='not found' fill />
                </div>
                </div>
                <div className="bg-[#F4F6FF] py-5 px-3 mt-5 ">
                    <h1 className="cardTitle text-[#000]">Amethy - february</h1>

                    <p className="text-[14px] text-[#111111] font-normal text-justify mt-5 leading-7">chemical composition, resulting in a variety composition, resulting in a variety
                       </p>
                </div>

            </div>

        </>
    )
}

export default EncCard;