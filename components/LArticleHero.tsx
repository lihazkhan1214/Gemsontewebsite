"use client";
import * as React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Textanimation } from "./Textanimaiton";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import { Articles } from "@/services/index";
import { ArticleData } from "@/constants";
import { setDataArticle } from "@/redux/ArticleSlice";

function LArticleHero() {

    const dispatch = useDispatch();

  
    
  
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
      
  
      fetchArticle();
       
    
    }, []);













    return (
        <div className="backdrop-blur-sm  pl-20 pr-12 py-12 w-full h-full relative  max-md:px-5">
             <Image src="/assets/fimages/allarticleHero.png" alt="not found" className=" absolute -z-10" fill/>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                        <h1 className="text-white text-6xl font-bold leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                            Gemstones Articles
                        </h1>
                        <p className="text-white text-2xl leading-9 mt-7 max-md:max-w-full">
                            Discover the enchanting world of gemstones in this brief
                            exploration. From the timeless elegance of diamonds symbolizing
                            enduring love to the vibrant passion embodied by rubies,
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[52%]  ml-5 max-md:w-full max-md:ml-0">




                    <div className="aspect-[1.21] vertical-animation relative object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10">

                        <Image  src="/assets/fimages/allhero2.png" alt="not found" fill />



                    </div>





                </div>
            </div>
        </div>
    );
}

export default LArticleHero;


