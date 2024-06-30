import React, { useState, useEffect } from 'react';


const GravityPoints = () => {
  const [points, setPoints] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const createPoints = () => {
    const pointsArray = [];
    const spacing = 100; // A pontok közötti távolság
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let x = spacing; x < width; x += spacing) {
      for (let y = spacing; y < height; y += spacing) {
        pointsArray.push({ x, y, size: 10 });
      }
    }
    setPoints(pointsArray);
  };

  useEffect(() => {
    createPoints();
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const calculateDistance = (point, mouse) => {
    const dx = point.x - mouse.x;
    const dy = point.y - mouse.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const calculateNewPosition = (point, mouse) => {
    const distance = calculateDistance(point, mouse);
    const maxDistance = 200; // Maximális távolság, amin belül hat a "gravitáció"
    const strength = 0.05; // A "gravitáció" erőssége

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
    <div className="points-container">
      {points.map((point, index) => {
        const newPoint = calculateNewPosition(point, mousePosition);
        return (
          <div
            key={index}
            className="point"
            style={{
              left: `${newPoint.x}px`,
              top: `${newPoint.y}px`,
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