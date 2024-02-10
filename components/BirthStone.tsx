"use client";
import React from 'react';
import BirthCard from './BirthCard';
import Link from 'next/link';
import PostData from '@/constants';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export function Birthstone() {
  const postData = useSelector((state: RootState) => state.postData.data) as PostData[];

  // Get the current month (0-based)
  const currentMonth = new Date().getMonth() + 1;

  const currentMonthItems = postData.filter(item => {
    // Use the correct property name 'birthSones' instead of 'birthStones'
    const birthMonth = new Date(Date.parse(`01 ${item.birthSones} 2000`)).getMonth() + 1;
    return birthMonth === currentMonth;
  });

  console.log(currentMonthItems);

  return (
    <>
      <div className="padding-x mt-12 py-10 " id="GemBirth">
        <div className="flex flex-col items-center ">
          <h1 className='global__title text-center text-[#000000]'>Birth Gemstones</h1>
          <p className='text-[#404040] text-[22px] mt-3 leading-8 md:w-[80%] text-center'>
            Certainly! Here are birthstones for each month along with a brief.
          </p>
        </div>
        <div className="grid mt-12 gap-5 lg:grid-cols-2 xl:grid-cols-3 ">
          {/* Render BirthCard components for the filtered birthstones */}
          {currentMonthItems.map((birthstone, index) => (
            <BirthCard
              key={index}
              title={birthstone.title}
              birthSones={birthstone.birthSones}

              slug={birthstone.slug}
              category={birthstone.category}
              shortDescription={birthstone.shortDescription}
              birthDescription={birthstone.birthDescription}
              picture={birthstone.featuredimage.url}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Link
            href="/allbirthstones"
            className="text-[#FFFFFF] bg-[#6B03C1] text-2xl font-semibold leading-10 hover:text-[#FFFFFF] hover:bg-[#000] whitespace-nowrap justify-center items-center border mt-12 px-16 py-2 rounded-md  max-md:mt-10 max-md:px-5"
          >
            View all
          </Link>
        </div>
      </div>
    </>
  );
}

export default Birthstone;
