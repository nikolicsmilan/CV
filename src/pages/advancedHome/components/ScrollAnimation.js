import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MyGeneralContext } from "../../../context/GeneralContext";
const ScrollAnimation = ({ scrollY, elementPosition, movePosition }) => {
  const { width } = MyGeneralContext();
  const getAnimationAndArrow = (scrollY) => {
    let x = 0;
    let y = 0;
    let borderRadius = "0%";
    let scale = 1;
    let icon = null;  // Alapértelmezetten nincs nyíl
    let text = "EXPERT";  // Alapértelmezett szöveg
    let iconPosition = "left"; // Új attribútum az ikon elhelyezésére (bal vagy jobb)
    let classNames="";
    switch (true) {
      case scrollY < 10:
        x = 10;
        y = 10;
        //borderRadius = "50%";
        scale = 1.1;
        break;
      case scrollY >= 20:
        x = elementPosition.x + 250;
        y = elementPosition.y -20 ;
       // borderRadius = "25%";
        scale = 1.2;
        icon = <FaArrowLeft />;  // Balra mutató nyíl
        text = `Send me a message`;
        iconPosition = "left";  // Az ikon baloldalon
        classNames="border-0 border-sky-400  p-1 rounded-2xl";
        break;
      case scrollY > 1000:
        x = elementPosition.x - 250;
        y = elementPosition.y + 30 - movePosition.y;
        borderRadius = "10%";
        scale = 1.3;
        icon = <FaArrowRight />;  // Jobbra mutató nyíl
        text = "Watch my videos";
        iconPosition = "right";  // Az ikon jobboldalon
        break;
      default:
        x = 0;
        y = 2000;
        borderRadius = "0%";
        scale = 1.5;
        icon = <FaArrowDown />;  // Felfelé mutató nyíl
        text = "Fall";
        iconPosition = "right";  // Az ikon jobboldalon
        break;
    }

    return { x, y, borderRadius, scale, icon, text, iconPosition,classNames };
  };

  const animationValues = getAnimationAndArrow(scrollY);

  return (
    <motion.div
      className={`flex uppercase text-accent text-2xl text-center border-0 h-16 cursor-pointer ${animationValues.classNames} `}
      animate={{
        x: animationValues.x,
        y: animationValues.y,
        borderRadius: animationValues.borderRadius,
        scale: animationValues.scale,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="flex justify-start items-center border-0 ">
        {animationValues.icon ? (
          animationValues.iconPosition === "left" ? (
           
            <>
              {animationValues.icon}
              <span className="ml-2   text-xl">{animationValues.text}</span>
            </>
          ) : (
        
            <>
              <span className="mr-2  text-lg">{animationValues.text}</span>
              {animationValues.icon}
            </>
          )
        ) : (
          <span className="hover:scale-125 transition duration-300">{animationValues.text}</span>  
        )}
      </div>
    </motion.div>
  );
};

export default ScrollAnimation;




/*import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
const ScrollAnimation = ({ scrollY, elementPosition, movePosition }) => {
  const getAnimationValues = (scrollY) => {
    let x = 0;
    let y = 0;
    let borderRadius = "0%";
    let scale = 1;

    switch (true) {
      case scrollY < 10:
        x = 10;
        y = 10;
        borderRadius = "50%";
        scale = 1.1;
        break;
      case scrollY <= 400:
        x = elementPosition.x+300;
        y = elementPosition.y + 10 - movePosition.y;
        borderRadius = "25%";
        scale = 1.2;
        break;
      case scrollY > 400:
        x = elementPosition.x-300
        y = elementPosition.y + 10 - movePosition.y;
        borderRadius = "10%";
        scale = 1.3;
        break;
      case scrollY < 400:
        x = 150;
        y = elementPosition.y + 400 - movePosition.y;
        borderRadius = "5%";
        scale = 1.4;
        break;
      default:
        x = 0;
        y = 0;
        borderRadius = "0%";
        scale = 1.5;
        break;
    }

    return { x, y, borderRadius, scale };
  };

  const animationValues = getAnimationValues(scrollY);

  return (
    <motion.div
      className="uppercase text-accent text-2xl text-center border-0"
      animate={{
        x: animationValues.x,
        y: animationValues.y,
        borderRadius: animationValues.borderRadius,
        scale: animationValues.scale,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {scrollY < 100 ? "EXPERT" : "Arrow"}
    </motion.div>
  );
};

export default ScrollAnimation;*/
