
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "title slug",
  description: "nextjs13",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    }},
    icons: {
      icon: '/logo.png',
    },
  
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` scroll-smooth ${inter.className}`}>
        
       
     
      
       
            
        
        {children}
      
       
       
        </body>
    </html>
  );
}
