"use client"
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LArticleCard from './LArticleCard';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/redux/store';
import { ArticleData } from '@/constants';

interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function LArticleSlider() {

    const dispatch = useDispatch();
    const postData = useSelector((state: RootState) => state.articleData.data) as ArticleData[];




    const SampleNextArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <div className="relative  hidden md:block w-[30px]  h-[30px]">
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
                <div className="relative hidden md:block w-[30px]  h-[30px]">
                    <Image src="/assets/fimages/previcon.png" alt='not found' fill />
                </div>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />, // Custom Next Arrow component
        prevArrow: <SamplePrevArrow />, // Custom Previous Arrow component
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
            {
                postData && (
                    <>
                        <div className="max-sm:px-5 padding-x py-12 mt-10 bg-[#F5F5F5]">
                            <div className="flex flex-col mb-10 gap-3 items-center sm:flex-row">
                                <div className="relative w-[40px] h-[40px]">
                                    <Image src="/assets/fimages/icon1.png" alt="not found" fill />
                                </div>
                                <h1 className="text-black font-semibold text-2xl">
                                    Latest Gemstones Articles
                                </h1>
                            </div>

                            <Slider {...settings}>




                                {postData.map((item, index) => (
                                    <>
                                        <div className=" sm:px-3">
                                            <LArticleCard
                                                key={index}
                                                title={item.title1212}
                                                slug={item.slug}
                                               
                                               shortDescription={item.shortDescription}
                                                picture={item.articlePicture.url}
                                            />
                                        </div> </>
                                ))}

                            </Slider>
                        </div>

                    </>
                )
            }

        </>
    );
}

export default LArticleSlider;
