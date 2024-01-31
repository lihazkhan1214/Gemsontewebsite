"use client";
import * as React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { Textanimation } from "./Textanimaiton";
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '@/redux/Slice';
import { RootState } from '@/redux/store';
import { Posts } from "@/services/index";
import PostData from "@/constants";

function AllrawgemHero() {



  const dispatch = useDispatch();
  const postData = useSelector((state: RootState) => state.postData.data) as PostData[];

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

 

  // Initial data fetch when the component mounts
  useEffect(() => {
    // Try to retrieve data from localStorage on mount
    const storedPostData = localStorage.getItem('postData');
    if (storedPostData) {
      dispatch(setData(JSON.parse(storedPostData)));
    } else {
      fetchData();
    }

   
  }, [dispatch]);
  return (
    <div className="flex-col overflow-hidden relative flex min-h-[607px] justify-center items-stretch">
      
      <div className="absolute h-full w-full object-cover object-center inset-0">
      
      <Image src="/assets/fimages/allrawgemhero.png" alt="not found" fill/>
      </div>
      <div className="relative backdrop-blur-[7.5px]  flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-[636px] max-w-full flex-col items-center mt-16 mb-28 max-md:my-10">
        
            
            <h1 className="text-white text-center text-6xl font-medium leading-[75px] ">Raw Gemstones</h1>
       
          <p className="text-white text-center text-2xl leading-9 self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          Varied minerals cut and polished for use in jewelry; these natural treasures encompass a spectrum of colors, hardness, and cultural significance worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}


export default AllrawgemHero;
