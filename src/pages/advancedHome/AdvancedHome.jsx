/*import React from "react";
import { connection, navigation, network } from "../../data/advancedData";
import { FaArrowUp } from "react-icons/fa";
import AdvancedHeader from "./components/AdvancedHeader";
import Hero from "./Hero";
import Video from "./Video";

const AdvancedHome = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="shadow-2xl flex flex-col w-full h-full text-text text-base border-0 lg:border-0">
      <div className="bg-primary w-full h-16 flex justify-between items-center px-5">
        <AdvancedHeader icons={connection} />
      </div>

      <div className="w-full h-full">
        <Hero navigation={navigation} hexagon={network} />
        <Video />
      </div>

      <div className="fixed bottom-4 right-4 w-14 h-14 flex justify-center items-center z-30">
        <FaArrowUp
          className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300"
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};

export default AdvancedHome;*/
import React, { useEffect, useState,useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Importáljuk a Framer Motion-t
import AdvancedHeader from "./components/AdvancedHeader";
import Hero from "./Hero";
import Video from "./Video";
import { connection, navigation, network } from "../../data/advancedData";
import ElementPositionTracker from "./components/ElementPositionTracker";
import CursorPosition from "./components/CursorPosition";
const AdvancedHome = () => {
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
  const cvButtonRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="shadow-2xl flex flex-col w-full h-full text-text text-base border-0 lg:border-0">
      <div className="bg-primary w-full h-16 flex justify-between items-center px-5">
        <AdvancedHeader cvButtonRef={cvButtonRef} icons={connection} />
      </div>

      <div className="w-full h-full">
        <Hero navigation={navigation} hexagon={network} cvButtonRef={cvButtonRef} />
       
        <CursorPosition />
        <Video />
       
      </div>

      <div className="fixed bottom-4 right-4 w-14 h-14 flex justify-center items-center z-30">
        <FaArrowUp
          className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300"
          onClick={scrollToTop}
        />
      </div>
      <div className="fixed bottom-0 left-0">
      <div className="border-0 text-2xl  bg-white p-2 z-50 text-gray-800">
          Element Position - X: {elementPosition.x}, Y: {elementPosition.y}
        </div>
      <ElementPositionTracker
          elementRef={cvButtonRef}
          onPositionChange={setElementPosition}
        />
      </div>
   
    </div>
  );
};

export default AdvancedHome;

