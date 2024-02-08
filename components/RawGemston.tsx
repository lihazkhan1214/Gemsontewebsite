"use client"
import { Rawgemcard } from "./RawgemCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PostData from "@/constants";
import Link from "next/link";
import Image from "next/image";

interface RawItem {
  polishedImg: { url: string };
  birthDescription: string;
  shortDescription: string;
  title: string;
  slug: string;
  category: string;
}

export function RawGemston() {
  const postData = useSelector((state: RootState) => state.postData.data) as PostData[];

  // Filter raw items
  const rawItems = postData.filter((item) => item.category === "rawstones");

  // Get a random sample of 3 raw items
  const randomRawItems = getRandomItems(rawItems, 3);

  return (
    <>
      <div className="padding-x mt-12 py-10 relative h-full w-full " id="GemArticles">
        {/* Removed background image */}
        <Image src="/assets/fimages/rawgem.png" className="absolute  -z-40" alt="Background Image" fill />

        <h1 className='global__title text-[#FFF]'>Raw Gemstones</h1>
        <p className='text-white text-[22px] mt-5 leading-8 md:w-[80%] text-justify'>
          Embark on a global gemstone odyssey, from Sri Lanka&apos;s dazzling sapphires to Colombia&apos;s lush emeralds, exploring the countries with the richest variety of precious stones.
        </p>

        {/* Render the random raw gem cards */}
        {randomRawItems.map((rawItem: RawItem, index: number) => (
          <Rawgemcard
            key={index}
            picture={rawItem.polishedImg.url}
            BirthDescription={rawItem.birthDescription}
            shortDescription={rawItem.shortDescription}
            title={rawItem.title}
            slug={rawItem.slug}
            category={rawItem.category}
          />
        ))}

        <div className="flex flex-col items-center">
          <Link href="/allrawgems" className="text-[#FFFFFF] text-2xl font-semibold leading-10 whitespace-nowrap justify-center items-center border mt-12 px-16 py-2 rounded-md border-solid border-[#FFFFFF] hover:text-[#000] hover:bg-[#FFF] max-md:mt-10 max-md:px-5">
            View all
          </Link>
        </div>
      </div>
    </>
  );
}

// Function to get a random sample of items from an array
function getRandomItems(array: RawItem[], numItems: number): RawItem[] {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}
