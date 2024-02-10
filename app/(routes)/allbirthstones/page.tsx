import AllBstoneHero from '@/components/AllBstoneHero'
import AllBstonesSlider from '@/components/AllBstoneSlider'
import AllbPagination from '@/components/AllbPagination'


function page() {
  return (
   <>
 
   
<AllBstoneHero/>

<AllBstonesSlider/>

<AllbPagination/>
   
   
   
   
   
   
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