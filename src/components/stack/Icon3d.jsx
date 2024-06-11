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
import glbModelgithub from "../../assets/glb/github.glb";
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

  const desktopIcons = [
    { path: glbModeljs, scale: [10, 10, 10], speed: 0.01, direction: { x: -3, y: 3, z: 2 } },
    { path: glbModelhtml5, scale: [10, 10, 10], speed: 0.02, direction: { x: -1, y: 2, z: 0 } },
    { path: glbModelcss, scale: [0.1, 0.1, 0.1], speed: 0.003, direction: { x: 10, y: 10, z: 10 } },
    { path: glbModelreact, scale: [4, 4, 4], speed: 0.004, direction: { x: -10, y: -1, z: -5 } },
    { path: glbModeltailwind, scale: [0.3, 0.3, 1], speed: 0.004, direction: { x: -1, y: -4, z: -7 } },
    { path: glbModelnodejs, scale: [0.4, 0.2, 0.4], speed: 0.003, direction: { x: -5, y: 2, z: 7 } },
    { path: glbModelfirebase, scale: [0.2, 0.1, 0.2], speed: 0.003, direction: { x: 2, y: 2, z: 2 } },
    { path: glbModelgithub2, scale: [2, 2, 2], speed: 0.003, direction: { x: 5, y: 12, z: 2 } },
    { path: glbModelbootstrap, scale: [6, 6, 6], speed: 0.003, direction: { x: 2, y: 12, z: 2 } },
    { path: glbModelexpress, scale: [50, 50, 50], speed: 0.003, direction: { x: -2, y: 12, z: 2 } },
    { path: glbModelsql, scale: [0.3, 0.3, 0.3], speed: 0.003, direction: { x: 2, y: 0, z: 2 } },
    { path: glbModelMongo, scale: [8, 8, 8], speed: 0.01, direction: { x: 0, y: 2, z: 0 } },
    { path: glbModelnpm, scale: [80, 80, 80], speed: 0.005, direction: { x: -6, y: 2, z: 2 } }
  ];

  const mobileIcons = [
   { path: glbModelhtml5, scale: [5, 5, 5], speed: 0.001, direction: { x: -1, y: 2, z: 0 } },
    { path: glbModelcss, scale: [0.05, 0.05, 0.05], speed: 0.001, direction: { x: 5, y: 5, z: 5 } },
    { path: glbModeljs, scale: [5, 5, 5], speed: 0.02, direction: { x: -1, y: 0, z: 1 } },   
    { path: glbModelreact, scale: [3, 3, 3], speed: 0.003, direction: { x: -3, y: -0.5, z: -1.5 } },
    { path: glbModeltailwind, scale: [0.2, 0.2, 0.2], speed: 0.003, direction: { x: -0.5, y: -2, z: -3.5 } },
    { path: glbModelnodejs, scale: [0.15, 0.1, 0.15], speed: 0.0025, direction: { x: -2.0, y: 1, z: 1.5 } },
    { path: glbModelfirebase, scale: [0.1, 0.02, 0.1], speed: 0.01, direction: { x: 1, y: 1, z: 1 } },
   /* { path: glbModelgithub2, scale: [0.5, 0.5, 0.5], speed: 0.0015, direction: { x: 2.5, y: 6, z: 1 } },
    { path: glbModelbootstrap, scale: [3, 3, 3], speed: 0.0015, direction: { x: 1, y: 2, z: 1 } },
    { path: glbModelexpress, scale: [25, 25, 25], speed: 0.0015, direction: { x: -1, y: 3, z: 1 } },
    { path: glbModelsql, scale: [0.15, 0.15, 0.15], speed: 0.0015, direction: { x: 1, y: 0, z: 1 } },
    { path: glbModelMongo, scale: [4, 4, 4], speed: 0.005, direction: { x: 0, y: 1, z: 0 } },
    { path: glbModelnpm, scale: [40, 40, 40], speed: 0.0025, direction: { x: -1, y: 1, z: 1 } }*/
  ];
  

  const icons = isMobile ? mobileIcons : desktopIcons;

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center border-0 border-orange-400 p-0 rounded-lg">
      {icons.map((icon, index) => (
        <div key={index} className="flex absolute w-full h-full border-purple-400 border-0">
          <Icon3dComp path={icon.path} scale={icon.scale} speed={icon.speed} direction={icon.direction} />
        </div>
      ))}
    </div>
  );
};
export default Icon3d;
/*
function Model({ path, scale, color, speed, direction }) {
  const { scene } = useGLTF(path);
  const ref = useRef();
  const maxPosition = 2; // Maximális pozíció
  const minPosition = -2; // Minimális pozíció
  let moveDirection = direction; // Kezdeti mozgási irány

  useFrame(() => {
    // Az objektum pozíciójának módosítása az aktuális irány és sebesség alapján
    ref.current.position.x += moveDirection.x * speed;
    ref.current.position.y += moveDirection.y * speed;
    ref.current.position.z += moveDirection.z * speed;

    // Ha az objektum elérte a maximális pozíciót, megfordítjuk az irányt
    if (ref.current.position.x >= maxPosition || ref.current.position.x <= minPosition) {
      moveDirection.x = -moveDirection.x;
    }
    if (ref.current.position.y >= maxPosition || ref.current.position.y <= minPosition) {
      moveDirection.y = -moveDirection.y;
    }
    if (ref.current.position.z >= maxPosition || ref.current.position.z <= minPosition) {
      moveDirection.z = -moveDirection.z;
    }

    // Forgatás
    ref.current.rotation.x += speed 
    ref.current.rotation.y += speed 
    ref.current.rotation.z += speed 
  });

  return <primitive object={scene} scale={scale} ref={ref} />;
}

function Icon3D({ path, scale, speed, direction }) {
  return (
    <Canvas >
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
  const icons = [
    { path: glbModeljs, scale: [10, 10, 10], speed: 0.01, direction: { x: -3, y: 3, z: 2 } },
    { path: glbModelhtml5, scale: [10, 10, 10], speed: 0.02, direction: { x: -1, y: 2, z: 0 } },
    { path: glbModelcss, scale: [0.1, 0.1, 0.1], speed: 0.003, direction: { x: 10, y: 10, z: 10 }}, 
    { path: glbModelreact, scale: [4, 4, 4], speed: 0.004, direction: { x: -10, y: -1, z: -5 }},  
    { path: glbModeltailwind, scale: [0.3, 0.3, 1], speed: 0.004, direction: { x: -1, y: -4, z: -7 }},
    { path: glbModelnodejs, scale: [0.4, 0.2, 0.4], speed: 0.003, direction: { x: -5, y: 2, z: 7 }},
    { path: glbModelfirebase, scale: [0.2, 0.1, 0.2], speed: 0.003, direction: { x: 2, y: 2, z: 2 }},
    { path: glbModelgithub2, scale: [2, 2, 2], speed: 0.003, direction: { x: 5, y: 12, z: 2 }},
    { path: glbModelbootstrap, scale: [6, 6, 6], speed: 0.003, direction: { x: 2, y: 12, z: 2 }},
    { path: glbModelexpress, scale: [50, 50, 50], speed: 0.003, direction: { x: -2, y: 12, z: 2 }},
    { path: glbModelsql, scale: [0.3, 0.3, 0.3], speed: 0.003, direction: { x: 2, y: 0, z: 2 }},
    { path: glbModelMongo, scale: [8, 8, 8], speed: 0.01, direction: { x: 0, y: 2, z: 0 }},
    { path: glbModelnpm, scale: [80, 80, 80], speed: 0.005, direction: { x: -6, y: 2, z: 2 }}
  ];

  return (
    <div className="flex flex-wrap w-full h-full justify-center 
    items-center border-0 border-orange-400 p-0 rounded-lg">
      {icons.map((icon, index) => (
        <div key={index} className="flex absolute  w-full h-full border-purple-400 border-0">
          <Icon3dComp path={icon.path} scale={icon.scale} speed={icon.speed} direction={icon.direction} />
        </div>
      ))}
    </div>
  );
};

export default Icon3d;*/
//mongo #499D4A




