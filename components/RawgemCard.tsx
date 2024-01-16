import Image from "next/image";

export function Rawgemcard() {
  return (
    <div className="bg-white  mt-12 pl-20 pr-10 py-5 rounded-3xl max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <h1 className="text-slate-600 global__title">
              Ruby
            </h1>
            <p className="text-slate-600 text-justify text-lg leading-7 mt-5 max-md:max-w-full max-md:mt-10">
              Immerse yourself in the allure of Sri Lankas gemstone treasure
              trove, where the islands fertile soil reveals a spectrum of
              vibrant sapphires, including the famed Ceylon blue. Renowned for
              centuries, these ethereal gems reflect the rich history and
              geological splendor that make Sri Lanka a gemstone paradise.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch  w-2/6  ml-12 max-md:w-full max-md:ml-0">
          <div  className="aspect-[1.19] hoverAnimation relative object-contain object-center w-full overflow-hidden grow max-md:mt-10">

          <Image src="/assets/dami/card21.png" alt="not found" fill />

          </div>
        </div>
      </div>
    </div>
  );
}


