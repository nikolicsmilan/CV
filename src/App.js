import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoIntro from "./pages/VideoIntro";
import Skills from "./pages/Stack";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import Layout from "./components/navigation/Layout";
import { MyGeneralContext } from "./context/GeneralContext";
import "./App.css";

function App() {
  // Get the style value from the MyGeneralContext
  const { style } = MyGeneralContext();

  return (
    // Top-level container for the entire application
    <div className={`w-full flex font-sans text-base ${style} border-0 border-red-400`}>
      {/* Set up the routing for different pages */}
      <Routes>
        {/* Parent route with the layout component */}
        <Route path="/" element={<Layout />}>
          {/* Child routes for individual pages */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/intro" element={<VideoIntro />} /> {/* Video introduction page */}
          <Route path="/stack" element={<Skills />} /> {/* Skills page */}
          <Route path="/projects" element={<Projects />} /> {/* Projects page */}
          <Route path="/cv" element={<CV />} /> {/* CV page */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
