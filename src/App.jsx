/*import React from "react";

function App() {
  return <div className={``}>Legyen hozé</div>;
}

export default App;*/

import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import { MyGeneralContext } from "./context/GeneralContext";
import "./App.css";
import AdvancedLayout from "./components/navigation/AdvancedLayout";
// Lazy load the page components
const AdvancedHome = React.lazy(() =>
  import("./pages/advancedHome/AdvancedHome")
);

function App() {
  // Get the style value from the MyGeneralContext
  const { style } = MyGeneralContext();

  return (
    // Top-level container for the entire application
    <div
      className={`font-sans bg-no-repeat bg-center bg-cover w-full 
         flex text-base ${style} border-0 border-red-400 text-primary`}
    >
    
      <Routes>
      
        <Route path="/" element={<AdvancedLayout />}>
        
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdvancedHome />
              </Suspense>
            }
          />{" "}
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
/*

<Route path="/intro" element={<Suspense fallback={<div>Loading...</div>}> <VideoIntro /> </Suspense>} /> 
<Route path="/projects" element={<Suspense fallback={<div>Loading...</div>}> <Projects /> </Suspense>} /> 
<Route path="/cv" element={<Suspense fallback={<div>Loading...</div>}> <CV /> </Suspense>} /> 
<Route path="/roadmap" element={<Suspense fallback={<div>Loading...</div>}> <Roadmap /> </Suspense>} /> 
<Route path="/back" element={<Suspense fallback={<div>Loading...</div>}> <BackgroundVideo /> </Suspense>} /> 
<Route path="*" element={<Suspense fallback={<div>Loading...</div>}> <NotFound /> </Suspense>} /> */

/*

const VideoIntro = React.lazy(() => import("./pages/VideoIntro"));
const Stack = React.lazy(() => import("./pages/Stack"));
const Projects = React.lazy(() => import("./pages/Projects"));
const CV = React.lazy(() => import("./pages/CV"));
const Info = React.lazy(() => import("./pages/Info"));
const Roadmap = React.lazy(() => import("./pages/Roadmap"));
const BackgroundVideo = React.lazy(() => import("./pages/BackgroundVideo"));
const NotFound = React.lazy(() => import("./pages/NotFound")); 
*/

/*
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import { MyGeneralContext } from "./context/GeneralContext";
import "./App.css";
import AdvancedLayout from "./components/navigation/AdvancedLayout";
// Lazy load the page components
const AdvancedHome = React.lazy(() =>
  import("./pages/advancedHome/AdvancedHome")
);

function App() {
  // Get the style value from the MyGeneralContext
  const { style } = MyGeneralContext();

  return (
    // Top-level container for the entire application
    <div
      className={`font-sans bg-no-repeat bg-center bg-cover w-full 
         flex text-base ${style} border-0 border-red-400 text-primary`}
    >
    
      <Routes>
      
        <Route path="/" element={<AdvancedLayout />}>
        
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdvancedHome />
              </Suspense>
            }
          />{" "}
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
*/
