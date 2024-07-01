import React, { useState, useEffect, useRef } from "react";

const GravityPoints = () => {
  const [points, setPoints] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const createPoints = () => {
    const pointsArray = [];
    const spacing = 50; // A pontok közötti távolság
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        pointsArray.push({ x, y, size: 10 });
      }
    }
    setPoints(pointsArray);
  };

  useEffect(() => {
    createPoints();
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const calculateDistance = (point, mouse) => {
    const dx = point.x - mouse.x;
    const dy = point.y - mouse.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const calculateNewPosition = (point, mouse) => {
    const distance = calculateDistance(point, mouse);
    const maxDistance = 150; // Maximális távolság, amin belül hat a "gravitáció"
    const strength = 0.2; // A "gravitáció" erőssége

    if (distance < maxDistance) {
      const angle = Math.atan2(mouse.y - point.y, mouse.x - point.x);
      const force = (maxDistance - distance) * strength;
      const newX = point.x + Math.cos(angle) * force;
      const newY = point.y + Math.sin(angle) * force;
      const newSize = 10 + (maxDistance - distance) * 0.1;
      return { x: newX, y: newY, size: newSize };
    }
    return { ...point, size: 10 };
  };

  return (
    <div ref={containerRef} className="points-container">
      {points.map((point, index) => {
        const newPoint = calculateNewPosition(point, mousePosition);
        return (
          <div
            key={index}
            className="point"
            style={{
              left: `${newPoint.x - newPoint.size / 2}px`, // Középre igazítás
              top: `${newPoint.y - newPoint.size / 2}px`, // Középre igazítás
              width: `${newPoint.size}px`,
              height: `${newPoint.size}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default GravityPoints;
