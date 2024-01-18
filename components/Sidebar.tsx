"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  MapPin,
  LayoutGrid,
  ChevronDown,
  ChevronUp,
  Globe,
  User
  

 
} from "lucide-react";








const routes = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/admin-dashboard",
  },
  {
    label: "Encyclopedia",
    icon: Globe,
    href: "",
  },

  {
    label: "User",
    icon: User,
    href: "kkkkk",
  }
];



const Sidebar = () => {
  const [showServicesSubRoutes, setShowServicesSubRoutes] = useState(false);

 

  return (
    <div className="space-y-4 py-4  w-[300px] px-4 gap-5 flex-col h-full bg-[#FFFFFF] border border-r-2 overflow-y-scroll z-[80]">
      <div className="px-3  flex-1">
        <Link href="/" className="">
          <div className="relative h-[50px] w-[80px] mr-4">
            <Image fill alt="Logo" src="/assets/fimages/logo.png" />
          </div>
        </Link>
        <hr className="mt-3 text-[5px]" />
        <div className="space-y-1  mt-5">
          {routes.map((route) => (
            <div key={route.href} className="relative">
              { (
                // Render regular route
                <Link
                  href={route.href}
                  className="flex p-[14px] w-full mt-[14px]  text-[16px] font-[400] justify-start bg-[#FFF] text-[#505F65] cursor-pointer rounded-lg transition hover:text-[#505F65] focus:bg-[#F1F2F4]"
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={"h-[25px] w-[25px] mr-3"} color="#505F65" />
                    <span className="text-[14px] font-[400] text-[505F65]">
                      {route.label}
                    </span>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });
