import React from "react";
import { motion } from "framer-motion";

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

export default ScrollAnimation;
