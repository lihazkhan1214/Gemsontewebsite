"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AllBstoneCard from './allBstoneCard';
import PostData from '@/constants';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

function AllbPagination() {
  const postData = useSelector((state: RootState) => state.postData.data) as PostData[];
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedItems, setSortedItems] = useState<PostData[]>([]);

  // Update sortedItems when postData changes
  useEffect(() => {
    setSortedItems(postData);
  }, [postData]);

  // Filter items based on the search term
  const filteredItems = sortedItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 15;
  const totalItems = filteredItems.length;
  const [currentPage, setCurrentPage] = useState(1);
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

  // Calculate the items to show on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Create a mapping for birth months
  const monthMap: { [key: string]: number } = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
  };

  // Sort items by birth month
  const sortedByMonth = currentItems.sort((a, b) => {
    const monthA = a.birthSones.toLowerCase();
    const monthB = b.birthSones.toLowerCase();
    return monthMap[monthA] - monthMap[monthB];
  });

  console.log("months", sortedByMonth, postData);

  return (
    <>
      {/* Existing code here */}
      <div className="padding-x"></div>

      {/* Display items */}
      <div className="border-[#6B03C1]5] bg-[#F5F5F5]  py-12 padding-x mt-12">
        {/* Search bar */}
        <div className="border flex items-center w-[347px] max-w-full justify-between gap-2 mt-8 px-5 py-2 rounded-md border-solid border-[#A5A5A5] max-md:flex-wrap max-md:px-5">
          {/* Existing code here */}
          <input
            type=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[70%] bg-[#F5F5F5] outline-none h-[80%] text-black text-lg leading-8 grow whitespace-nowrap self-start"
            placeholder=" Search for gems..."
          />
          {/* Existing code here */}
        </div>

        {/* Display items */}
        <div className=" gap-5 mt-10  grid items-center lg:grid-cols-2 xl:grid-cols-3">
          {sortedByMonth.map((item, index) => (
            <AllBstoneCard
              key={index}
              picture={item.featuredimage.url}
              birthstones={item.birthSones}
              shortDescription={item.shortDescription}
              title={item.title}
              slug={item.slug}
              category={item.category}
              birthDescription={item.birthDescription}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-end items-center gap-2 mt-5">
          <button
            className={`text-[#878A99] text-[13px] border-[1px] border-[#CED4DA] cursor-pointer px-3 py-2 rounded-md font-normal ${currentPage === 1 ? 'border-[#6B03C1]' : ''}`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              className={`text-[#878A99] text-[13px] w-[40px] h-[40px] cursor-pointer p-2 rounded-md font-normal ${currentPage === index + 1 ? 'border border-[#6B03C1]' : 'border border-[#CED4DA]'}`}
              key={index + 1}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`text-[#878A99] text-[13px] border-[1px] border-[#CED4DA] cursor-pointer px-3 py-2 rounded-md font-normal ${currentPage === totalPages ? 'border-[#6B03C1]' : ''}`}
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

export default AllbPagination;
