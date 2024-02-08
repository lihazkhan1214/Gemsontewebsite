"use client"
import React, { useEffect, useState } from 'react';
import { getSingleBlog } from '@/services/index';
import Image from 'next/image';
import { SinglePostInterface } from '@/constants';
import Loader from '@/components/Loader';


const initialBlogDetail: SinglePostInterface = {
  title: '',
  updatedAt: '',
  publishedAt: '',
  slug: '',
  category: '',
  shortDescription: '',
  createdBy: {
    name: '',
  },
  polishedImg: {
    url: '',
  },
  rough: {
    url: '',
  },
  jewelry: {
    url: '',
  },
  birthSones: '',
  tableOfContent: {
    json: {
      children: [],
    },
  },
  selectedImageType: 'polished',
};

function Page({ params }: { params: { slug: string } }) {
  const [blogDetail, setBlogDetail] = useState<SinglePostInterface | undefined>(undefined);
  const [img, setImg] = useState<string>(initialBlogDetail.polishedImg.url);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getSingleBlog(params.slug);

        if (res && res.post) {
          const publishedDate = new Date(res.post.publishedAt);
          const formattedPublishedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            year: 'numeric',
          }).format(publishedDate);

          const updatedDate = new Date(res.post.updatedAt);
          const formattedUpdatedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            year: 'numeric',
          }).format(updatedDate);

          setBlogDetail({
            ...res.post,
            publishedAt: formattedPublishedDate,
            updatedAt: formattedUpdatedDate,
            selectedImageType: 'polished',
          });
          setImg(res.post.polishedImg.url);
        } else {
          console.error('Invalid response structure:', res);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (params.slug) {
      fetchData();
    }
  }, [params.slug]);

  const handleImageChange = (url: string, imageType: string) => {
    setImg(url);
    setBlogDetail((prevBlogDetail) => ({
      ...prevBlogDetail!,
      selectedImageType: imageType,
    }));
  };

  return (
    <main className="bg-[#FFF]">
      {blogDetail && (
        <>
          <div className="padding-x">
            <div className="flex flex-col md:h-[450px] scroll-smooth bg-[#F5F5F5] md:flex-row my-10 justify-center items-center">
              <div className="flex flex-1 flex-col pl-12 py-16 gap-8">
                <div className="flex flex-col">
                  <h2 className="text-[#2C2C2C] text-4xl capitalize font-[700]">{blogDetail.title}</h2>
                  <p className="text-[#2C2C2C] mt-2 text-2xl capitalize font-[400]">{blogDetail.category}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#000000] font-[400] text-lg w-[300px]">
                    By {blogDetail.createdBy.name}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-[400] text-[#595656]">Published: {blogDetail.publishedAt}</p>
                  <p className="text-base font-[400] text-[#595656]">Modified: {blogDetail.updatedAt}</p>
                </div>
              </div>
              <div className="flex flex-1 h-full justify-end items-end relative">
                <div className="relative w-[400px] h-[400px]  md:w-full md:h-full">
                <Image src={img} alt="ruby" fill />

                </div>
               
                <div className="absolute bottom-6 left-0 w-full flex  md:flex-wrap justify-center items-center gap-3">
                <button
                    className={`flex gap-2   w-[50px] sm:w-[160px]  max-sm:h-[50px] sm:h-[70px] hover:bg-[#8e8e8f] justify-center items-center py-3 px-6  border rounded-[50%] sm:rounded-[100px] border-white text-sm font-[400] text-[#FFF] ${blogDetail.selectedImageType === 'polished' ? 'bg-[#503030]' : 'bg-[#503030] opacity-50'
                      }`}
                    onClick={() => handleImageChange(blogDetail.polishedImg.url, 'polished')}
                  >
                    <div className="w-[35px] relative h-[35px] ">




                      <Image src="/assets/fimages/p.png" alt="not found" fill />

                    </div>
                    <span className='max-sm:hidden'>Polished</span>
                  </button>
                  <button
                    className={`flex gap-2 rounded-[100px] w-[50px] sm:w-[160px] sm:h-[70px] h-[50px] hover:bg-[#8e8e8f] justify-center items-center py-2 px-5 text-sm font-[400] text-[#FFF] ${blogDetail.selectedImageType === 'rough' ? 'bg-[#503030]' : 'bg-[#503030] opacity-50'
                      }`}
                    onClick={() => handleImageChange(blogDetail.rough.url, 'rough')}
                  >

                    <div className="w-[35px] relative h-[35px]">




                      <Image src="/assets/fimages/r.png" alt="not found" fill />

                    </div>
                    <span className='max-sm:hidden'> Rough</span>

                  </button>
                  <button
                    className={`flex gap-2 w-[50px] sm:w-[160px] rounded-[100px] h-[50px] sm:h-[70px] hover:bg-[#8e8e8f] justify-center items-center py-1 px-3 text-sm font-[400] text-[#FFF] ${blogDetail.selectedImageType === 'jewelry' ? 'bg-[#503030]' : 'bg-[#503030] opacity-50'
                      }`}
                    onClick={() => handleImageChange(blogDetail.jewelry.url, 'jewelry')}
                  >

                    <div className="w-[35px] relative h-[35px] ">




                      <Image src="/assets/fimages/j.png" alt="not found" fill />

                    </div>
                    <span className='max-sm:hidden'> Jewelry</span>

                  </button>
                </div>
              </div>
            </div>

            {/* Table of content section */}
            <div className="flex flex-col md:flex-row mt-10 justify-center items-stretch gap-10">
              <div className="flex md:w-2/3 flex-col gap-3">
                {/* Left side content of the blog */}
                {blogDetail.tableOfContent?.json?.children?.map((item, index) => {
                  switch (item.type) {
                    case 'heading-two':
                      return (
                        <div key={index} className="mb-3 " id={`section-${index}`}>
                          <h2 className='text-[24px] text-[#000000] font-normal capitalize'>{item.children?.[0]?.text}</h2>

                          {/* Render other content types accordingly */}
                        </div>
                      );
                    case 'paragraph':
                      return (
                        <div key={index} className="mb-3 text-lg text-justify font-normal">
                          <p>{item.children?.[0]?.text}</p>
                        </div>
                      );
                    case 'image':
                      return (
                        <div key={index} className="mb-3 relative h-[450px] w-full">
                          <Image src={`${item.src}`} alt="not found" fill />
                        </div>
                      );
                    case 'video':
                      return (
                        <div key={index} className="mb-3">
                          <video controls className='w-full h-[450px]'>
                            <source src={item.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
              <div className=" hidden md:flex md:w-1/3  justify-end  overflow-hidden">
                <div className=" w-full">

                  <ul className="bg-[#F5F5F5] w-full flex flex-col items-center   py-8 rounded-lg  gap-5">
                    <li> <span className="text-[20px] center font-normal capitalize text-[#080808]">
                      Table of Contents
                    </span>
                    </li>
                    {blogDetail.tableOfContent?.json?.children?.map((item, index) => {
                      if (item.type === 'heading-two') {
                        return (
                          <li
                            key={index}
                            className="text-[20px] text-[#000000] font-normal capitalize list-none cursor-pointer hover:text-[#6B03C1]"
                            onClick={() => {
                              const sectionId = `#section-${index}`;
                              const sectionElement = document.querySelector(sectionId);
                              if (sectionElement) {
                                sectionElement.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                          >
                            {item.children?.[0]?.text}
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) }
    </main>
  );
}

export default Page;
