import FeaturesCard from "@/components/FeaturesCard";
import RubyAlternate from "@/components/RubyAlternate";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="bg-[#FFF]">
      <div className="padding-x">
        {/* main section */}
        <div className="flex flex-col md:flex-row my-10 justify-center items-center">
          <div className="flex flex-1 bg-[#F5F5F5] flex-col pl-12 py-16 gap-8">
            <div className="flex flex-col">
              <h2 className="text-[#2C2C2C] text-4xl font-[700]">Ruby </h2>
              <p className="text-[#2C2C2C] text-2xl font-[400]">Gemstones</p>
            </div>

            <div className="flex flex-col">
              <p className="text-[#000000] font-[400] text-lg w-[300px]">
                By Tim Matthews, JD, FGA, GG, DGA, CEO and President of JTV
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-base font-[400] text-[#595656]">
                Published: June 2014
              </p>
              <p className="text-base font-[400] text-[#595656]">
                {" "}
                Modified: June 2023
              </p>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center relative">
            <Image
              src={"/assets/fimages/ruby.png"}
              width={500}
              height={500}
              alt="ruby"
            />
            <div className="absolute bottom-6 left-0 w-full flex justify-center items-center gap-4">
              <button
                className="flex justify-center items-center py-1 px-3 rounded-sm border border-white text-sm font-[400] text-[#FFF]"
                style={{ backgroundColor: "rgba(80, 48, 48, 0.81)" }}
              >
                Polished
              </button>
              <button
                className="flex justify-center items-center py-1 px-3 rounded-sm  text-sm font-[400] text-[#FFF]"
                style={{ backgroundColor: "rgba(80, 48, 48, 0.81)" }}
              >
                Rough
              </button>
              <button
                className="flex justify-center items-center py-1 px-3 rounded-sm  text-sm font-[400] text-[#FFF]"
                style={{ backgroundColor: "rgba(80, 48, 48, 0.81)" }}
              >
                Jewelry
              </button>
            </div>
          </div>
        </div>

        {/* table of content section */}
        <div className="flex flex-col md:flex-row mt-10 justify-center items-stretch gap-10">
          <div className="flex w-2/3  flex-col  gap-4">
            <p className="text-[20px] font-[400] text-[#000] leading-10">
              Ruby is the red variety of corundum. It is one of the most highly
              prized gemstones and the finest stones command the highest prices
              per carat at auction. The name is derived from the Latin word
              ruber (red). It was called ratnaraj, meaning the "King of Gems" by
              ancient Hindus. The line between ruby and pink sapphire is not
              clearly defined and can be quite subjective. It is the birthstone
              for July. Around 1910 the first synthetic ruby was available in
              the marketplace. Flame-fusion lab created ruby may be cut from
              boules weighing in excess of 400 carats
            </p>

            <div className="flex flex-col rounded-t-lg border-[#777777] border">
              <h2 className="p-5 border-b border-[#777777] text-4xl font-[400] text-[#000]">
                Ruby Color
              </h2>
              <div className="flex items-start justify-evenly py-10">
                <div className="flex justify-center items-center flex-col ">
                  <Image
                    src="/assets/fimages/ruby1.png"
                    width={100}
                    height={100}
                    alt="ruby"
                  />
                  <span className="text-xl font-[400] text-[#000]">red</span>
                </div>
                <div className="flex justify-center items-center flex-col ">
                  <Image
                    src="/assets/fimages/ruby1.png"
                    width={100}
                    height={100}
                    alt="ruby"
                  />
                  <span className="text-xl font-[400] text-[#000]">red</span>
                </div>
                <div className="flex justify-center items-center flex-col ">
                  <Image
                    src="/assets/fimages/ruby1.png"
                    width={100}
                    height={100}
                    alt="ruby"
                  />
                  <span className="text-xl font-[400] text-[#000]">red</span>
                </div>
                <div className="flex justify-center items-center flex-col ">
                  <Image
                    src="/assets/fimages/ruby1.png"
                    width={100}
                    height={100}
                    alt="ruby"
                  />
                  <span className="text-xl font-[400] text-[#000]">red</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/3 justify-center item-start bg-[#F5F5F5] py-8 rounded-lg ">
            <div className="flex flex-col gap-10">
              <h2 className="text-xl font-[400] text-[#080808]">
                Table of Contents
              </h2>
              <div className="flex flex-col gap-5 pl-5">
                <li className="text-[#6B03C1] text-xl font-400 list-none cursor-pointer">
                  General Information
                </li>
                <li className="text-[#000] text-xl font-400 list-none cursor-pointer hover:text-[#6B03C1]">
                  Ruby Colors{" "}
                </li>
                <li className="text-[#000] text-xl font-400 list-none cursor-pointer hover:text-[#6B03C1]">
                  Alternate Names
                </li>
                <li className="text-[#000] text-xl font-400 list-none cursor-pointer hover:text-[#6B03C1]">
                  {" "}
                  Countries of Origin{" "}
                </li>
                <li className="text-[#000] text-xl font-400 list-none cursor-pointer hover:text-[#6B03C1]">
                  History{" "}
                </li>
                <li className="text-[#000] text-xl font-400 list-none cursor-pointer hover:text-[#6B03C1]">
                  {" "}
                  Care{" "}
                </li>
                <li className="text-[#000] text-xl font-400 list-none cursor-pointer hover:text-[#6B03C1]">
                  {" "}
                  Creation Method Video{" "}
                </li>
                <li className="text-[#000] text-xl font-400 list-none cursor-pointer hover:text-[#6B03C1]">
                  {" "}
                  Boxing Video{" "}
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RubyAlternate />
      <FeaturesCard />

      {/* creation Method video */}

      <div className="flex flex-col items-start gap-5 padding-x">
        <h2 className=" text-[#000] mt-5 text-[24px] font-normal text-center">
          Creation Method Video
        </h2>
        <iframe
          className="w-full h-[80vh]"
          src="https://www.youtube.com/embed/kUXYBKPy55E"
          title="Synthetics 101 | All about Lab Grown Gemstones"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      {/* unboxing video */}

      <div className="flex flex-col items-start gap-5 padding-x mt-10">
        <h2 className=" text-[#000] mt-5 text-[24px] font-normal text-center">
          Unboxing Video
        </h2>
        <iframe
          className="w-full h-[80vh]"
          src="https://www.youtube.com/embed/pfN-ce49kCI"
          title="Unboxing Aquamarine | 21 Gems from Pakistan, Vietnam, &amp; Africa"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </main>
  );
};

export default page;
