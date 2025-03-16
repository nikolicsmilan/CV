import React from "react";
import HeroText from "./components/HeroText";
import profile from "../../assets/Profil7.png";

const Hero = ({}) => {
  return (
    <div
      className="bg-gray-100 flex flex-col justify-center 
      items-center lg:items-start lg:flex-row  lg:h-full border-0
     border-sky-400 lg:max-w-7xl mx-auto "
    >
      <div className="lg:mt-10 pt-5 lg:my-0 w-96 border-0 border-sky-400 lg:p-0">
        <HeroText />
      </div>
      <div className="border-0 border-red-400  lg:h-full w-full flex justify-center lg:items-center">
        <img
          className="border-0 border-lime-400 object-cover object-[0px] lg:object-[-30px]
        lg:w-full lg:h-full h-full"
          src={profile}
        />
      </div>
    </div>
  );
};

export default Hero;
