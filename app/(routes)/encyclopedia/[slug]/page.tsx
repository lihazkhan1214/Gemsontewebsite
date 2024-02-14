import { getSingleBlog } from '@/services';
import SinglePstonecmp from '@/components/SinglePstonecmp';

interface BlogResponse {
  post: {
    seoTitle: string;
    seoDescription: string;
    slug?: string; // Optional based on your comment
  };
}

interface Metadata {
  title: string;
  description: string;
  // Uncomment and define the type if needed
  // alternates?: {
  //   canonical: string;
  // };
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  try {
    const res:any = await getSingleBlog(params.slug);

    if (!res) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }

    return {
      title: res.post.seoTitle,
      description: res.post.seoDescription,
      // Uncomment and adjust as necessary
      // alternates: {
      //   canonical: `/res/${res.post.slug}`,
      // },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Error",
      description: "An error occurred while trying to fetch the page.",
    };
  }
}


import React from 'react'

function page({ params }: { params: { slug: string } }) {
  return (
  <>
  <SinglePstonecmp params={params}/>
  
  
  </>
  )
}

export default page