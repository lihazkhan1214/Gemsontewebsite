"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { dropdownLinksData } from '@/constants'; // Ensure this path is correct
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDropdown = (key:any) => {
    if (openDropdown === key) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(key);
    }
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="bg-[#FFF] mx-auto h-auto padding-x py-2">
      <div className="flex justify-between items-center">
        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleDrawer}>
          <Menu className="cursor-pointer" />
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/assets/fimages/logo.png" alt='Logo' width={100} height={100} style={{ cursor: 'pointer' }} />
          </Link>
        </div>

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="fixed inset-y-0 left-0 bg-white w-[250px] p-4">
              <div className="flex flex-col space-y-3">
                <Link href="/">
                  <span className='text-[#000] text-[18px] hover:text-[#C986FF] font-[400] cursor-pointer'>Home</span>
                </Link>

                {/* Dropdowns for each link */}
                {Object.keys(dropdownLinksData).map((key, index) => (
                  <div key={index}>
                    <span
                      onClick={() => toggleDropdown(key)}
                      className='text-[#000] text-[18px] flex items-center hover:text-[#C986FF] font-[400] cursor-pointer'
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)} <ChevronDown className='mx-2 w-[15px] h-[15px]' />
                    </span>
                    {openDropdown === key && (
                      <div className="bg-white flex-col items-center shadow-md py-2 rounded">
                        {dropdownLinksData[key].map((link, linkIndex) => (
                          <React.Fragment key={linkIndex}>
                            <Link href={link.href}>
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

                <Link href="/allbirthstones">
                  <span className='text-[#000] text-[18px] hover:text-[#C986FF] font-[400] cursor-pointer'>Birthstones</span>
                </Link>
              </div>

              {/* Register Button */}
              <div className="mt-4">
                <button className='bg-[#6B03C1] text-[18px] font-[500] rounded-[4px] w-[120px] text-[#FFF] h-[48px]'>
                  Register
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Links (hidden in mobile) */}
        <div className="hidden md:flex space-x-12 items-center">
          {/* ... Desktop Links and Dropdowns ... */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
