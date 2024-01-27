"use client";
import Image from "next/image";
import { LArticleCardProps } from "@/constants";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";

export function Rawgemcard({
  title,
  slug,
  category,
  shortDescription,
  BirthDescription
  ,
  picture
}: LArticleCardProps) {
  return (
    <div className="bg-white  mt-12 pl-20 pr-10 py-5 rounded-3xl max-md:px-5">
      <div className="gap-5 flex max-md:flex-col-reverse  max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <h1 className="text-slate-600 global__title">
              {title}
            </h1>
            <p className="text-slate-600 text-justify text-lg leading-7 mt-5 max-md:max-w-full max-md:mt-10">


              {shortDescription && (<>
                {shortDescription.slice(0, 400)}
              </>)}
              ..

            </p>
            <Link href={`/${category}/${slug}`} className='text-[#6B03C1] text-lg mt-3 font-medium flex items-center'>Read more <ChevronRight /> </Link>
          </div>
        </div>
        <div className="flex flex-col items-stretch  w-2/6  ml-12 max-md:w-full max-md:ml-0">
          <div className="aspect-[1.19] hoverAnimation relative object-contain object-center rounded-[16px] w-full overflow-hidden grow max-md:mt-10">

            <Image src={picture} alt="not found" fill />

          </div>
        </div>
      </div>
    </div>
  );
}


