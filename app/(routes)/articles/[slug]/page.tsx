import React from 'react'
import {getSingleArticle } from '@/services';

import SingleAPost from '@/components/SingleAPost';

interface BlogResponse {
  articles: {
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
    const res:any = await getSingleArticle(params.slug);
console.log("slug responses",res)
    if (!res.articles) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }

    return {
      title: res.articles.seoTitle,
      description: res.articles.seoDescription,
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




function page({ params }: { params: { slug: string } }) {
  return (
  <>

  
  <SingleAPost params={params}/>
  </>
  )
}

export default page