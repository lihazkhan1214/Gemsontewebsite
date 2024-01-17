import Image from "next/image";

const RubyAlternate = () => {
  return (
    <div className="padding-x">
      <div className="flex flex-col rounded-t-lg border-[#777777] border my-20 overflow-hidden ">
        <div className="flex flex-col md:flex-row justify-between border-b border-[#777777] text-4xl font-[400] text-[#000]">
          <div className="py-10 flex-1 flex justify-center items-center flex-col gap-3 bg-[#6B03C1] border-r border-gray-500 ">
            <Image
              src="/assets/fimages/icon1.png"
              width={40}
              height={40}
              alt="image"
            />
            <span className="text-[#FFF] font-[500] text-xl text-center">
              Classification
            </span>
          </div>
          <div className="py-10 flex-1 flex justify-center items-center flex-col gap-3 border-r border-gray-500">
            <Image
              src="/assets/fimages/icon1.png"
              width={40}
              height={40}
              alt="image"
            />
            <span className="text-[#262626cb] font-[500] text-xl text-center">
              Optical Properties
            </span>
          </div>
          <div className="py-10 flex-1 flex justify-center items-center flex-col gap-3 border-r border-gray-500">
            <Image
              src="/assets/fimages/icon1.png"
              width={40}
              height={40}
              alt="image"
            />
            <span className="text-[#262626cb] font-[500] text-xl text-center">
              Characters Physical Properties
            </span>
          </div>
          <div className="py-10 flex-1 flex justify-center items-center flex-col gap-3 ">
            <Image
              src="/assets/fimages/icon1.png"
              width={40}
              height={40}
              alt="image"
            />
            <span className="text-[#262626cb] font-[500] text-xl text-center">
              Chemistry & Crystallography
            </span>
          </div>
        </div>
        <div className="flex items-start justify-evenly py-20">
          <div className="flex flex-col gap-3 item-center">
            <span className="text-[#000000ce] text-3xl font-[400]">
              Common Name
            </span>
            <span className="text-[#000] text-3xl font-[400]">Ruby</span>
          </div>
          <div className="flex flex-col gap-3 item-center">
            <span className="text-[#000000ce] text-3xl font-[400]">
              Species
            </span>
            <span className="text-[#000] text-3xl font-[400]">Corundum</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RubyAlternate;
