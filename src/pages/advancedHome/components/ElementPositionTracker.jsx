import { useEffect } from "react";

const ElementPositionTracker = ({ elementRef, onPositionChange }) => {
  // Függvény a pozíció lekérdezésére
  const getPosition = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      onPositionChange({ x: rect.left, y: rect.top });
    }
  };

  // useEffect a pozíció frissítésére görgetés vagy átméretezés során
  useEffect(() => {
    getPosition(); // Kezdeti pozíció lekérdezése

    window.addEventListener("resize", getPosition); // Eseményfigyelő az ablak átméretezésére
    window.addEventListener("scroll", getPosition); // Eseményfigyelő a görgetésre

    // Cleanup: eltávolítjuk az eseményfigyelőket amikor az elem már nincs használatban
    return () => {
      window.removeEventListener("resize", getPosition);
      window.removeEventListener("scroll", getPosition);
    };
  }, [elementRef]); // A useEffect figyeli az elementRef-et

  return null; // Nincs UI, csak a pozíciót kezeli
};

export default ElementPositionTracker;