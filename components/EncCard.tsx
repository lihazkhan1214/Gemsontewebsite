import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
import { LArticleCardProps } from '@/constants';
import Link from 'next/link';
function EncCard( {title,
    slug,
    category,
    shortDescription,
    BirthDescription,
    picture
  }: LArticleCardProps) {
    return (
        <>

            <Link href={`/${category}/${slug}`} className="  flex flex-col justify-between cursor-pointer hoverAnimation    bg-[#FFF] shadow-md shadow-[#bebec0]">
               <div className="py-5">
                <div className="relative w-[160px] mx-auto h-[160px]">

                    <Image className='rounded-[50%]' src={picture} alt='not found' fill />
                </div>
                </div>
                <div className="bg-[#F4F6FF] py-5 px-3 mt-5 ">
                    <h1 className="cardTitle text-[#000]">{title}</h1>

                    <p className="text-[14px] text-[#111111] font-normal text-justify mt-5 leading-7">
                       {
                        shortDescription &&(<>
                         {
                            shortDescription.slice(0,200)
                        }
                       
                        </>)
                       }
                       </p>
                </div>

            </Link>

        </>
    )
}

export default EncCard;