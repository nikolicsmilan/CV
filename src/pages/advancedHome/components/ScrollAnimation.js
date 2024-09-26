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

    switch (true) {
      case scrollY < 10:
        x = 10;
        y = 10;
        borderRadius = "50%";
        scale = 1.1;
        break;
      case scrollY <= 200:
        x = elementPosition.x + 250;
        y = elementPosition.y + 10 - movePosition.y;
        borderRadius = "25%";
        scale = 1.2;
        icon = <FaArrowLeft />;  // Balra mutató nyíl
        text = ` ${width} Send me a message`;
        iconPosition = "left";  // Az ikon baloldalon
        break;
      case scrollY >= 300:
        x = elementPosition.x - 300;
        y = elementPosition.y + 10 - movePosition.y;
        borderRadius = "10%";
        scale = 1.3;
        icon = <FaArrowRight />;  // Jobbra mutató nyíl
        text = "Watch my videos";
        iconPosition = "right";  // Az ikon jobboldalon
        break;
      case scrollY < 700:
        x = 150;
        y = elementPosition.y + 400 - movePosition.y;
        borderRadius = "5%";
        scale = 1.4;
        icon = <FaArrowLeft />;  // Balra mutató nyíl
        text = "Left";
        iconPosition = "left";  // Az ikon baloldalon
        break;
      default:
        x = 0;
        y = 0;
        borderRadius = "0%";
        scale = 1.5;
        icon = <FaArrowUp />;  // Felfelé mutató nyíl
        text = "Up";
        iconPosition = "right";  // Az ikon jobboldalon
        break;
    }

    return { x, y, borderRadius, scale, icon, text, iconPosition };
  };

  const animationValues = getAnimationAndArrow(scrollY);

  return (
    <motion.div
      className="uppercase text-accent text-2xl text-center border-0 h-16 cursor-pointer"
      animate={{
        x: animationValues.x,
        y: animationValues.y,
        borderRadius: animationValues.borderRadius,
        scale: animationValues.scale,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex justify-center items-center border-0">
        {animationValues.icon ? (
          animationValues.iconPosition === "left" ? (
           
            <>
              {animationValues.icon}
              <span className="ml-2 lowercase w-16 text-xl">{animationValues.text}</span>
            </>
          ) : (
        
            <>
              <span className="mr-2 lowercase text-lg">{animationValues.text}</span>
              {animationValues.icon}
            </>
          )
        ) : (
          <span>{animationValues.text}</span>  
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
