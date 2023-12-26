import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
function BirthCard() {
    return (
        <>

            <div className="sm:w-[384px] flex flex-col justify-between cursor-pointer hoverAnimation sm:h-[408px] mx-auto  bg-[#FFF] border-[#B2B2B2] border-[2px]">

                <div className="relative w-[208px] mx-auto h-[263px]">

                    <Image src="/assets/dami/card1.png" alt='not found' fill />
                </div>
                <div className="bg-[#F4F6FF] p-3 ">
                    <h1 className="cardTitle text-[#000]">Red Garnet - January</h1>

                    <p className="text-[14px] text-[#111111] font-normal text-justify mt-3 leading-7">garnet is an entire group of minerals that vary in their
                        chemical composition, resulting in a variety of...</p>
                </div>

            </div>

        </>
    )
}

export default BirthCard;