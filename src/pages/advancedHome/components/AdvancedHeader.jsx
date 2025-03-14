import React, { useRef } from "react";
import { MyGeneralContext } from "../../../context/GeneralContext";
import Navigation from "./Navigation";

const AdvancedHeader = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { scroll } = MyGeneralContext();
  const expertMove = useRef(null);

  return (
    <div
      className="mx-2 border-0 border-lime-400 h-16 flex
     justify-between items-center"
    >
      <div
        ref={expertMove}
        className=" uppercase  text-2xl text-center border-0  cursor-pointer"
      >
        Nikolics Milán
      </div>

      <Navigation setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
    </div>
  );
};

export default AdvancedHeader;
/* <ScrollAnimation
        scrollY={scroll.y}
        elementPosition={elementPosition}
        movePosition={movePosition}
      /> */

/*import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; // Framer Motion import
import ElementPositionTracker from "./ElementPositionTracker";
import { MyGeneralContext } from "../../../context/GeneralContext";
import ScrollAnimation from "./ScrollAnimation";
const AdvancedHeader = ({ icons, elementPosition }) => {
  const [movePosition, setMovePosition] = useState({ x: 0, y: 0 });
  const { scroll } = MyGeneralContext();
  const expertMove = useRef(null);
  //const cvButtonRef = useRef(null);
  return (
    <>
    
      <motion.div
      //  ref={expertMove}
        className={`uppercase text-accent text-2xl text-center border-0`}
        animate={{
          // borderRadius: scroll.y < 100 ? "50%" : "0%", // Gömb alak, ha görgetünk
          // scale: scroll.y < 100 ? 1 : 1, // Méretnövelés
          //  x: scroll.y < 100 ? 0 : scroll.x + 300, // Mozgás a vízszintes tengelyen
          //  y: scroll.y < 100 ? 0 : scroll.y + 300, // Mozgás a függőleges tengelyen
          // y: scroll.y <= 10 ? 0 : elementPosition?.y + 200,
          // ide az expert illetve a cvButtonRef külömbségével eltolt értéket kell
          //hozáadni
          //tehát animate cvButtonRef +ExpertPosition abszolút értékének összegét
          //y:scroll.y < 100 ?0:movePosition.y
          y: scroll.y < 10 ? 0 : elementPosition.y + 10 - movePosition.y,
          x: scroll.y < 10 ? 0 : 342,
          y: scroll.y < 20 ? 0 : elementPosition.y + 300 - movePosition.y,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={
          {
            //  width: scroll.y < 100 ? "0px" : "100px",
            //height: scroll.y < 100 ? "0px" : "100px",
            // backgroundColor:
            // scroll.y < 1000 ? "rgba(217, 142, 48, 0.8)" : "transparent", // Gömb átlátszóság
          }
        }
      >
        {scroll.y < 100 ? "EXPERT" : "Arrow"}
      </motion.div>
      <div className="opacity-0" ref={expertMove}>
        startposition
      </div>
      <div className="hidden lg:flex justify-between items-center w-96 h-16 pl-10">
        <div
          className="flex justify-center items-center rounded-lg border-accent border-2 
      p-2 w-36 h-10 hover:text-white hover:bg-accent transition duration-300 cursor-pointer"
        >Download CV
       
        
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
        <ElementPositionTracker
            elementRef={expertMove}
            onPositionChange={setMovePosition}
          />
      </div>
    </>
  );
};*/

//export default AdvancedHeader;
//     <CursorPosition />
