"use client"
// Assuming your `setData` action from '@/redux/Slice' returns a promise
import Image from "next/image";
import { useState, useEffect } from "react";
import { Textanimation } from "./Textanimaiton";
import { useDispatch} from 'react-redux';
import { setData } from '@/redux/Slice';
import { RootState } from '@/redux/store';
import { Posts } from "@/services/index";
import PostData from "@/constants";
import { Articles } from "@/services/index";
import { ArticleData } from "@/constants";
import { setDataArticle } from "@/redux/ArticleSlice";

export function HeroSection() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await Posts();
      const typedRes = (res as { posts?: PostData[] }).posts;

      if (Array.isArray(typedRes)) {
        dispatch(setData(typedRes));
        // Save data to localStorage
        localStorage.setItem('postData', JSON.stringify(typedRes));
      } else {
        console.error('Invalid response format:', res);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchArticle = async () => {
    try {
      const res = await Articles();
      const typedRes = (res as { articles12?: ArticleData[] }).articles12;

      if (Array.isArray(typedRes)) {
        dispatch(setDataArticle(typedRes));
        // Save article data to localStorage
        localStorage.setItem('articleData', JSON.stringify(typedRes));
      } else {
        console.error('Invalid response format:', res);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Initial data fetch when the component mounts
  useEffect(() => {
    
    fetchData();
    fetchArticle();
  }, []);

  return (
    <>
      <div className="flex-col overflow-hidden relative flex min-h-[854px] px-2 md:padding-x  py-12 items-start max-md:px-5">
        <div className="absolute h-full w-full object-cover object-center inset-0">
          <Image className="" src="/assets/fimages/mobilehero.png" alt="not found" fill/>
        </div>
        <div>
          <div className="hidden md:block h-[160px]">
            <Textanimation />
          </div>
        </div>
        <h1 className="block md:hidden relative text-white flex text-7xl font-semibold leading-[90px] w-[772px] max-w-full ml-4 md:ml-12 mt-14 max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
          Discover the World of Gemstones
        </h1>
        <div className="relative text-white text-2xl leading-9 w-[578px] max-w-full ml-4 md:ml-12 mt-11 max-md:mt-10">
          Unveiling Earths Treasures Explore the Radiance of Gemstones Your
          Ultimate Guide to the World of Precious and Semi-Precious Gems
        </div>
        <div className="relative text-white text-2xl font-medium leading-[54.72px] whitespace-nowrap justify-center items-stretch bg-violet-800 ml-12 mt-20 mb-48 px-12 py-2 rounded-lg max-md:ml-2.5 max-md:my-10 max-md:px-5">
          Get Started
        </div>
      </div>
    </>
  );
}