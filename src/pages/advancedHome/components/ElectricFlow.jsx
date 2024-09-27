/*import React from 'react';
import { motion } from 'framer-motion';

const ElectricFlow = () => {
  // Az útvonal koordinátái, ahol az áram halad
  const path = [
    { x: 0, y: 0 },     // Kezdőpont
    { x: 100, y: 0 },   // Első megálló
    { x: 100, y: 100 }, // Második megálló
    { x: 200, y: 100 }, // Harmadik megálló
    { x: 200, y: 200 }  // Végállomás
  ];

  return (
    <div className='w-full h-full border-2 border-red-400 p-10'>
    <div style={{ width: '300px', height: '300px', position: 'relative', border: '1px solid green' }}>
      <motion.div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
          borderRadius: '50%',
          position: 'absolute',
        }}
        // Az animáció vezérlése több pont alapján
        animate={{
          x: path.map(point => point.x), // X tengelyen való mozgás
          y: path.map(point => point.y), // Y tengelyen való mozgás
        }}
        transition={{
          duration: 5, // Összes időtartam (másodpercben)
          ease: 'linear', // Egyenletes mozgás
          times: [0, 0.25, 0.5, 0.75, 1], // A megállók időpontjai
          repeat: Infinity, // Végtelen ismétlés
          repeatDelay: 1 // Késleltetés az ismétlések között
        }}
      />
    </div>
    </div>
  );
};

export default ElectricFlow;*/
/*
import React from 'react';
import { motion } from 'framer-motion';

const ElectricFlow = () => {
  // Az útvonal koordinátái, ahol az áram halad
  const path = [
    { x: 0, y: 0 },     // Kezdőpont
    { x: 100, y: 0 },   // Első megálló
    { x: 100, y: 100 }, // Második megálló
    { x: 200, y: 100 }, // Harmadik megálló
    { x: 200, y: 200 }  // Végállomás
  ];

  // SVG path d attribútum generálása a koordináták alapján
  const pathData = path.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  return (
    <div className='w-full h-full border-2 border-red-400 p-10'>
      <div style={{ width: '300px', height: '300px', position: 'relative', border: '1px solid green' }}>
       
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <path
            d={pathData}
            stroke="purple"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
        
      
        <motion.div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            borderRadius: '50%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          // Az animáció vezérlése több pont alapján
          animate={{
            x: path.map(point => point.x),
            y: path.map(point => point.y),
          }}
          transition={{
            duration: 5,
            ease: 'linear',
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    </div>
  );
};

export default ElectricFlow;*/

import React from "react";
import { motion } from "framer-motion";

const ElectricFlow = () => {
  // Az útvonal koordinátái, ahol az áram halad
  const path = [
    { x: 0, y: 0 }, // Kezdőpont
    { x: 100, y: 0 }, // Első megálló
    { x: 100, y: 100 }, // Második megálló
    { x: 200, y: 100 }, // Harmadik megálló
    { x: 200, y: 200 }, // Végállomás
    { x: 100, y: 200 }, // Végállomás
    { x: 100, y: 220 }, // Végállomás
  ];

  // SVG path d attribútum generálása a koordináták alapján
  const pathData = path
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <div className="w-full h-full border-0 border-red-400 p-10 bg-slate-900">
      <div
        style={{
          width: "300px",
          height: "300px",
          position: "relative",
          border: "1px solid green",
        }}
      >
        {/* SVG az útvonallal */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <path
            d={pathData}
            stroke="purple"
            strokeWidth="2"
            fill="transparent"
          />
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
            translateX: "-50%", // A golyó középre helyezése
            translateY: "-50%",
          }}
          animate={{
            x: path.map((point) => point.x),
            y: path.map((point) => point.y),
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div>
    </div>
  );
};

export default ElectricFlow;
