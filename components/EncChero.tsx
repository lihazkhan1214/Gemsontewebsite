import * as React from "react";

function EncChero() {
  return (
   
      <div className="gap-5 padding-x py-12 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
          <div className="bg-neutral-100 flex grow flex-col w-full pl-14 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
            <div className="text-zinc-800 text-5xl font-bold leading-[51px] max-w-[329px] mt-5">
              Ruby
              <br />
              <span className=" text-2xl leading-10">Gemstones</span>
            </div>
            <div className="text-stone-600 text-xl leading-9 max-w-[329px] mt-12 mb-10 max-md:mt-10">
              By Tim Matthews, JD, FGA, GG, DGA,
              <br />
              CEO and President of JTV
              <br />
              <br />
              <span className="text-lg text-stone-600">
                Published: June 2014
              </span>
              <br />
              <span className="text-lg text-stone-600">
                Modified: June 2023
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex-col overflow-hidden relative flex min-h-[426px] grow justify-center items-center px-16 py-11 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9c398483cb34a375d322dbf3b6172a137efbf1215d859df98c6f0663648c65?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9c398483cb34a375d322dbf3b6172a137efbf1215d859df98c6f0663648c65?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9c398483cb34a375d322dbf3b6172a137efbf1215d859df98c6f0663648c65?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9c398483cb34a375d322dbf3b6172a137efbf1215d859df98c6f0663648c65?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9c398483cb34a375d322dbf3b6172a137efbf1215d859df98c6f0663648c65?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9c398483cb34a375d322dbf3b6172a137efbf1215d859df98c6f0663648c65?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9c398483cb34a375d322dbf3b6172a137efbf1215d859df98c6f0663648c65?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d9c398483cb34a375d322dbf3b6172a137efbf1215d859df98c6f0663648c65?apiKey=5568fdd424034faf81ed9e41800f3a5f&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative flex w-[239px] max-w-full items-stretch gap-2 mt-80 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fda225aae880a9cc842f2b6ec33ce8bff49416fe3f3eddbe27d5f086abf7ec3?apiKey=5568fdd424034faf81ed9e41800f3a5f&"
                className="aspect-[2.5] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
              />
              <div className="text-white text-sm leading-6 whitespace-nowrap rounded backdrop-blur-[5.5px] bg-stone-700 bg-opacity-80 grow justify-center items-stretch px-5 py-2">
                Rough
              </div>
              <div className="text-white text-sm leading-6 whitespace-nowrap rounded backdrop-blur-[5.5px] bg-stone-700 bg-opacity-80 grow justify-center items-stretch px-4 py-2">
                Jewelry
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}


export default EncChero;