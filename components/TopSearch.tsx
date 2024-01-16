import Image from "next/image";

const images = [{
    img: ""
}, {
    img: ""
}, {
    img: ""
}, {
    img: ""
}, {
    img: ""
},]

export function TopSearch() {
    return (
        <div className="flex flex-col  padding-x mt-16" id="TopSearch" >
            <h1 className="text-black text-center global__title">
                Gemstone Encyclopedia
            </h1>
            <div className="border self-center flex w-[447px] max-w-full  justify-between gap-2 mt-8 px-5 py-2 rounded-md border-solid border-neutral-400 max-md:flex-wrap max-md:px-5">

                <div className="aspect-[0.97] relative object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full">
                    <Image src="/assets/fimages/icon1.png" alt="not found" fill />

                </div>
                <input type="" className="w-[70%] outline-none h-[100%] text-black text-xl leading-8 grow whitespace-nowrap mt-2.5 self-start" placeholder=" Search for gems..." />




                <div className="aspect-square relative object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full self-start">
                    <Image src="/assets/fimages/filter.png" alt="not found" fill />

                </div>
            </div>
            <h2 className="text-black text-2xl leading-8 self-center whitespace-nowrap mt-12 max-md:mt-10">
                Top Searched gemstones
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 lg:grid-cols-5">

                {/* cards */}
                {
                    images.map((item, idn) => (<>

                        <div className="flex hoverAnimation flex-col items-stretch  ">
                            <div className="flex flex-col items-center max-md:mt-3">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6280c1a49f46630990de47ede6fb651ed49ca81de7b77022029e0ae7c2c819c?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6280c1a49f46630990de47ede6fb651ed49ca81de7b77022029e0ae7c2c819c?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6280c1a49f46630990de47ede6fb651ed49ca81de7b77022029e0ae7c2c819c?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6280c1a49f46630990de47ede6fb651ed49ca81de7b77022029e0ae7c2c819c?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6280c1a49f46630990de47ede6fb651ed49ca81de7b77022029e0ae7c2c819c?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6280c1a49f46630990de47ede6fb651ed49ca81de7b77022029e0ae7c2c819c?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6280c1a49f46630990de47ede6fb651ed49ca81de7b77022029e0ae7c2c819c?apiKey=5568fdd424034faf81ed9e41800f3a5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6280c1a49f46630990de47ede6fb651ed49ca81de7b77022029e0ae7c2c819c?apiKey=5568fdd424034faf81ed9e41800f3a5f&"
                                    className="aspect-[0.69] object-contain object-center w-[198px] overflow-hidden"
                                />
                                <div className="text-black cardTitle mt-8">
                                    Ruby
                                </div>
                            </div>
                        </div>

                    </>))
                }






            </div>
            <div className="flex items-center flex-col">

                <button className="text-violet-800 text-2xl font-semibold leading-10 whitespace-nowrap hover:bg-violet-800 hover:text-[#FFF] justify-center items-center border mt-12 px-16 py-2 rounded-md border-solid border-violet-800 max-md:mt-10 max-md:px-5">
                    View all
                </button>
            </div>
        </div>
    );
}


