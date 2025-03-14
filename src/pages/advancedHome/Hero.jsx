import React, { useEffect, useRef  } from "react";
import HeroText from "./components/HeroText";
import profile from "../../assets/Profil7.png";

const Hero = ({  }) => {


  const heroTextRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (heroTextRef.current && imgRef.current) {
      const heroTextHeight = heroTextRef.current.offsetHeight;
      imgRef.current.style.height = `${heroTextHeight}px`;
    }
  },);

  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row lg:h-full border-0
     border-lime-400 bg-no-repeat bg-left bg-cover max-w-7xl mx-auto px-4">
      <div ref={heroTextRef} className="mt-10 lg:my-0 lg:w-1/3">
        <HeroText />
      </div>
      <div className="border-0 flex items-center justify-center">
        <img ref={imgRef} className="border-0 border-lime-400" src={profile} />
      </div>
    </div>
  );
};

export default Hero;


