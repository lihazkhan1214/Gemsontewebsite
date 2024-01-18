import { HeroSection } from "@/components/HeroSection";
import { TopSearch } from "@/components/TopSearch";
import {GetArticle} from "@/components/GemArticle";
import { RawGemston } from "@/components/RawGemston";
import GemAbout from "@/components/GemAbout";
import Birthstone from "@/components/BirthStone";
// import Editor from "@/components/Editor"
const Home = async () => {
  const accessToken =
    "pk.eyJ1IjoiYWJkdWxyYTdtYW4iLCJhIjoiY2xvdnJrcDk3MHYwZjJrcWU4bHRsaTRhaSJ9.92ZDJwJAgFil80ZXA4gQcw";
  return (
    <main className="">
     <HeroSection/>
     <TopSearch/>
    <GetArticle/>
    <GemAbout/>
    <RawGemston/>
    <Birthstone/>
  
  


    </main>
  );
};
export default Home;
