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
import glbModelgithub2 from "../../assets/glb/githubok.glb";
import glbModelbootstrap from "../../assets/glb/bootstrapok.glb";
import glbModelexpress from "../../assets/glb/expressok.glb";
import glbModelsql from "../../assets/glb/sql2.glb";
import glbModelMongo from "../../assets/glb/mongo3.glb";
import glbModelnpm from "../../assets/glb/npm.glb";

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

function Model({ path, scale, speed, direction }) {
  const { scene } = useGLTF(path);
  const ref = useRef();
  const maxPosition = 2;
  const minPosition = -2;
  let moveDirection = direction;

  useFrame(() => {
    ref.current.position.x += (moveDirection.x * speed) / 2;
    ref.current.position.y += (moveDirection.y * speed) / 2;
    ref.current.position.z += (moveDirection.z * speed) / 2;

    if (
      ref.current.position.x >= maxPosition ||
      ref.current.position.x <= minPosition
    ) {
      moveDirection.x = -moveDirection.x;
    }
    if (
      ref.current.position.y >= maxPosition ||
      ref.current.position.y <= minPosition
    ) {
      moveDirection.y = -moveDirection.y;
    }
    if (
      ref.current.position.z >= maxPosition ||
      ref.current.position.z <= minPosition
    ) {
      moveDirection.z = -moveDirection.z;
    }

    ref.current.rotation.x += speed;
    ref.current.rotation.y += speed;
    ref.current.rotation.z += speed;
  });

  return <primitive object={scene} scale={scale} ref={ref} />;
}

function Icon3D({ path, scale, speed, direction }) {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <Model path={path} scale={scale} speed={speed} direction={direction} />
    </Canvas>
  );
}

const Icon3dComp = ({ path, scale, speed, direction }) => {
  return (
    <div className="border-0 absolute border-red-400 w-full h-full">
      <Icon3D path={path} scale={scale} speed={speed} direction={direction} />
    </div>
  );
};

const Icon3d = () => {
  const isMobile = useMobileView();
  const [selectedIcon, setSelectedIcon] = useState(null); 
  const desktopIcons = [
    {
      path: glbModeljs,
      scale: [15, 15, 15],
      speed: 0.01,
      direction: { x: -3, y: 3, z: 2 },
    },
    {
      path: glbModelhtml5,
      scale: [150, 150, 150],
      speed: 0.02,
      direction: { x: -1, y: 2, z: 0 },
    },
    {
      path: glbModelcss,
      scale: [0.3, 0.3, 0.3],
      speed: 0.003,
      direction: { x: 10, y: 10, z: 10 },
    },
    {
      path: glbModelreact,
      scale: [10, 10, 10],
      speed: 0.004,
      direction: { x: -10, y: -1, z: -5 },
    },
    {
      path: glbModeltailwind,
      scale: [500, 500, 500],
      speed: 0.014,
      direction: { x: -1, y: -2, z: -1 },
    },
    {
      path: glbModelnodejs,
      scale: [1, 0.2, 1],
      speed: 0.005,
      direction: { x: 4, y: 2, z: 7 },
    },
    {
      path: glbModelfirebase,
      scale: [0.4, 0.2, 0.4],
      speed: 0.003,
      direction: { x: 2, y: 2, z: 2 },
    },
    {
      path: glbModelbootstrap,
      scale: [7, 7, 7],
      speed: 0.003,
      direction: { x: 1, y: 2, z: 1 },
    },
    /*   { path: glbModelgithub2, scale: [2, 2, 2], speed: 0.003, direction: { x: 5, y: 12, z: 2 } },
    { path: glbModelbootstrap, scale: [6, 6, 6], speed: 0.003, direction: { x: 2, y: 12, z: 2 } },
    { path: glbModelexpress, scale: [50, 50, 50], speed: 0.003, direction: { x: -2, y: 12, z: 2 } },
    { path: glbModelsql, scale: [0.3, 0.3, 0.3], speed: 0.003, direction: { x: 2, y: 0, z: 2 } },
    { path: glbModelMongo, scale: [8, 8, 8], speed: 0.01, direction: { x: 0, y: 2, z: 0 } },
    { path: glbModelnpm, scale: [80, 80, 80], speed: 0.005, direction: { x: -6, y: 2, z: 2 } }*/
  ];

  const mobileIcons = [
    {
      path: glbModelhtml5,
      scale: [100, 110, 100],
      speed: 0.003,
      direction: { x: -1, y: 2, z: 1 },
    },
    {
      path: glbModelcss,
      scale: [0.1, 0.1, 0.1],
      speed: 0.001,
      direction: { x: 5, y: 5, z: 5 },
    },
    {
      path: glbModeljs,
      scale: [10, 10, 10],
      speed: 0.02,
      direction: { x: -1, y: 0, z: 1 },
    },
    {
      path: glbModelreact,
      scale: [5, 5, 5],
      speed: 0.005,
      direction: { x: -3, y: -0.5, z: -1.5 },
    },
    {
      path: glbModeltailwind,
      scale: [400, 400, 400],
      speed: 0.003,
      direction: { x: -0.5, y: -2, z: -3.5 },
    },
    {
      path: glbModelnodejs,
      scale: [0.3, 0.05, 0.3],
      speed: 0.005,
      direction: { x: 2.0, y: -1, z: 1.5 },
    },
    {
      path: glbModelfirebase,
      scale: [0.5, 0.1, 0.5],
      speed: 0.01,
      direction: { x: 1, y: 1, z: 1 },
    },
    {
      path: glbModelbootstrap,
      scale: [5, 5, 5],
      speed: 0.003,
      direction: { x: 1, y: 2, z: 1 },
    },

    /* { path: glbModelgithub2, scale: [0.5, 0.5, 0.5], speed: 0.0015, direction: { x: 2.5, y: 6, z: 1 } },
    { path: glbModelbootstrap, scale: [3, 3, 3], speed: 0.0015, direction: { x: 1, y: 2, z: 1 } },
    { path: glbModelexpress, scale: [25, 25, 25], speed: 0.0015, direction: { x: -1, y: 3, z: 1 } },
    { path: glbModelsql, scale: [0.15, 0.15, 0.15], speed: 0.0015, direction: { x: 1, y: 0, z: 1 } },
    { path: glbModelMongo, scale: [4, 4, 4], speed: 0.005, direction: { x: 0, y: 1, z: 0 } },
    { path: glbModelnpm, scale: [40, 40, 40], speed: 0.0025, direction: { x: -1, y: 1, z: 1 } }*/
  ];

  const icons = isMobile ? mobileIcons : desktopIcons;

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center border-0 p-0 rounded-lg">
    {icons.map((icon, index) => (
      <div 
        key={index} 
        className="flex absolute w-full h-full border-0"
        onClick={() => setSelectedIcon(index)} // Beállítja a kiválasztott ikont
      >
        <Icon3dComp 
          path={icon.path} 
          scale={icon.scale} 
          speed={selectedIcon === index ? 0 : icon.speed} // Állítsa meg az animációt a kiválasztott ikonon
          direction={icon.direction} 
        />
      </div>
    ))}
    {selectedIcon !== null && (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg">
          <h2>Icon Information</h2>
          <p>Information about the selected icon.</p>
          <button onClick={() => setSelectedIcon(null)}>Close</button>
        </div>
      </div>
    )}
  </div>
  );
};
export default Icon3d;

//js #FFD928
