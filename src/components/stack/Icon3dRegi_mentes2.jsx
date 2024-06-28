import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import glbModeljs from "../../assets/glb/jsok.glb";
import glbModelhtml5 from "../../assets/glb/html5ok.glb";
import glbModelcss from "../../assets/glb/cssok.glb";
import glbModelreact from "../../assets/glb/reactok.glb";
import glbModeltailwind from "../../assets/glb/tailwindok.glb";
import glbModelnodejs from "../../assets/glb/nodejsok.glb";
import glbModelfirebase from "../../assets/glb/firebaseok.glb";
import glbModelbootstrap from "../../assets/glb/bootstrapok.glb";

// Hook a mobil nézet felismerésére
const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Mobil nézet, ha az ablak szélessége kisebb vagy egyenlő 768 pixel
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

// Modell komponens, amely a 3D modellt jeleníti meg és animálja
const Model = ({ path, scale, speed, direction }) => {
  const { scene } = useGLTF(path); // 3D modell betöltése GLTF formátumból
  const ref = useRef();
  const [moveDirection, setMoveDirection] = useState(direction); // Mozgási irány állapot

  useFrame(() => {
    if (!ref.current || speed === 0) return; // Ha nincs referencia vagy a sebesség 0, ne animáljon

    const newPos = {
      x: ref.current.position.x + moveDirection.x * speed / 2,
      y: ref.current.position.y + moveDirection.y * speed / 2,
      z: ref.current.position.z + moveDirection.z * speed / 2,
    };

    // Ellenőrzi az új pozíciót, és megváltoztatja a mozgási irányt, ha eléri a határokat
    if (newPos.x >= 2 || newPos.x <= -2) {
      setMoveDirection((dir) => ({ ...dir, x: -dir.x }));
    }
    if (newPos.y >= 2 || newPos.y <= -2) {
      setMoveDirection((dir) => ({ ...dir, y: -dir.y }));
    }
    if (newPos.z >= 2 || newPos.z <= -2) {
      setMoveDirection((dir) => ({ ...dir, z: -dir.z }));
    }

    ref.current.position.set(newPos.x, newPos.y, newPos.z); // Új pozíció beállítása
    ref.current.rotation.x += speed; // Rotáció animálása
    ref.current.rotation.y += speed;
    ref.current.rotation.z += speed;
  });

  return <primitive object={scene} scale={scale} ref={ref} />;
};

// Icon3D komponens, amely a 3D modellt Canvas-ban jeleníti meg
const Icon3D = ({ path, scale, speed, direction }) => (
  <Canvas>
    <OrbitControls enableZoom={false} /> {/* OrbitControls a 3D modell navigációjához */}
    <ambientLight intensity={1.5} /> {/* Ambient fény */}
    <directionalLight position={[1, 1, 1]} intensity={1} /> {/* Irányított fény */}
    <Model path={path} scale={scale} speed={speed} direction={direction} />
  </Canvas>
);

// Icon3dComp komponens, amely az egyes ikonokat tartalmazza
const Icon3dComp = ({ path, scale, speed, direction, onClick }) => (
  <div className="border-0 absolute w-full h-full" onClick={onClick}>
    <Icon3D path={path} scale={scale} speed={speed} direction={direction} />
  </div>
);

// Icon3d fő komponens, amely az összes ikont kezeli
const Icon3d = () => {
  const isMobile = useMobileView(); // Ellenőrzi, hogy mobil nézetben van-e
  const [selectedIcon, setSelectedIcon] = useState(null); // Állapot a kiválasztott ikon tárolására

  // Asztali nézet ikonok
  const desktopIcons = [
    { path: glbModeljs, scale: [15, 15, 15], speed: 0.01, direction: { x: -3, y: 3, z: 2 } },
    { path: glbModelhtml5, scale: [150, 150, 150], speed: 0.02, direction: { x: -1, y: 2, z: 0 } },
    { path: glbModelcss, scale: [0.3, 0.3, 0.3], speed: 0.003, direction: { x: 10, y: 10, z: 10 } },
    { path: glbModelreact, scale: [10, 10, 10], speed: 0.004, direction: { x: -10, y: -1, z: -5 } },
    { path: glbModeltailwind, scale: [500, 500, 500], speed: 0.014, direction: { x: -1, y: -2, z: -1 } },
    { path: glbModelnodejs, scale: [1, 0.2, 1], speed: 0.005, direction: { x: 4, y: 2, z: 7 } },
    { path: glbModelfirebase, scale: [0.4, 0.2, 0.4], speed: 0.003, direction: { x: 2, y: 2, z: 2 } },
    { path: glbModelbootstrap, scale: [7, 7, 7], speed: 0.003, direction: { x: 1, y: 2, z: 1 } },
  ];

  // Mobil nézet ikonok
  const mobileIcons = [
    { path: glbModelhtml5, scale: [100, 110, 100], speed: 0.003, direction: { x: -1, y: 2, z: 1 } },
    { path: glbModelcss, scale: [0.1, 0.1, 0.1], speed: 0.001, direction: { x: 5, y: 5, z: 5 } },
    { path: glbModeljs, scale: [10, 10, 10], speed: 0.02, direction: { x: -1, y: 0, z: 1 } },
    { path: glbModelreact, scale: [5, 5, 5], speed: 0.005, direction: { x: -3, y: -0.5, z: -1.5 } },
    { path: glbModeltailwind, scale: [400, 400, 400], speed: 0.003, direction: { x: -0.5, y: -2, z: -3.5 } },
    { path: glbModelnodejs, scale: [0.3, 0.05, 0.3], speed: 0.005, direction: { x: 2.0, y: -1, z: 1.5 } },
    { path: glbModelfirebase, scale: [0.5, 0.1, 0.5], speed: 0.01, direction: { x: 1, y: 1, z: 1 } },
    { path: glbModelbootstrap, scale: [5, 5, 5], speed: 0.003, direction: { x: 1, y: 2, z: 1 } },
  ];

  const icons = isMobile ? mobileIcons : desktopIcons; // Válassza ki a megfelelő ikonokat a nézettől függően

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center border-0 p-0 rounded-lg">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex absolute w-full h-full border-0"
          onClick={() => setSelectedIcon(index)} // Kiválasztja az ikont
        >
          <Icon3dComp
            path={icon.path}
            scale={icon.scale}
            speed={selectedIcon !== null ? 0 : icon.speed} // Megállítja az animációt, ha egy ikon ki van választva
            direction={icon.direction}
          />
        </div>
      ))}
      {selectedIcon !== null && (
        // Információs panel a kiválasztott ikonról
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2>Icon Information</h2>
            <p>Information about the selected icon.</p>
            <button onClick={() => setSelectedIcon(null)}>Close</button> {/* Bezárja az információs panelt */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Icon3d;


//js #FFD928