import LArticleHero from '@/components/LArticleHero'
import React from 'react';

import LArticlePagination from '@/components/LArticlePagination';
import LArticleSlider from '@/components/LArticleSlider';


function page() {
  return (
<>

<LArticleHero/>
<LArticleSlider/>
<LArticlePagination/>





</>
  )
}

export default page

export async function generateMetadata() {
  return {
    title: "birthstones",
    description:"this is birthstones description"
  }
}