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

function Model({ path, scale, speed, direction, onClick /*ref*/}) {
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
  });

  return <primitive object={scene} scale={scale} ref={ref} /*onClick={onClick}*/ />;
}

function Icon3D({ path, scale, speed, direction, onClick }) {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <Model path={path} scale={scale} speed={speed} direction={direction} onClick={onClick} />
    </Canvas>
  );
}

const Icon3dComp = ({ path, scale, speed, direction, onClick }) => {
  return (
    <div className="w-full h-full relative">
      <div className="border- border-orange-400 
      absolute w-full h-full" onClick={onClick}>
        <Icon3D path={path} scale={scale} speed={speed} 
        direction={direction} />
      </div>
    </div>
  );
};

const Icon3d = () => {
  const isMobile = useMobileView();
  const [selectedIcon, setSelectedIcon] = useState(null);

  const desktopIcons = [
    { path: glbModeljs, scale: [15, 15, 15], speed: 0.01, direction: { x: -3, y: 3, z: 2 } },
    { path: glbModelhtml5, scale: [150, 150, 150], speed: 0.02, direction: { x: -1, y: 2, z: 0 } },
    { path: glbModelcss, scale: [0.3, 0.3, 0.3], speed: 0.003, direction: { x: 10, y: 10, z: 10 } },
    { path: glbModelreact, scale: [10, 10, 10], speed: 0.004, direction: { x: -10, y: -1, z: -5 } },
    { path: glbModeltailwind, scale: [500, 500, 500], speed: 0.014, direction: { x: -1, y: -2, z: -1 } },
    { path: glbModelnodejs, scale: [1, 0.2, 1], speed: 0.005, direction: { x: 4, y: 2, z: 7 } },
    { path: glbModelfirebase, scale: [0.4, 0.2, 0.4], speed: 0.003, direction: { x: 2, y: 2, z: 2 } },
  //  { path: glbModelbootstrap, scale: [7, 7, 7], speed: 0.003, direction: { x: 1, y: 2, z: 1 } },
  ];

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

  const icons = isMobile ? mobileIcons : desktopIcons;

  const handleClick = (index) => {
    setSelectedIcon(icons[index]);
  };

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center border-0 p-0 rounded-lg">
      {icons.map((icon, index) => (
        <div key={index} className="flex absolute w-full h-full border-0">
          <Icon3dComp
            path={icon.path}
            scale={icon.scale}
            speed={selectedIcon ? 0 : icon.speed}
            direction={icon.direction}
            onClick={() => handleClick(index)}
          />
        </div>
      ))}

      {selectedIcon && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2>Icon Information</h2>
            <p>Information about the selected icon.</p>
            <div className="w-64 h-64 border-0">
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.5} />
                <directionalLight position={[1, 1, 1]} intensity={1} />
                <Model
                  path={selectedIcon.path}
                  scale={selectedIcon.scale}
                  speed={0}
                  direction={selectedIcon.direction}
                />
              </Canvas>
            </div>
            {selectedIcon.path}
            <button onClick={() => setSelectedIcon(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Icon3d;

/*import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { mobileIcons, desktopIcons } from "../../data/stack";
import { motion } from "framer-motion";
import { slideAnimation } from "../../utils/motion";
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

function Model({ path, scale, speed, direction, onClick }) {
  const { scene } = useGLTF(path);
  const ref = useRef();
  const [moveDirection, setMoveDirection] = useState(direction);

  useFrame(() => {
    if (!ref.current) return;
    //ref.current.rotation.x += speed;
    //ref.current.rotation.x =0
    ref.current.rotation.z += speed;
    ref.current.rotation.y += 0.0002
    ref.current.rotation.x += -0.0002
    // ref.current.rotation.z += speed;
  });

  return <primitive object={scene} scale={scale} ref={ref} onClick={onClick} />;
}

function Icon3D({ path, scale, speed, direction, onClick }) {
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
        onClick={onClick}
      />
    </Canvas>
  );
}

const Icon3dComp = ({
  path,
  scale,
  speed,
  direction,
  onClick,
  borderColor,
  sizeW,
  sizeH,
}) => {
  return (
    <motion.div
    animate={{ x: ['0%', '10%', '10%', '0%'],
    y: ['0%', '0%', '10%', '10%'] }}
    transition={{
      duration: 12, // A teljes animáció időtartama
      ease: 'easeInOut',
      loop: Infinity, // Végtelen ciklus
    }}
    className="w-full h-full p-2 bg-flaskb absolute bg-center bg-no-repeat bg-cover">
      <div
        className={`border-0 ${borderColor}  p-0 m-0 w-${sizeW} h-${sizeH}`}
        onClick={onClick}
      >
        <Icon3D path={path} scale={scale} speed={speed} direction={direction} />
      </div>
    </motion.div>
  );
};

const Icon3d = () => {
  const isMobile = useMobileView();
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = isMobile ? mobileIcons : desktopIcons;

  const handleClick = (index) => {
    setSelectedIcon(icons[index]);
  };

  return (
    <div className="relative flex flex-wrap justify-center items-center w-full h-full p-4 border-2 border-red-400">
      {icons.map((icon, index) => (
        <Icon3dComp
          key={index}
          path={icon.path}
          scale={icon.scale}
          speed={icon.speed}
          direction={icon.direction}
          // onClick={() => handleClick(index)}
          borderColor={icon.borderColor}
          sizeW={icon.sizeW}
          sizeH={icon.sizeH}
        />
      ))}
    </div>
  );
};

export default Icon3d;*/

  /*
  useFrame(() => {
    if (!ref.current || speed === 0) return;

    const newPos = {
      x: ref.current.position.x + (moveDirection.x * speed) / 2,
      y: ref.current.position.y + (moveDirection.y * speed) / 2,
      z: ref.current.position.z + (moveDirection.z * speed) / 2,
    };

    if (newPos.x >= 2 || newPos.x <= -2) moveDirection.x = -moveDirection.x;
    if (newPos.y >= 2 || newPos.y <= -2) moveDirection.y = -moveDirection.y;
    if (newPos.z >= 2 || newPos.z <= -2) moveDirection.z = -moveDirection.z;

    ref.current.position.set(newPos.x, newPos.y, newPos.z);
    ref.current.rotation.x += speed;
    ref.current.rotation.y += speed;
    ref.current.rotation.z += speed;
  });*/

//  <GravityPoints/>
//     <GravityGrids/>
//js #FFD928
/*
      {selectedIcon && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2>Icon Information</h2>
            <p>Information about the selected icon.</p>
            <div className="w-64 h-64 border-2">
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1.5} />
                <directionalLight position={[1, 1, 1]} intensity={1} />
                <Model
                  path={selectedIcon.path}
                  scale={selectedIcon.scale}
                  speed={0}
                  direction={selectedIcon.direction}
                />
              </Canvas>
            </div>
            {selectedIcon.path}
            <button onClick={() => setSelectedIcon(null)}>Close</button>
          </div>
        </div>
      )}

*/
