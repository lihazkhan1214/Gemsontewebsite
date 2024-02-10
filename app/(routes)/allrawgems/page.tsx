import AllrawgemHero from '@/components/AllrawgemHero'
import AllrawgemPagination from '@/components/AllrawgemPagination'
import React from 'react'

function page() {
  return (
    <>
   <AllrawgemHero/>
   <AllrawgemPagination/>
    
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