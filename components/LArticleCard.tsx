import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
function LArticleCard() {
    return (
        <>

            <div className="  flex flex-col items-center justify-between       bg-[#FFF] shadow-md shadow-[#bebec0]">

                <div className="relative w-full mx-auto h-[217px]">

                    <Image src="/assets/dami/card3.png" alt='not found' fill />
                </div>

                <h1 className=" text-[#000] mt-5 text-[24px] font-normal text-center">Ouro Preto</h1>

                <p className="text-[16px] px-4  text-[#777777] font-normal text-center mt-5 leading-7">

                    Prized for its unparalleled brilliance and durability, the diamond  engagement rings.


                </p>
                <div className="mb-5">
<button className='mt-5 bg-[#6B03C1] rounded-sm w-[120px] text-[#FFFFFF] font-normal text-[14px] py-2'>View</button>

            </div>
            </div>

        </>
    )
}

export default LArticleCard;