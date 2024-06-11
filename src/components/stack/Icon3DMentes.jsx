import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import glbModeljs from "../../assets/glb/js.glb";
import glbModelhtml5 from "../../assets/glb/html5.glb";
import glbModelcss from "../../assets/glb/css.glb";
import glbModelreact from "../../assets/glb/react3D.glb";
import glbModeltailwind from "../../assets/glb/tailwind.glb";
import glbModelnodejs from "../../assets/glb/nodejs2.glb";
import glbModelfirebase from "../../assets/glb/firebase4.glb";
import glbModelgithub2 from "../../assets/glb/github2.glb";
import glbModelbootstrap from "../../assets/glb/bootstrap.glb";
import glbModelexpress from "../../assets/glb/express9.glb";
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
    ref.current.position.x += moveDirection.x * speed;
    ref.current.position.y += moveDirection.y * speed;
    ref.current.position.z += moveDirection.z * speed;

    if (ref.current.position.x >= maxPosition || ref.current.position.x <= minPosition) {
      moveDirection.x = -moveDirection.x;
    }
    if (ref.current.position.y >= maxPosition || ref.current.position.y <= minPosition) {
      moveDirection.y = -moveDirection.y;
    }
    if (ref.current.position.z >= maxPosition || ref.current.position.z <= minPosition) {
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
  const [visibleIcons, setVisibleIcons] = useState(0);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setVisibleIcons(prev => {
          if (prev < mobileIcons.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 1500); // Adjust the delay as needed
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const mobileIcons = [
    { path: glbModelhtml5, scale: [3, 3, 3], speed: 0.001, direction: { x: -1, y: 2, z: 0 } },
    { path: glbModelcss, scale: [0.05, 0.05, 0.05], speed: 0.0005, direction: { x: 5, y: 5, z: 5 } },
    { path: glbModeljs, scale: [3, 3, 3], speed: 0.002, direction: { x: -1, y: 0, z: 1 } },   
    { path: glbModelreact, scale: [3, 3, 3], speed: 0.0005, direction: { x: -3, y: -0.5, z: -1.5 } },
    { path: glbModeltailwind, scale: [0.15, 0.2, 0.15], speed: 0.001, direction: { x: -0.5, y: -2, z: -3.5 } },
    { path: glbModelnodejs, scale: [0.1, 0.05, 0.1], speed: 0.0015, direction: { x: -2.0, y: 1, z: 1.5 } },
    { path: glbModelfirebase, scale: [0.05, 0.02, 0.05], speed: 0.0015, direction: { x: 1, y: 1, z: 1 } },
   /* { path: glbModelgithub2, scale: [0.5, 0.5, 0.5], speed: 0.0015, direction: { x: 2.5, y: 6, z: 1 } },
    { path: glbModelbootstrap, scale: [3, 3, 3], speed: 0.0015, direction: { x: 1, y: 2, z: 1 } },
    { path: glbModelexpress, scale: [25, 25, 25], speed: 0.0015, direction: { x: -1, y: 3, z: 1 } },
    { path: glbModelsql, scale: [0.15, 0.15, 0.15], speed: 0.0015, direction: { x: 1, y: 0, z: 1 } },
    { path: glbModelMongo, scale: [4, 4, 4], speed: 0.005, direction: { x: 0, y: 1, z: 0 } },
    { path: glbModelnpm, scale: [40, 40, 40], speed: 0.0025, direction: { x: -1, y: 1, z: 1 } }*/
  ];

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center border-0 border-orange-400 p-0 rounded-lg">
      {mobileIcons.slice(0, visibleIcons).map((icon, index) => (
        <div key={index} className="flex absolute w-full h-full border-purple-400 border-0">
          <Icon3dComp path={icon.path} scale={icon.scale} speed={icon.speed} direction={icon.direction} />
        </div>
      ))}
    </div>
  );
};

export default Icon3d;