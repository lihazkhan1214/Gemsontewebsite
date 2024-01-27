import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
interface bithCard {
    title:string;
    category:string;
    shortDescription:string;
    slug:string;
    birthDescription:string;
    birthstones:string;
    picture:string;
    

}


function AllBstoneCard({title,picture,category,birthstones,slug,shortDescription,birthDescription}:bithCard) {
    return (
        <>

            <Link href={`/${category}/${slug}`} className="  flex flex-col justify-between cursor-pointer hoverAnimation rounded-[16px]   bg-[#FFF] shadow-md shadow-[#bebec0]">
                 <div className="py-5">
                <div className="relative w-[160px]  mx-auto h-[160px]">

                    <Image className='rounded-[50%]' src={picture} alt='not found' fill />
                </div>
                </div>


                <div className="bg-[#EDEDED] py-5 px-3 mt-5 ">
                    <h1 className="cardTitle text-[#000] text-center">{title} - {birthstones}</h1>

                    <p className="text-sm  text-[#111111] font-normal text-center mt-10 leading-7">
                      {
                        birthDescription && (<>
                        {
                            birthDescription.slice(0,200)
                        }
                        
                        </>)
                      }
                      ..
                       </p>
                </div>

            </Link>

        </>
    )
}

export default AllBstoneCard;