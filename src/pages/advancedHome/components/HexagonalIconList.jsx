import React from "react";
import { motion } from "framer-motion"; // Importáljuk a Framer Motion-t

const HexagonalIconList = ({ hexagon, centerItem, isHovered }) => {
  const iconCount = hexagon.length;

  // Responsive sugár a képernyő szélessége alapján
  const radius = window.innerWidth < 400 ? 100 : 80; // Kis képernyőn kisebb sugár
  const centerX = radius;
  const centerY = radius;

  return (
    <div className="relative border-0 border-lime-400  mx-auto" style={{ width: `${2 * radius}px`, height: `${2 * radius}px` }}>
      {/* Központi ikon */}
      <div
        className="absolute cursor-pointer text-center"
        style={{
          left: `${centerX+20 }px`, // Az ikon fél szélessége
          top: `${centerY+20 }px`, // Az ikon fél magassága
        }}
      >
        <div className="hexagon text-accent text-xl">AI</div>
      </div>

      {/* Körben lévő ikonok */}
      {hexagon.map((item, index) => {
        const baseAngle = (index / iconCount) * (2 * Math.PI); // Alap szög
        const offsetAngle = isHovered ? 0.2 : 0; // Ha hover történik, mozdítsuk el az ikonokat
        const x = centerX + radius * Math.cos(baseAngle + offsetAngle) - 30; // Elmozdítás a szögek alapján
        const y = centerY + radius * Math.sin(baseAngle + offsetAngle) - 30;

        return (
          <motion.div
            key={index}
            className="absolute cursor-pointer text-center border-0"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
            animate={{ x, y }} // Animáljuk az ikonokat
            transition={{ type: "spring", stiffness: 200, damping: 20 }} // Rugós animáció
          >
            <div className="hexagon text-white text-xl">{item.icon}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HexagonalIconList;

/*
   {hexagon.map((item, index) => {
        const baseAngle = (index / iconCount) * (2 * Math.PI); // Alap szög
        const offsetAngle = isHovered ? 0.2 : 0; // Ha hover történik, mozdítsuk el az ikonokat

        const x = centerX + radius * Math.cos(baseAngle + offsetAngle) - 30; // Elmozdítás a szögek alapján
        const y = centerY + radius * Math.sin(baseAngle + offsetAngle) - 30;

        return (
          <motion.div
            key={index}
            className="absolute cursor-pointer text-center border-0"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
            animate={{ x, y }} // Animáljuk az ikonokat
            transition={{ type: "spring", stiffness: 200, damping: 20 }} // Rugós animáció
          >
            <div className="hexagon text-white text-xl">{item.icon}</div>
          </motion.div>
        );
      })}
*/
