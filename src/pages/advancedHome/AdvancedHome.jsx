import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Importáljuk a Framer Motion-t
import AdvancedHeader from "./components/AdvancedHeader";
import Hero from "./Hero";
import Video from "./Video";
import { connection, navigation, network } from "../../data/advancedData";
import ElementPositionTracker from "./components/ElementPositionTracker";
import CursorPosition from "./components/CursorPosition";
import { MyGeneralContext } from "../../context/GeneralContext";

const AdvancedHome = () => {
  const { scroll } = MyGeneralContext();
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
  const [currentRef, setCurrentRef] = useState(null);
  const [currentRefName, setCurrentRefName] = useState(""); // Új state a ref nevéhez
  const cvButtonRef = useRef(null);
  const scrolMenuRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

// Scroll handler that updates the ref and its name based on scroll position
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY; // Natív scroll pozíció használata

    if (scrollY <= 200) {
      setCurrentRef(cvButtonRef);
      setCurrentRefName("cvButtonRef"); // Ref név beállítása
    } else if (scrollY >= 300) {
      setCurrentRef(scrolMenuRef);
      setCurrentRefName("scrolMenuRef"); // Ref név beállítása
    } else {
      setCurrentRef(null);
      setCurrentRefName(""); // Nincs ref a 400-500 közötti tartományban
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup event listener on unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []); // Üres dependency array azt jelenti, hogy csak egyszer fut le a komponens mount-olásakor


  return (
    <div className="shadow-2xl flex flex-col w-full h-full text-text text-base border-0 lg:border-0">
      <div className="bg-primary w-full h-16 flex justify-between items-center px-5">
        <AdvancedHeader icons={connection} elementPosition={elementPosition} />
       
      </div>

      <div className="w-full h-full">
        <Hero
          navigation={navigation}
          hexagon={network}
          cvButtonRef={cvButtonRef}
          scrolMenuRef={scrolMenuRef}
        />

        <CursorPosition />
        <Video />
      </div>

      <div className="fixed bottom-4 right-4 w-14 h-14 flex justify-center items-center z-50">
        <FaArrowUp
          className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300"
          onClick={scrollToTop}
        />
      </div>

      <div className="fixed bottom-0 left-0">
        <div className="border-0 text-2xl bg-white p-2 z-50 text-gray-800">
        CurrentRef Position - X: {elementPosition.x}, Y: {elementPosition.y}
          <div>CurrentRef: {currentRefName || "N/A"} {elementPosition.y}</div> {/* Ref név kiírása */}
        </div>
        {currentRef && (
          <ElementPositionTracker
            elementRef={currentRef}
            onPositionChange={setElementPosition}
          />
        )}
      </div>
    </div>
  );
};

export default AdvancedHome;


/*import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion"; // Importáljuk a Framer Motion-t
import AdvancedHeader from "./components/AdvancedHeader";
import Hero from "./Hero";
import Video from "./Video";
import { connection, navigation, network } from "../../data/advancedData";
import ElementPositionTracker from "./components/ElementPositionTracker";
import CursorPosition from "./components/CursorPosition";
import { MyGeneralContext } from "../../context/GeneralContext";
const AdvancedHome = () => {
  const {  scroll } = MyGeneralContext();
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
  const [currentRef, setCurrentRef] = useState(null);
  const cvButtonRef = useRef(null);
  const scrolMenuRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Scroll handler that updates the ref based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scroll.y <= 400) {
        setCurrentRef(cvButtonRef); // Use cvButtonRef when scroll is <= 300px
      } else if (scroll.y > 500) {
        setCurrentRef(scrolMenuRef); // Use scrolMenuRef when scroll is > 500px
      } else {
        setCurrentRef(null); // Reset if scrollY is between 300 and 500
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="shadow-2xl flex flex-col w-full h-full text-text text-base border-0 lg:border-0">
      <div className="bg-primary w-full h-16 flex justify-between items-center px-5">
        <AdvancedHeader icons={connection} elementPosition={elementPosition}/>
   CurrentRef:
     </div>

      <div className="w-full h-full">
        <Hero
          navigation={navigation}
          hexagon={network}
          cvButtonRef={cvButtonRef}
          scrolMenuRef={scrolMenuRef}
        />

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
        {currentRef && (
          <ElementPositionTracker
            elementRef={currentRef}
            onPositionChange={setElementPosition}
          />
        )}
      </div>
    </div>
  );
};

export default AdvancedHome;*/

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
