import React from "react";
//import { useNavigate } from "react-router-dom";

const HexagonalIconList = ({ hexagon, centerItem }) => {
  const iconCount = hexagon.length;

  // Responsive sugár a képernyő szélessége alapján
  const radius = window.innerWidth < 400 ? 100 : 150; // Kis képernyőn kisebb sugár
  const centerX = radius;
  const centerY = radius;

  return (
    <div className="relative mx-auto" style={{ width: `${2 * radius}px`, height: `${2 * radius}px` }}>
      {/* Központi ikon */}
      <div
        className="absolute cursor-pointer text-center"
        style={{
          left: `${centerX - 30}px`, // Az ikon fél szélessége rugalmasabb
          top: `${centerY - 30}px`, // Az ikon fél magassága
        }}
       // onClick={() => navigate(centerItem.path)} // Központi ikon útvonala
      >
        <div className="hexagon text-accent text-xl ">AI</div>
      </div>

      {/* Körben lévő ikonok */}
      {hexagon.map((item, index) => {
        const angle = (index / iconCount) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle) - 30; // Rugalmas ikon fél szélessége
        const y = centerY + radius * Math.sin(angle) - 30; // Rugalmas ikon fél magassága

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

