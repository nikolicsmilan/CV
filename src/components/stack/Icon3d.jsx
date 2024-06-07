import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import glbModel from '../../assets/glb/node.glb';

function Model({path}) {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01; // Lassú forgatás
  });

  return <primitive object={scene} scale={1} ref={ref} />; // Megnövelt méret
}

function Icon3Dfunc({ path }) {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model path={path} />
    </Canvas>
  );
}

const Icon3dComp = ({ path, label }) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-full h-64">
            <Icon3Dfunc path={path} />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{label}</h3>
        </div>
      </header>
    </div>
  );
}

const Icon3d = ({ path, label }) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-full h-64">
          <Icon3dComp path={glbModel} />
          </div>
          <h3 className="mt-4 text-lg font-semibold">React</h3>
        </div>
      </header>
    </div>
  );
}

export default Icon3d;

/*
function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={0.5} />;
}*/