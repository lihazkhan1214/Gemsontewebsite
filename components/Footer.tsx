import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Footer() {
  return (
    <>

      <div className="bg-[#f5f5f5] px-6 sm:px-12 md:px-0 py-16 flex  max-xl:flex-col justify-evenly  mt-12 ">


        <div className="xl:w-[40%]">
          <div className="relative w-[80px] h-[40px]">
            <Link href="/" >

              <Image src="/assets/fimages/logo.png" alt="not found" fill />
            </Link>
          </div>
          <p className="text-[#000000] mt-5 font-normal text-[14px] ">Unveiling Earth&apos;s Treasures: Explore the Radiance of Gemstones Your Ultimate Guide to the World of Precious and Semi-Precious Gems</p>

          <div className="flex gap-5 mt-5">
            <div className="relative w-[33px] h-[33px]">
              <Link href="/" >

                <Image src="/assets/fimages/facebook.png" alt="not found" fill />
              </Link>
            </div>
            <div className="relative w-[33px] h-[33px]">
              <Link href="/" >

                <Image src="/assets/fimages/google.png" alt="not found" fill />
              </Link>
            </div>
            <div className="relative w-[33px] h-[33px]">
              <Link href="/" >

                <Image src="/assets/fimages/intagram.png" alt="not found" fill />
              </Link>
            </div>


          </div>

        </div>
        <div className="xl:w-[40%]">

          <div className="grid gap-5 grid-cols-2 md:grid-cols-3">

            <Link className='block text-[18px] font-normal text-[#000] hover:text-[#6B03C1]' href="/">Home</Link>
            <Link className='block text-[18px] font-normal text-[#000] hover:text-[#6B03C1]' href="/">Encyclopedia</Link>
            <Link className='block text-[18px] font-normal text-[#000] hover:text-[#6B03C1]' href="/">About Us</Link>
            <Link className='block text-[18px] font-normal text-[#000] hover:text-[#6B03C1]' href="/">Articles</Link>
            <Link className='block  text-[18px] font-normal text-[#000] hover:text-[#6B03C1]' href="/">Raw Gemstones</Link>
            <Link className='block text-[18px] font-normal text-[#000] hover:text-[#6B03C1]' href="/">Gemstones</Link>
            <Link className='block text-[18px] font-normal text-[#000] hover:text-[#6B03C1]' href="/">BirthStones</Link>



          </div>

          {/* subscribe */}

          <div className="bg-[#FFF] mt-5   rounded-l-[8px]  flex items-center justify-between relative h-[50px]">

            <input className='px-2 bg-[#FFF] focus:outline-none h-[100%]  placeholder:text-[#000000] ' placeholder='Enter Your Email' type="text" />
            <button className='bg-[#6B03C1] hidden sm:block  text-[#FFF] text-sm font-normal rounded-[8px] sm:h-[100%] py-2 px-4' >Subscribe</button>


          </div>
          <button className='bg-[#6B03C1] mt-5 block sm:hidden text-[#FFF] text-sm font-normal rounded-[8px] h-[100%] px-4 py-2' >Subscribe</button>







        </div>





      </div>




    </>
  )
}

export default Footer