/*import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import glbModeljs from "../../assets/glb/js.glb";
import glbModelhtml5 from "../../assets/glb/html5.glb";
import glbModelcss from "../../assets/glb/css.glb";

function Model({ path, scale, color }) {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame(({ clock }) => {
    // Az ikonok különböző sebességgel és irányokban forognak
    ref.current.rotation.x += 0.001; // x tengely körüli forgatás
    ref.current.rotation.x += 0.002; // y tengely körüli forgatás
    ref.current.rotation.x += 0.003; // z tengely körüli forgatás
  });

  return <primitive object={scene} scale={scale} ref={ref} />;
}

function Icon3D({ path, scale }) {
  return (
    <Canvas style={{ width: "1000px", height: "1000px" }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <Model path={path} scale={scale} />
    </Canvas>
  );
}

const Icon3dComp = ({ path, scale }) => {
  return (
    <div className="">
      <Icon3D path={path} scale={scale} />
    </div>
  );
};

const Icon3d = () => {
  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center border-2 border-orange-400 p-0 rounded-lg">
      <div className="absolute">
        <Icon3dComp path={glbModeljs} scale={[10, 10, 10]} />
      </div>
      <div className="absolute">
        <Icon3dComp path={glbModelhtml5} scale={[10, 10, 10]} />
      </div>
      <div className="absolute">
        <Icon3dComp path={glbModelcss} scale={[0.1, 0.1, 0.1]} />
      </div>
    </div>
  );
};

export default Icon3d;*/


