"use client";
import React,{useState} from 'react';
// import { getSingleBlog } from '@/services';
// import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useSelector } from 'react-redux';

import { RootState} from '@/redux/store';
import { Posts } from "@/services/index";
import PostData from "@/constants";
// import { log } from 'console';
import { useParams } from 'next/navigation';

 
  



function page() {
  const params=useParams();
  const [blogDetail, setBlogDetail] = useState({});
  
  const blogdata = useSelector((state: RootState) => state.postData);

  console.log("postslug",blogdata)











 
  return (
    <div>slug</div>
  )
}

export default page