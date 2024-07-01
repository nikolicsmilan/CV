import React, { useState, useEffect, useRef } from 'react';


const GravityGrids = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const createGrid = () => {
    const spacing = 50; // A vonalak közötti távolság
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const horizontalLines = [];
    const verticalLines = [];

    for (let x = 0; x <= width; x += spacing) {
      verticalLines.push(x);
    }

    for (let y = 0; y <= height; y += spacing) {
      horizontalLines.push(y);
    }

    return { horizontalLines, verticalLines };
  };

  const grid = createGrid();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateDistance = (x1, y1, x2, y2) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const calculateNewPosition = (x, y, mouse) => {
    const distance = calculateDistance(x, y, mouse.x, mouse.y);
    const maxDistance = 150; // Maximális távolság, amin belül hat a "gravitáció"
    const strength = 50; // A "gravitáció" erőssége

    if (distance < maxDistance) {
      const angle = Math.atan2(mouse.y - y, mouse.x - x);
      const force = (maxDistance - distance) / maxDistance * strength;
      const newX = x + Math.cos(angle) * force;
      const newY = y + Math.sin(angle) * force;
      return { x: newX, y: newY };
    }
    return { x, y };
  };

  return (
    <div ref={containerRef} className="grid-container">
      <svg width="100%" height="100%">
        {grid.verticalLines.map((x, i) => {
          const { x: newX1, y: newY1 } = calculateNewPosition(x, 0, mousePosition);
          const { x: newX2, y: newY2 } = calculateNewPosition(x, containerRef.current.clientHeight, mousePosition);
          return (
            <line
              key={`v-${i}`}
              x1={newX1}
              y1={newY1}
              x2={newX2}
              y2={newY2}
              stroke="blue"
              strokeWidth="2"
            />
          );
        })}
        {grid.horizontalLines.map((y, i) => {
          const { x: newX1, y: newY1 } = calculateNewPosition(0, y, mousePosition);
          const { x: newX2, y: newY2 } = calculateNewPosition(containerRef.current.clientWidth, y, mousePosition);
          return (
            <line
              key={`h-${i}`}
              x1={newX1}
              y1={newY1}
              x2={newX2}
              y2={newY2}
              stroke="blue"
              strokeWidth="2"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default GravityGrids;