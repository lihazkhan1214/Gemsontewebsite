"use client";
import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { ArticleData } from '@/constants';

function GemCard() {
  const postData = useSelector((state: RootState) => state.articleData.data) as ArticleData[];

  // Get the three latest items
  const latestPosts = postData.slice(-3);

  return (
    <div className="grid mt-12 gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {latestPosts.map((post, index) => (
        <div key={index} className="sm:w-[390px] hoverAnimation  mx-auto p-5 bg-[#FCFCFF] rounded-[16px]">
          <div className="relative w-[138px] mx-auto h-[131px]">
            <Image src={post.articlePicture.url} alt="not found" fill />
          </div>
          <h1 className="cardTitle mt-5 text-[#21294D]">
            <span className='capitalize'>{post.title1212}</span> Facts and Information
          </h1>
          <p className="text-[16px] text-[#717084] font-normal text-justify mt-3 leading-7">{post.shortDescription.slice(0,200)}..</p>
          <Link href={`/articles/${post.slug}`} className='text-[#6B03C1] text-lg mt-3 font-medium flex items-center'>Read more <ChevronRight /> </Link>
        </div>
      ))}
    </div>
  );
}

export default GemCard;
