import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';


interface PostData{
    title:string;
    birthSones:string;
    slug:string;
    category:string;
    shortDescription:string;
    birthDescription:string;
    picture:string;
}

function BirthCard({
    title,
    birthSones,
    slug,
    picture,
    category,
    shortDescription,
    birthDescription}:PostData) {
    return (
        <>

            <Link href={`/${category}/${slug}`} className="sm:w-[384px] flex flex-col justify-between cursor-pointer hoverAnimation mx-auto  bg-[#FFF] border-[#B2B2B2] border-[2px]">
               <div className="py-5">
                <div className="relative w-[160px] mx-auto h-[160px]">

                    <Image className='rounded-[50%]' src={picture} alt='not found' fill />
                </div>
                </div>
                <div className="bg-[#F4F6FF] mt-5 py-5 px-3 ">
                    <h1 className="cardTitle text-[#000]"> {title}- {birthSones}</h1>

                    <p className="text-[14px]  text-[#111111] font-normal text-justify tracking-normal mt-3 leading-7">
                    {birthDescription &&(<>
                        {
                        birthDescription.slice(0,130)
                       }
                       ...
                    </>)}
                       
                       
                       
                        </p>
                </div>

            </Link>

        </>
    )
}

export default BirthCard;