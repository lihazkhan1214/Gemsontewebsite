import Image from "next/image";

interface Card {
  image: string;
  title: string;
  desc: string;
}

const FeaturesCard = () => {
  const card: Card[] = [
    {
      image: "/assets/fimages/coo.png",
      title: "Countries of Origin",
      desc: "Tanzania, United Republic Of; Myanmar; Afghanistan; Russian Federation; Viet Nam; Czechia; Guinea; United States of America; Madagascar; Thailand; Sweden; Mozambique; Pakistan; Morocco; Unknown; China; Brazil; Nigeria; Argentina; Sri Lanka; Zambia; Kenya; Switzerland; India; Norway; Namibia; South Africa; Ethiopia; Greenland; Tajikistan; Indonesia",
    },
    {
      image: "/assets/fimages/h.png",
      title: "History",
      desc: "Rubies. We desire them. Their rich reds are powerful, seductive, and inflaming. Ruby has been a treasure for centuries - the ancient Hindus named it the King of Gems. In fact, the Sanskrit word for ruby is ratnaraj, which means, the King of Gems. Ruby is considered the gemstone of passion and of lovers; it's the quintessential symbol for red.",
    },
    {
      image: "/assets/fimages/c.png",
      title: "Care",
      desc: "Untreated and heated rubies just need normal care. Avoid recutting or chipping coated or surface diffused stones. Avoid common household chemicals, steam cleaners, ultrasonic cleaners and a jeweler’s torch with lead glass filled, dyed or oiled/resin filled stones.",
    },
  ];
  return (
    <div className="padding-x  bg-[#f5f5f5e8]">
        <div className="my-20 py-20 flex flex-col lg:flex-row  justify-between items-center gap-5">

      {card.map((card, ind) => (
          <div
          key={ind}
          className="  flex flex-col items-center justify-between bg-[#FFF] shadow-md shadow-[#bebec0]"
        >
          <div className="relative w-full mx-auto h-[217px]">
            <Image src={card.image} alt="not found" fill />
          </div>

          <h1 className=" text-[#000] mt-5 text-[24px] font-normal text-center">
            {card.title}
          </h1>

          <p className="text-[16px] px-4  text-[#777777] font-normal text-center mt-5 leading-7">
            {card.desc}
          </p>
          <div className="mb-5"></div>
        </div>
      ))}
    </div>
          </div>
  );
};

export default FeaturesCard;
