import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import glbModeljs from "../../assets/glb/jsok.glb";
import glbModelhtml5 from "../../assets/glb/html5ok.glb";
import glbModelcss from "../../assets/glb/cssok.glb";
import glbModelreact from "../../assets/glb/reactok.glb";
import glbModeltailwind from "../../assets/glb/tailwindok.glb";
import glbModelnodejs from "../../assets/glb/nodejsok.glb";
import glbModelfirebase from "../../assets/glb/firebaseok.glb";
import glbModelbootstrap from "../../assets/glb/bootstrapok.glb";

const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

function Model({ path, scale, speed, direction, onPositionUpdate }) {
  const { scene } = useGLTF(path);
  const ref = useRef();
  const [moveDirection, setMoveDirection] = useState(direction);

  useFrame(() => {
    if (!ref.current || speed === 0) return;

    const newPos = {
      x: ref.current.position.x + moveDirection.x * speed / 2,
      y: ref.current.position.y + moveDirection.y * speed / 2,
      z: ref.current.position.z + moveDirection.z * speed / 2,
    };

    if (newPos.x >= 2 || newPos.x <= -2) moveDirection.x = -moveDirection.x;
    if (newPos.y >= 2 || newPos.y <= -2) moveDirection.y = -moveDirection.y;
    if (newPos.z >= 2 || newPos.z <= -2) moveDirection.z = -moveDirection.z;

    ref.current.position.set(newPos.x, newPos.y, newPos.z);
    ref.current.rotation.x += speed;
    ref.current.rotation.y += speed;
    ref.current.rotation.z += speed;
/*
    onPositionUpdate({
      x: ref.current.position.x,
      y: ref.current.position.y,
    });*/

    onPositionUpdate({
      x: ref.current.position.x,
      y: ref.current.position.y,
      z: ref.current.position.z,
    });
  });

  return <primitive object={scene} scale={scale} ref={ref} />;
}

const Icon3dComp = ({ path, scale, speed, direction, onPositionUpdate }) => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <Model 
        path={path} 
        scale={scale} 
        speed={speed} 
        direction={direction}
        onPositionUpdate={onPositionUpdate}
      />
    </Canvas>
  );
};

const CoordinatesTable = ({ icons, positions }) => {
  return (
    <div className="absolute top-0 left-0 bg-white bg-opacity-75 p-2 z-50 w-96">
      <table className="border-collaps w-96">
        <thead>
          <tr>
            <th className="border px-2">Icon</th>
            <th className="border px-2">X</th>
            <th className="border px-2">Y</th>
            <th className="border px-2">Z</th>
          </tr>
        </thead>
        <tbody>
          {icons.map((icon, index) => (
            <tr key={index}>
              <td className="border px-2">{icon.name}</td>
              <td className="border px-2">{positions[index].x.toFixed(2)}</td>
              <td className="border px-2">{positions[index].y.toFixed(2)}</td>
              <td className="border px-2">{positions[index].z.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Modal = ({ icon, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded">
        <h2>Ikon részletek</h2>
        <p>Az ikon típusa: {icon.path.split('/').pop().split('.')[0]}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Bezárás</button>
      </div>
    </div>
  );
};

const Icon3d = () => {
  const isMobile = useMobileView();
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const desktopIcons = [
    { path: glbModeljs, scale: [15, 15, 15], speed: 0.01, direction: { x: -3, y: 3, z: 2 }, name: "js" },
    { path: glbModelhtml5, scale: [150, 150, 150], speed: 0.02, direction: { x: -1, y: 2, z: 0 }, name: "html5" },
    { path: glbModelcss, scale: [0.3, 0.3, 0.3], speed: 0.003, direction: { x: 10, y: 10, z: 10 }, name: "css" },
    { path: glbModelreact, scale: [10, 10, 10], speed: 0.004, direction: { x: -10, y: -1, z: -5 }, name: "react" },
    { path: glbModeltailwind, scale: [500, 500, 500], speed: 0.014, direction: { x: -1, y: -2, z: -1 }, name: "tailwind" },
    { path: glbModelnodejs, scale: [1, 0.2, 1], speed: 0.005, direction: { x: 4, y: 2, z: 7 }, name: "nodejs" },
    { path: glbModelfirebase, scale: [0.4, 0.2, 0.4], speed: 0.003, direction: { x: 2, y: 2, z: 2 }, name: "firebase" },
    { path: glbModelbootstrap, scale: [5, 5, 5], speed: 0.003, direction: { x: 1, y: 2, z: 1 }, name: "bootstrap" },
  ];
  
  const mobileIcons = [
    { path: glbModelhtml5, scale: [100, 110, 100], speed: 0.003, direction: { x: -1, y: 2, z: 1 }, name: "html5" },
    { path: glbModelcss, scale: [0.1, 0.1, 0.1], speed: 0.001, direction: { x: 5, y: 5, z: 5 }, name: "css" },
    { path: glbModeljs, scale: [10, 10, 10], speed: 0.02, direction: { x: -1, y: 0, z: 1 }, name: "js" },
    { path: glbModelreact, scale: [5, 5, 5], speed: 0.005, direction: { x: -3, y: -0.5, z: -1.5 }, name: "react" },
    { path: glbModeltailwind, scale: [400, 400, 400], speed: 0.003, direction: { x: -0.5, y: -2, z: -3.5 }, name: "tailwind" },
    { path: glbModelnodejs, scale: [0.3, 0.05, 0.3], speed: 0.005, direction: { x: 2.0, y: -1, z: 1.5 }, name: "nodejs" },
    { path: glbModelfirebase, scale: [0.5, 0.1, 0.5], speed: 0.01, direction: { x: 1, y: 1, z: 1 }, name: "firebase" },
    { path: glbModelbootstrap, scale: [5, 5, 5], speed: 0.003, direction: { x: 1, y: 2, z: 1 }, name: "bootstrap" },
  ];
  

  const icons = isMobile ? mobileIcons : desktopIcons;

  const [iconPositions, setIconPositions] = useState(
    icons.map(() => ({ x: 0, y: 0, z: 0 }))
  );

  const updateIconPosition = (index, position) => {
    setIconPositions(prev => {
      const newPositions = [...prev];
      newPositions[index] = position;
      return newPositions;
    });
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const closestIcon = icons.reduce((closest, icon, index) => {
      const dx = x - iconPositions[index].x;
      const dy = y - iconPositions[index].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < closest.distance ? { index, distance } : closest;
    }, { index: -1, distance: Infinity });

    if (closestIcon.index !== -1) {
      setSelectedIcon(icons[closestIcon.index]);
      setShowModal(true);
    }
  };

  return (
    <div className="relative w-full h-full">
      <CoordinatesTable icons={icons}  positions={iconPositions} />
      {icons.map((icon, index) => (
        <div key={index} className="absolute inset-0">
          <Icon3dComp
            path={icon.path}
            scale={icon.scale}
            speed={showModal ? 0 : icon.speed}
            direction={icon.direction}
            onPositionUpdate={(position) => updateIconPosition(index, position)}
          />
        </div>
      ))}
      <div 
        className="absolute inset-0 z-10" 
        onClick={handleClick}
      />
      {showModal && selectedIcon && (
        <Modal icon={selectedIcon} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Icon3d;