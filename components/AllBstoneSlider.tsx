"use client";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import AllBstoneCard from './allBstoneCard';
import { useSelector } from 'react-redux';
import PostData from '@/constants';
import { RootState } from '@/redux/store';

interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function AllBstonesSlider() {
    const postData = useSelector((state: RootState) => state.postData.data) as PostData[];

    // Shuffle the array to get items randomly

    // Create a copy of the array before sorting
    const shuffledPostData = [...postData].sort(() => Math.random() - 0.5);

    


    const SampleNextArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <div className="relative hidden md:block w-[30px] h-[30px]">
                    <Image src="/assets/fimages/nexticon.png" alt='not found' fill />
                </div>
            </div>
        );
    };

    const SamplePrevArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <div className="relative hidden md:block w-[30px] h-[30px]">
                    <Image src="/assets/fimages/previcon.png" alt='not found' fill />
                </div>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="padding-x py-12 mt-10 bg-[#F5F5F5]">
                <div className="flex flex-col mb-10 gap-3 items-center sm:flex-row">
                    <div className="relative w-[40px] h-[40px]">
                        <Image src="/assets/fimages/icon1.png" alt="not found" fill />
                    </div>
                    <h1 className="text-black font-semibold text-2xl">
                        Current Month and Upcoming
                    </h1>
                </div>

                <Slider {...settings}>
                    {shuffledPostData.slice(0, 5).map((item, index) => (
                        <div key={index} className="px-2 sm:px-3">
                            <AllBstoneCard picture={item.featuredimage.url}  birthstones={item.birthSones}  shortDescription={item.shortDescription} title={item.title} slug={item.slug} category={item.category} birthDescription={item.birthDescription}  />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default AllBstonesSlider;
