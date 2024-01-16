"use client"
import { TypeAnimation } from 'react-type-animation';

export const Textanimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Discover the World of  Gemstones',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'Discover the World of Jewelry',
        4000,
        'Discover the World of Minerals ',
        4000,
        'Discover the World of  Lapidary',
        4000
      ]}
      wrapper="span"
      speed={50}
      className="relative text-white flex text-7xl font-semibold leading-[90px] w-[772px] max-w-full ml-4 md:ml-12 mt-14 max-md:text-4xl max-md:leading-[54px] max-md:mt-10"
     
      repeat={Infinity}
    />
  );
};