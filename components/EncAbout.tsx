"use client";
import * as React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import PostData from "@/constants";
import { RootState } from "@/redux/store";

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const items = [{ id: "" }, { id: "" }, { id: "" }, { id: "" }, { id: "" }, { id: "" }, { id: "" }];

function EncAbout() {
  const postData = useSelector((state: RootState) => state.postData.data) as PostData[];

  const encyclopediaItems = postData.filter((item) => item.category === "encyclopedia");

  const SampleNextArrow: React.FC<SampleArrowProps> = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: "block" }} onClick={onClick}></div>;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {encyclopediaItems.map((item,ind) => (
          <div key={ind} className="padding-x py-10">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="relative w-[40px] h-[40px]">
                <Image src="/assets/fimages/icon1.png" alt="not found" fill />
              </div>
              <h1 className="text-black opacity-50  text-lg]">Top Searched gemstones</h1>
            </div>
            <div className="flex items-center flex-col xl:flex-row gap-5 xl:gap-0 mt-10">
              <div className="w-full xl:w-[50%]  xl:h-[500px] padding-x  py-10 border backdrop-blur-[1.5px] rounded-lg border-solid xl:border-r-0 border-neutral-300 bg-white bg-opacity-50">
                <button className="h-[48px]  px-3 py-2 text-[#6B03C1] border-[2px] border-[#6B03C1] rounded-[8px]">
                  {item.category}
                </button>
                <h1 className="text-[#000000] mt-5 text-[34px] font-[600] ">{item.title}</h1>
                <div className="text-[#000000] opacity-75 text-lg leading-8 self-stretch mt-5  max-md:max-w-full">
                  <p className="text-justify break-all">{
                    item.shortDescription &&(<>
                    
                    {item.shortDescription.slice(0, 130)}..
                    
                    
                    </>)
                  }</p>
                  <button className="mt-12   h-[48px] text-white bg-[#6B03C1] px-3 py-2 rounded-sm cursor-pointer text-[14px] font-medium leading-2 whitespace-nowrap  ">
                    More about {item.title}
                  </button>
                </div>
              </div>
              <div className="w-full xl:w-[50%] relative h-[300px] max-sm:w-[300px] sm:h-[500px]">
                <Image className="rounded-r-[16px]" src={item.featuredimage.url} alt="not found" fill />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default EncAbout;
