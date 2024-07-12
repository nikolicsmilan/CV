import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { PerspectiveCamera } from "three";
import CoordinatesTable from "./CoordinatesTable";
import Modal from "./Modal";
import { desktopIcons, mobileIcons } from "../../data/stack";
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
  // Definiáljuk a kamera változót és hozzuk létre a perspektív kamerát
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // A kamera pozíciójának beállítása (opcionális, aszerint, hogy hol szeretnénk elhelyezni a kamerát)
  camera.position.set(0, 0, 5);
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

    // Clone position to avoid modifying original
    const position = ref.current.position.clone();

    // Projects the 3D position to screen space
    position.project(camera);

    // Calculate screen coordinates
    // const screenX = ((position.x + 1) / 2) * window.innerWidth; // Convert to screen X coordinate
    // const screenY = ((-position.y + 1) / 2) * window.innerHeight; // Convert to screen Y coordinate
    /*
    onPositionUpdate({
    //   x: ref.current.position.x,
    //    y: ref.current.position.y,
     // x: screenX,
     // y: screenY,

      z: ref.current.position.z,
    });*/
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

const Icon3d = () => {
  const isMobile = useMobileView();
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const icons = isMobile ? mobileIcons : desktopIcons;

  const [iconPositions, setIconPositions] = useState(
    icons.map(() => ({ x: 0, y: 0, z: 0 }))
  );

  const updateIconPosition = (index, position) => {
    setIconPositions((prev) => {
      const newPositions = [...prev];
      newPositions[index] = position;
      return newPositions;
    });
  };

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const closestIcon = icons.reduce(
      (closest, icon, index) => {
        const dx = x - iconPositions[index].x;
        const dy = y - iconPositions[index].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: -1, distance: Infinity }
    );

    if (closestIcon.index !== -1) {
      setSelectedIcon(icons[closestIcon.index]);
      setShowModal(true);
    }
  };

  return (
    <div className="relative w-full h-full" onMouseMove={handleMouseMove}>
      <div className="hidden">
        <CoordinatesTable
          icons={icons}
          positions={iconPositions}
          mousePosition={mousePosition}
        />
      </div>

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
      <div className="absolute inset-0 z-10" onClick={handleClick} />
      {showModal && selectedIcon && (
        <Modal icon={selectedIcon} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Icon3d;
