"use client";
import React, { useEffect, useState } from 'react';
import { getSingleArticle } from '@/services/index';
import Image from 'next/image';
import { SingleArticleInterface } from '@/constants';
import Loader from '@/components/Loader';

interface PageParams {
  slug: string;
}

const initialBlogDetail: SingleArticleInterface = {
  authorbio: '',
  authorname: '',
  title1212: '',
  updatedAt: '',
  publishedAt: '',
  createdBy: {
    name: '',
  },
  authorPicture: {
    url: '',
  },
  shortDescription: '',
  articlePicture: {
    url: '',
  },
  tableOfContent: [
    {
      json: {
        children: [],
      },
    },
  ],
};

function Page({ params }: { params: { slug: string } }) {
 
  const [blogDetail, setBlogDetail] = useState<SingleArticleInterface | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getSingleArticle(params.slug);

        if (res && res.articles) {
          const publishedDate = new Date(res.articles.publishedAt);
          const formattedPublishedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            year: 'numeric',
          }).format(publishedDate);

          const updatedDate = new Date(res.articles.updatedAt);
          const formattedUpdatedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            year: 'numeric',
          }).format(updatedDate);

          setBlogDetail({
            ...res.articles,
            publishedAt: formattedPublishedDate,
            updatedAt: formattedUpdatedDate,
          });
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

  return (
    <main className="bg-[#FFF]">
      {blogDetail ? (
        <>
          <div className="padding-x">
            <div className="flex flex-col md:h-[400px]  scroll-smooth bg-[#F5F5F5] md:flex-row my-10 justify-center items-center">
              <div className="flex flex-1 flex-col pl-12 py-16 gap-8">
                <div className="flex flex-col">
                  <h2 className="text-[#2C2C2C] text-4xl capitalize font-[700]">{blogDetail.title1212}</h2>
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
              <div className="flex h-full flex-1 justify-end items-end relative">
            <div className="relative w-[310px] h-[310px] sm:w-full sm:h-full">

            <Image src={blogDetail.authorPicture.url}  alt="not found" fill />
            </div>
              </div>
            </div>

            {/* Table of content section */}
            <div className="flex flex-col md:flex-row mt-10 justify-center items-stretch gap-10">
              <div className="flex md:w-2/3 flex-col gap-3">
                {/* Left side content of the blog */}
                {blogDetail.tableOfContent?.map((content, contentIndex) => (
                  <div key={contentIndex}>
                    {content.json?.children?.map((item, index) => {
                      switch (item.type) {
                        case 'heading-two':
                          return (
                            <div key={index} className="mb-3 " id={`section-${index}`}>
                              <h2 className="text-[24px] text-[#000000] font-normal capitalize">{item.children?.[0]?.text}</h2>
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
                              <video controls className="w-full h-[450px]">
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
                ))}
              </div>
              <div className="hidden md:flex md:w-1/3  justify-end  overflow-hidden">
                <div className="w-full">
                  <ul className="bg-[#F5F5F5] w-full flex flex-col items-center   py-8 rounded-lg  gap-5">
                    <li>
                      <span className="text-[20px] center font-normal capitalize text-[#080808]">Table of Contents</span>
                    </li>
                    {blogDetail.tableOfContent?.map((content, contentIndex) =>
                      content.json?.children?.map((item, index) =>
                        item.type === 'heading-two' ? (
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
                        ) : null
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ):(<>
      <div className=" w-full h-[100vh] flex items-center justify-center ">

<Loader />


</div>
      
      </>)
      
      
      }
    </main>
  );
}

export default Page;
