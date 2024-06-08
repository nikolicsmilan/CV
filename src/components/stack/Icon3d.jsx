import React, { useRef } from "react";
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

export default Icon3d;


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
