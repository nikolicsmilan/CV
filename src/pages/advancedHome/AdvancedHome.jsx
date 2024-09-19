import React from "react";
import { connection, navigation, network } from "../../data/advancedData";
import { FaArrowUp } from "react-icons/fa";
import HexagonalIconList from "./components/HexagonalIconList";
import AdvancedHeader from "./components/AdvancedHeader";

import smile from "../../assets/advanced/smile_front2.png";
import Hero from "./Hero";
const AdvancedHome = () => {
  return (
    <div className="shadow-2xl flex flex-col w-full h-full text-text text-base border-0 lg:border-0">
      {/* Header */}
      <div className="bg-primary  w-full h-16 flex justify-between items-center px-5 border-0 lg:border-0 border-red-400">
        <AdvancedHeader icons={connection} />
      </div>

      {/* Body */}
      <div className="w-full h-full ">
   <Hero navigation={navigation} hexagon={network}/>
    Video Section
      </div>
      <div className="fixed bottom-4 right-4 w-14 h-14 flex justify-center items-center z-30">
        <FaArrowUp className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300" />
      </div>
    </div>
  );
};

export default AdvancedHome;
/* <div className=" h-full lg:flex flex-col justify-evenly items-end w-14 ml-auto my-1">
            <FaArrowUp className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300" />
          </div> */
