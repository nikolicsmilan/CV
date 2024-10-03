import React, { useState } from "react";
import { motion } from "framer-motion";

// Távolság kiszámítása két pont között (Pitagorasz-tétel)
const calculateDistance = (path) => {
  let distance = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const dx = path[i + 1].x - path[i].x;
    const dy = path[i + 1].y - path[i].y;
    distance += Math.sqrt(dx * dx + dy * dy);
  }
  return distance;
};

const ElectricFlow = () => {
  // Közös szakasz
  const commonPath = [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
  ];

  // Első útvonal (elágazás után)
  const path1 = [
    ...commonPath,
    { x: 200, y: 100 },
    { x: 200, y: 220 },
  ];

  // Második útvonal (elágazás után)
  const path2 = [
    ...commonPath,
    { x: 100, y: 200 },
    { x: 100, y: 220 },
  ];


  const [selectedPath, setSelectedPath] = useState(path1);

  // Útvonalak hosszának kiszámítása
  const path1Length = calculateDistance(path1);
  const path2Length = calculateDistance(path2);

  // Útvonalhoz tartozó időtartam arányos az út hosszával
  const baseDuration = 5; // Alap időtartam
  const duration =
    selectedPath === path1
      ? baseDuration
      : (path2Length / path1Length) * baseDuration;

  // SVG path d attribútum generálása
  const generatePathData = (path) =>
    path
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");

  const commonPathData = generatePathData(commonPath);
  const path1Data = generatePathData(path1);
  const path2Data = generatePathData(path2);

  return (
    <div className="w-full h-full p-10 bg-slate-900 flex flex-col items-center">
      <div
        style={{
          width: "300px",
          height: "300px",
          position: "relative",
          border: "1px solid green",
        }}
      >
        {/* SVG az útvonalakkal */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* Közös szakasz */}
          <path d={commonPathData} stroke="purple" strokeWidth="2" fill="none" />
          <path d={path1Data} stroke="orange" strokeWidth="2" fill="none" />
          <path d={path2Data} stroke="purple" strokeWidth="2" fill="none" />
          <line x1="50" y1="150" x2="250" y2="150" stroke="purple" strokeWidth="2" />
      <circle cx="50" cy="150" r="10" fill="yellow" />
      <circle cx="250" cy="150" r="10" fill="yellow" />
        </svg>

        {/* Golyó animációja az útvonal mentén */}
        <motion.div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "yellow",
            borderRadius: "50%",
            position: "absolute",
            top: 0,
            left: 0,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: selectedPath.map((point) => point.x),
            y: selectedPath.map((point) => point.y),
          }}
          transition={{
            duration: duration, // Az útvonal hosszának megfelelő időtartam
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
      </div>

      {/* Gombok az útvonal kiválasztásához */}
      <div className="mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setSelectedPath(path1)}
        >
          Follow Path 1
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setSelectedPath(path2)}
        >
          Follow Path 2
        </button>

        
      </div>
      <p className="my-2">Távolság1: {path1Length}</p>
      <p className="my-2">Távolság2: {path2Length}</p>
      <svg width="300" height="300" className="border border-green-500">
      <line x1="50" y1="150" x2="250" y2="150" stroke="purple" strokeWidth="2" />
      <circle cx="50" cy="150" r="10" fill="yellow" />
      <circle cx="250" cy="150" r="10" fill="yellow" />
      {/* További elemek hozzáadása */}
    </svg>
    </div>
  );
};

export default ElectricFlow;




