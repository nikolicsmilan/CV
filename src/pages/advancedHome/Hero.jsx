import React, { useState, useEffect, useRef  } from "react";
import { motion } from "framer-motion";
import thinking from "../../assets/advanced/thinking24.png";
import HexagonalIconList from "./components/HexagonalIconList";
import Navigation from "./components/Navigation";
import HeroText from "./components/HeroText";
import GenerateParticles from "./components/GenerateParticles";
import profile from "../../assets/Profil7.png";

const Hero = ({ navigation, hexagon }) => {
  // ...

  const heroTextRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (heroTextRef.current && imgRef.current) {
      const heroTextHeight = heroTextRef.current.offsetHeight;
      imgRef.current.style.height = `${heroTextHeight}px`;
    }
  },);

  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row lg:h-full border-0 border-lime-400 bg-no-repeat bg-left bg-cover max-w-7xl mx-auto px-4">
      {/* First page */}
      <div ref={heroTextRef} className="w-1/3">
        <HeroText />
      </div>
      <div className="border-0 ">
        <img ref={imgRef} className="border-0 border-lime-400" src={profile} />
      </div>
    </div>
  );
};

export default Hero;

/*
 <div className="lg:flex-1 hidden lg:flex flex-col justify-end py-10 border-red-400 border-0 h-full">
        <Navigation navigation={navigation} />
      </div>
*/
