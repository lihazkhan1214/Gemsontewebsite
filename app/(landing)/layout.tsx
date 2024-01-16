import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
     
      {children}
      <Footer/>
      
   
    </>
  );
};

export default LandingLayout;
