import React, { useState, useEffect } from "react";
import { MyGeneralContext } from "../../../context/GeneralContext";
const CursorPosition = () => {
  const { position, setPosition, scroll, setScroll } = MyGeneralContext();
  // A window objektumra tesszük az egérmozgás követését
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    // Görgetés figyelése
    const handleScroll = () => {
      setScroll({
        x: window.scrollX,
        y: window.scrollY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    // Cleanup az esemény eltávolítására, amikor a komponens elhagyja a DOM-ot
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 bg-red-400 p-2 z-50">
    <div className="text-2xl text-gray-800">
      Cursor Position: X: {Math.round(position.x)}, Y: {Math.round(position.y)}
    </div>
    <div className="text-2xl text-gray-800">
      Scroll Position: X: {Math.round(scroll.x)}, Y: {Math.round(scroll.y)}
    </div>
  </div>
  
  );
};

export default CursorPosition;
