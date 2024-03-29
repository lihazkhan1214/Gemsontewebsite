import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export interface LArticleCardProps {
  title: string;
  slug: string;

  shortDescription: string;

  picture: string;
}





function LArticleCard({
  title,
  slug,

  shortDescription,
  
  picture
}: LArticleCardProps) {


  return (
    <>
      <div className="flex flex-col items-center justify-between bg-[#FFF] shadow-md shadow-[#bebec0]">
        <div className="relative w-full mx-auto h-[217px]">
          <Image src={picture} alt="not found" fill />
        </div>

        <h1 className="text-[#000] mt-5 text-[24px] font-normal text-center">
        


          {title}
         
        </h1>

        <p className="text-[16px] px-4 break-all text-[#777777] font-normal text-center mt-5 leading-7">
          {shortDescription && shortDescription.slice ? (
            shortDescription.slice(0, 130)
          ) : (
            shortDescription
          )}
          ..
        </p>

        <div className="mb-5">
          <Link href={`/articles/${slug}`}>
            <button className="mt-5 bg-[#6B03C1] rounded-sm w-[120px] text-[#FFFFFF] font-normal text-[14px] py-2">
              View
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LArticleCard;
