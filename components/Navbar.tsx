"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { dropdownLinksData } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key:any) => {
    if (openDropdown === key) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(key);
    }
  };

  // Function to close the dropdown
  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-[#FFF] mx-auto flex justify-between items-center h-[80px] padding-x py-2">
    
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image src="/assets/fimages/logo.png" alt='Logo' width={100} height={100}/>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 items-center">
          <Link href="/" passHref>
            <span className='text-[#000] text-[18px] hover:text-[#C986FF] font-[400] cursor-pointer'>Home</span>
          </Link>

          {/* Dropdowns for each link */}
          {Object.keys(dropdownLinksData).map((key, index) => (
            <div key={index} className="relative">
              <span
                onClick={() => toggleDropdown(key)}
                className='text-[#000] text-[18px] flex items-center hover:text-[#C986FF] font-[400] cursor-pointer'
              >
                {key.charAt(0).toUpperCase() + key.slice(1)} <ChevronDown className='mx-2 w-[15px] h-[15px]' />
              </span>
              {openDropdown === key && (
                <div className="absolute z-10 bg-white w-[200px] px-4 flex-col items-center shadow-md mt-2 py-2 rounded">
                  {dropdownLinksData[key].map((link, linkIndex) => (
                    <React.Fragment key={linkIndex}>
                      <Link href={link.href} passHref>
                        <span 
                          onClick={closeDropdown}
                          className="block text-center py-2 text-nowrap text-[12px] text-[#605e5e] hover:text-[#C986FF] cursor-pointer"
                        >
                          {link.name}
                        </span>
                      </Link>
                      {linkIndex < dropdownLinksData[key].length - 1 && (
                        <hr className='h-[1px] bg-[#AEAEAE]' />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/allbirthstones" passHref>
            <span className='text-[#000] text-[18px] hover:text-[#C986FF] font-[400] cursor-pointer'>Birthstones</span>
          </Link>
        </div>

        {/* Login and Register Buttons */}
        <div className="hidden md:block">
          <button className='bg-[#6B03C1] text-[18px] font-[500] rounded-[4px] w-[120px] text-[#FFF] h-[48px]'>
            Register
          </button>
        </div>

        
     
    </nav>
  );
};

export default Navbar;
