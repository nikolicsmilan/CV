import React from "react";
import { useNavigate } from "react-router-dom";

const CircularIconList = ({ items }) => {
  const iconCount = items.length;
  const radius = 150; // Kör sugara
  const centerX = radius;
  const centerY = radius;
  const navigate = useNavigate(); // Navigációhoz

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {items.map((item, index) => {
        const angle = (index / iconCount) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle) - 20; // 20 az ikon fél szélessége
        const y = centerY + radius * Math.sin(angle) - 20; // 20 az ikon fél magassága

        return (
          <div
            key={index}
            className="absolute cursor-pointer text-center"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
            onClick={() => navigate(item.path)} // Navigálás az adott path-ra
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-400 text-white text-xl">
              {item.icon}
            </div>
           
          </div>
        );
      })}
    </div>
  );
};

export default CircularIconList;

