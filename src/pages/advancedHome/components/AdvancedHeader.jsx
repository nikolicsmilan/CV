import React,{useRef,useState} from "react";
import { motion } from "framer-motion"; // Framer Motion import
import CursorPosition from "./CursorPosition";
import { MyGeneralContext } from "../../../context/GeneralContext";
import ElementPositionTracker from "./ElementPositionTracker";
const AdvancedHeader = ({ icons,cvButtonRef }) => {
  const { position, setPosition, scroll, setScroll } = MyGeneralContext();
 

  //const cvButtonRef = useRef(null);
  return (
    <>
      {/* Ha görgetünk, akkor átalakul a felirat gömbbé és mozog */}
      <motion.div
        className={`uppercase text-accent text-2xl text-center border-0`}
        animate={{
          borderRadius: scroll.y < 100 ? "50%" : "0%", // Gömb alak, ha görgetünk
          scale: scroll.y < 100 ? 1 : 1, // Méretnövelés
          x: scroll.y < 100 ? 0 : scroll.x + 300, // Mozgás a vízszintes tengelyen
          y: scroll.y < 100 ? 0 : scroll.y + 300, // Mozgás a függőleges tengelyen
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          width: scroll.y < 100 ? "0px" : "100px",
          height: scroll.y < 100 ? "0px" : "100px",
          backgroundColor:
            scroll.y < 1000 ? "rgba(217, 142, 48, 0.8)" : "transparent", // Gömb átlátszóság
        }}
      >
        {scroll.y < 100 ? "EXPERT" : ""}
      </motion.div>

      <div className="hidden lg:flex justify-between items-center w-96 h-16 pl-10">
        <div
          className="flex justify-center items-center rounded-lg border-accent border-2 
      p-2 w-36 h-10 hover:text-white hover:bg-accent transition duration-300 cursor-pointer"
        >
          <div  >Download CV</div>
        </div>
       
      
        <div className="flex text-xl justify-between w-44">
          {icons.map((item, index) => (
            <div
              key={index}
              className="p-0 hover:text-accent transition duration-300 cursor-pointer"
            >
              {item.icon}
            </div>
          ))}
        </div>
        <div className="w-12 mx-5 hidden">
          <div className="hidden   xl:block"> xl</div>
          <div className="hidden  lg:block xl:hidden"> lg</div>
          <div className="hidden md:block lg:hidden xl:hidden"> md</div>
          <div className=" block md:hidden lg:hidden xl:hidden"> sm</div>
        </div>
        <CursorPosition />
      </div>
    </>
  );
};

export default AdvancedHeader;
//     <CursorPosition />

