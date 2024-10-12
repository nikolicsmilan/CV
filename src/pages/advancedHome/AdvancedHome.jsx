import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Importáljuk a Framer Motion-t
import AdvancedHeader from "./components/AdvancedHeader";
import Hero from "./Hero";
import Video from "./Video";
import { connection, navigation, network } from "../../data/advancedData";
import { MyGeneralContext } from "../../context/GeneralContext";
import ElectricFlow from "./components/ElectricFlow";

const AdvancedHome = () => {
  const cvButtonRef = useRef(null);
  const scrolMenuRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="shadow-2xl flex flex-col w-full h-full text-text text-base border-0 lg:border-0 border-sky-400">
      <div className=" border-0 border-red-400 bg-primary w-full h-16 flex justify-between items-center px-5 ">
        <AdvancedHeader icons={connection} />
      </div>

      <div className="w-full h-full ">
        <Hero navigation={navigation} hexagon={network} />

        <Video />
        <ElectricFlow />
      </div>

      <div className="fixed bottom-4 right-4 w-14 h-14 flex justify-center items-center z-50">
        <FaArrowUp
          className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300"
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};

export default AdvancedHome;
