import React, { useState } from "react";
import { motion } from "framer-motion";
import thinking from "../../assets/advanced/thinking24.png";
import HexagonalIconList from "./components/HexagonalIconList";
import Navigation from "./components/Navigation";
import HeroText from "./components/HeroText";
import GenerateParticles from "./components/GenerateParticles";
const Hero = ({ navigation, hexagon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particleCount, setParticleCount] = useState(5);

  return (
    <div className="bg-primary flex flex-col lg:flex-row lg:h-full border-0 border-lime-400 lg:bg-thinkingbg2  bg-no-repeat bg-center bg-cover ">
      {/* First page */}
      <HeroText />
      <div className="lg:flex-1 hidden lg:flex flex-col justify-end py-10 border-red-400 border-0 h-full">
        <Navigation navigation={navigation} />
      </div>
      <div className="flex justify-center lg:hidden border-0">
        <div className="flex justify-center border-t-0 border-accent rounded-full w-full h-full border-0">
          <HexagonalIconList hexagon={hexagon} centerItem={hexagon[0]} />
          <img
            src={thinking}
            className="w-full h-full object-cover rounded-full z-10 grayscale brightness-200 contrast-200"
          />
        </div>
      </div>

      <motion.div
        className="border-0 border-red-800 w-96 bg-white lg:bg-primary"
        onHoverStart={() => setIsHovered(true)} // Hover elkezdődött
        onHoverEnd={() => setIsHovered(false)} // Hover vége
      >
        <div className="hidden w-96 lg:w-8 lg:flex justify-center items-center lg:justify-start p-5 border-0 border-orange-400 lg:my-10">
          <HexagonalIconList
            hexagon={hexagon}
            centerItem={hexagon[0]}
            isHovered={isHovered}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;


