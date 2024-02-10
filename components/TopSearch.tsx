"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostData from "@/constants";
import { RootState } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";

interface TopSearchProps {
  // Add any specific props if needed
}

export function TopSearch() {
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  const postData = useSelector((state: RootState) => state.postData.data) as PostData[];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Ensure postData is only accessed on the client side
  const encyclopediaItems = isClient ? postData.filter((item) => item.category === "encyclopedia") : [];

  // Filter items based on search term
  const filteredItems = searchTerm
    ? encyclopediaItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : encyclopediaItems;

  // Sort items based on another property (assumed 'views' property)
  const topSearchedItems = filteredItems
    .slice()
    .sort((a, b) => ((b as any).views || 0) - ((a as any).views || 0))
    .slice(0, 5); // Take only the top five searched items

  return (
    <>
      {topSearchedItems.length > 0 && (
        <>
          <div className="flex flex-col  padding-x mt-16" id="TopSearch">
            <h1 className="text-black text-center global__title">Gemstone Encyclopedia</h1>
            <div className="border self-center flex w-[447px] max-w-full justify-between gap-2 mt-8 px-5 py-2 rounded-md border-solid border-neutral-400 max-md:flex-wrap max-md:px-5">
              <div className="aspect-[0.97] relative object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full">
                <Image src="/assets/fimages/icon1.png" alt="not found" fill />
              </div>
              <input
                type="text"
                className="w-[70%] outline-none h-[100%] text-black text-xl leading-8 grow whitespace-nowrap mt-2.5 self-start"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder=" Search for gems..."
              />
              <div className="aspect-square relative object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full self-start">
                <Image src="/assets/fimages/filter.png" alt="not found" fill />
              </div>
            </div>
            <h2 className="text-black text-2xl leading-8 self-center whitespace-nowrap mt-12 max-md:mt-10">
              Top Searched gemstones
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 lg:grid-cols-5">
              {topSearchedItems.map((item, idn) => (
                <Link key={idn} href={`/${item.category}/${item.slug}`}>
                  <div className="flex flex-col items-stretch">
                    <div className="flex flex-col items-center max-md:mt-3">
                      <div className="aspect-[0.69] rounded-md relative object-contain object-center w-[198px] overflow-hidden">
                        <Image src={item.featuredimage.url} alt="not found" fill />
                      </div>
                      <div className="text-black text-lg mt-3">{item.title}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center flex-col">
              <Link href="/allencyclopedia" className="text-violet-800 text-2xl font-semibold leading-10 whitespace-nowrap hover:bg-violet-800 hover:text-[#FFF] justify-center items-center border mt-12 px-16 py-2 rounded-md border-solid border-violet-800 max-md:mt-10 max-md:px-5">
                View all
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
