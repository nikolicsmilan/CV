import React from "react";
//import { useNavigate } from "react-router-dom";


const HexagonalIconList = ({ items, centerItem }) => {
  const iconCount = items.length;
  const radius = 150; // Kör sugara
  const centerX = radius;
  const centerY = radius;
  //const navigate = useNavigate(); // Navigációhoz

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {/* Központi ikon */}
      <div
        className="absolute cursor-pointer text-center"
        style={{
          left: `${centerX - 40}px`, // 40px az ikon fél szélessége
          top: `${centerY - 40}px`, // 40px az ikon fél magassága
        }}
       // onClick={() => navigate(centerItem.path)} // Központi ikon útvonala
      >
        <div className="hexagon text-accent text-xl ">AI</div>
      </div>

      {/* Körben lévő ikonok */}
      {items.map((item, index) => {
        const angle = (index / iconCount) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle) - 40; // 40px az ikon fél szélessége
        const y = centerY + radius * Math.sin(angle) - 40; // 40px az ikon fél magassága

        return (
          <div
            key={index}
            className="absolute cursor-pointer text-center"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
            //onClick={() => navigate(item.path)} // Navigálás az adott path-ra
          >
            <div className="hexagon text-white text-xl">{item.icon}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HexagonalIconList;
