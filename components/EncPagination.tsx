"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import EncCard from '@/components/EncCard';

function Page() {
    const itemsPerPage = 16;
    const totalItems = 100; // Example total number of items
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const changePage = (page: any) => {
        setCurrentPage(page);
    };

    const prevPage = () => {
        setCurrentPage(current => (current > 1 ? current - 1 : current));
    };

    const nextPage = () => {
        setCurrentPage(current =>
            current < totalPages ? current + 1 : current
        );
    };

    // Calculate the items to show on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Here you need to replace this with your actual data source
    const currentItems = Array.from({ length: totalItems }).slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    return (
        <>
            {/* Existing code here */}
            <div className="padding-x">
                <div className="border flex items-center w-[347px] max-w-full justify-between gap-2 mt-8 px-5 py-2 rounded-md border-solid border-neutral-400 max-md:flex-wrap max-md:px-5">
                    <div className="aspect-[0.97] relative object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full">
                        <Image src="/assets/fimages/icon1.png" alt="not found" fill />
                    </div>
                    <input
                        type=""
                        className="w-[70%] outline-none h-[80%] text-black text-lg leading-8 grow whitespace-nowrap self-start"
                        placeholder=" Search for gems..."
                    />
                    <div className="aspect-square self-center relative object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full">
                        <Image src="/assets/fimages/filter.png" alt="not found" fill />
                    </div>
                </div>
            </div>

            {/* Display items */}
            <div className="border-[#6B03C1]5] bg-[#F5F5F5]  py-12 padding-x mt-12">
                <div className=" gap-5  grid items-center lg:grid-cols-2 xl:grid-cols-4">
                    {currentItems.map((item, index) => (
                        <EncCard key={index} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-end items-center gap-2 mt-5">
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
                            className={`text-[#878A99] text-[13px] w-[40px] h-[40px] cursor-pointer p-2 rounded-md font-normal ${
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

export default Page;