/*

   <div className=" flex">
        <Icon3dComp
          path={glbModelreact}
          scale={[7, 7, 7]}
          color="red"
          label="React"
        />
      </div>

      <div className="flex justify-center  items-center border-2">
        <div>
        <Icon3dComp
          path={glbModelnode}
          scale={[1.5, 1.5, 1.5]}
         // color="green"
          label="Node"
        />
        </div>
      
      </div>
      <div className="h-64 flex">
        <Icon3dComp
          path={glbModeltailwind}
          scale={[1.5, 1.5, 1.5]}
         // color="blue"
          label="Tailwind"
        />
      </div>
      <div className="h-64 flex">
        <Icon3dComp
          path={glbModelhtml5}
          scale={[5, 5, 5]}
          //color="orange"
          label="HTML5"
        />
      </div>

*/

/*import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import glbModelnode from "../../assets/glb/node.glb";
import glbModeltailwind from "../../assets/glb/tailwind.glb";
import glbModelreact from "../../assets/glb/react.glb";
import glbModelhtml5 from "../../assets/glb/html5.glb";

function Model({ path, scale }) {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01; // Lassú forgatás
  });

  return <primitive object={scene} scale={scale} ref={ref} />;
}

function Icon3Dfunc({ path, scale }) {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model path={path} scale={scale} />
    </Canvas>
  );
}

const Icon3dComp = ({ path, scale, label }) => {
  return (
    <div className="p-0  rounded-lg ">
      <div className="w-full h-64">
        <Icon3Dfunc path={path} scale={scale} />
      </div>
    </div>
  );
};

const Icon3d = () => {
  return (
    <div className="flex justify-between border-0 p-0 rounded-lg ">
      <div className=" h-64 flex">
        <Icon3dComp
          path={glbModelreact}
          scale={[7, 7, 7]}
          label="Model 1"
          className=""
        />
      </div>
      <div className=" h-64 flex">
        <Icon3dComp
          path={glbModelnode}
          scale={[1, 1, 1]}
          label="Node"
          className=""
        />
      </div>
      <div className="h-64 flex">
        <Icon3dComp
          path={glbModeltailwind}
          scale={[1.5, 1.5, 1.5]}
          label="Tailwind"
          className=""
        />
      </div>
      <div className=" h-64 flex">
        <Icon3dComp
          path={glbModelhtml5}
          scale={[5, 5, 5]}
          label="Model 2"
          className=""
        />
      </div>
    </div>
  );
};

export default Icon3d;*/

/*
function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={0.5} />;
}*/
