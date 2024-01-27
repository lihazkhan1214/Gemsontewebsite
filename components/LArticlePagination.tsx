"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LArticleCard from './LArticleCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { Posts } from '@/services';
import { setData } from '@/redux/Slice';

interface PropsData {
  data: any; // Adjust the type according to the actual data structure
}

interface Picture {
  url: string;
}

interface PostData {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  birthDescription:string;
  polishedImg:{
    url:string;
  }
}

function LArticlePagination() {
  const postData = useSelector((state: RootState) => state.postData.data) as PostData[]; // Assert the type as PostData[]

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Ensure filteredItems is always an array
  const filteredItems = Array.isArray(postData)
    ? postData.filter(
        (item) =>
          item &&
          item.title &&
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    setCurrentPage((current) => (current > 1 ? current - 1 : current));
  };

  const nextPage = () => {
    setCurrentPage((current) => (current < totalPages ? current + 1 : current));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Ensure currentItems is always an array
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearchQueryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setSearchQuery(value);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };

 // ...


  return (
    <>
      {/* Existing code here */}
      <div className="padding-x"></div>
      <div className="border-[#6B03C1]5] bg-[#F5F5F5]  py-12 padding-x mt-12">
        <div className="border flex items-center w-[347px] max-w-full justify-between gap-2 mt-8 px-5 py-2 rounded-md border-solid border-[#A5A5A5] max-md:flex-wrap max-md:px-5">
          <div className="aspect-[0.97] relative object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full">
            <Image src="/assets/fimages/icon1.png" alt="not found" fill />
          </div>
          <input
            type=""
            className="w-[70%] bg-[#F5F5F5] outline-none h-[80%] text-black text-lg leading-8 grow whitespace-nowrap self-start"
            placeholder=" Search for gems..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <div className="aspect-square self-center relative object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full">
            <Image src="/assets/fimages/filter.png" alt="not found" fill />
          </div>
        </div>

        <div className=" gap-5 mt-10  grid items-center lg:grid-cols-2 xl:grid-cols-4">
          {currentItems.map((item, index) => (
            <LArticleCard
              key={index}
              title={item.title}
              slug={item.slug}
              category={item.category}
              BirthDescription={item.birthDescription}
              shortDescription={item.shortDescription}
              picture={item.polishedImg.url}
            />
          ))}
        </div>

        <div className="flex justify-end flex-wrap items-center gap-2 mt-5">
          <button
            className={`text-[#878A99] text-[13px] border-[1px] border-[#CED4DA] cursor-pointer px-3 py-2 rounded-md font-normal ${
              currentPage === 1 ? 'border-[#6B03C1]' : ''
            }`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              className={`text-[#878A99]  text-[13px] w-[40px] h-[40px] cursor-pointer p-2 rounded-md font-normal ${
                currentPage === index + 1
                  ? 'border border-[#6B03C1]'
                  : 'border border-[#CED4DA]'
              }`}
              key={index + 1}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`text-[#878A99] text-[13px] border-[1px] border-[#CED4DA] cursor-pointer px-3 py-2 rounded-md font-normal ${
              currentPage === totalPages ? 'border-[#6B03C1]' : ''
            }`}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      {/* Existing code here */}
    </>
  );
}

export default LArticlePagination;
