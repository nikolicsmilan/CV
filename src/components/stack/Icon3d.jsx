import React, { useRef } from "react";
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
    { path: glbModeljs, scale: [10, 10, 10], speed: 0.01, direction: { x: -3, y: 3, z: 0 } },
    { path: glbModelhtml5, scale: [10, 10, 10], speed: 0.02, direction: { x: -1, y: 2, z: 0 } },
    { path: glbModelcss, scale: [0.1, 0.1, 0.1], speed: 0.003, direction: { x: 10, y: 10, z: 10 }}, 
    { path: glbModelreact, scale: [3, 3, 3], speed: 0.004, direction: { x: -10, y: -1, z: -5 }},  
    { path: glbModeltailwind, scale: [0.3, 0.3, 1], speed: 0.004, direction: { x: -1, y: -4, z: -7 }},
    { path: glbModelnodejs, scale: [0.5, 0.3, 0.5], speed: 0.003, direction: { x: -5, y: 2, z: 7 }},
    { path: glbModelfirebase, scale: [0.2, 0.1, 0.2], speed: 0.003, direction: { x: 2, y: 2, z: 2 }},
    { path: glbModelgithub, scale: [20, 20, 20], speed: 0.003, direction: { x: 2, y: 12, z: 2 }}
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

export default Icon3d;




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
