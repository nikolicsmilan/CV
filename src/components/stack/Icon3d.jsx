import React, { useRef, useState, useEffect } from "react";
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

export default Icon3d;

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
