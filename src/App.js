import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import { MyGeneralContext } from "./context/GeneralContext";
import useOrientationLock from "./hooks/use-orientation";
import { useTranslation } from "react-i18next";
import "./App.css";
import LazyRoute from "./components/navigation/LazyRoute"; // Import the LazyRoute component

// Lazy load the page components
const Home = React.lazy(() => import("./pages/Home"));
const VideoIntro = React.lazy(() => import("./pages/VideoIntro"));
const Stack = React.lazy(() => import("./pages/Stack"));
const Projects = React.lazy(() => import("./pages/Projects"));
const CV = React.lazy(() => import("./pages/CV"));
const Roadmap = React.lazy(() => import("./pages/Roadmap"));
const NotFound = React.lazy(() => import("./pages/NotFound")); // Lazy load the custom 404 page

function App() {
  const { style } = MyGeneralContext();
  const isLandscape = useOrientationLock();
  const { t, i18n } = useTranslation();

  return (
    <>
      {isLandscape && (
        <div className={`${style} landscape-warning h-screen w-screen text-primary fixed z-50 bg-white flex justify-center items-center`}>
          <div className="text-primary">
            <p className="text-2xl text-primary">{t(`pleaseturn`)}</p>
          </div>
        </div>
      )}
      <div className={`w-full flex font-sans text-base ${style} border-0 border-red-400 text-primary`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LazyRoute component={Home} />} />
            <Route path="/intro" element={<LazyRoute component={VideoIntro} />} />
            <Route path="/stack" element={<LazyRoute component={Stack} />} />
            <Route path="/projects" element={<LazyRoute component={Projects} />} />
            <Route path="/cv" element={<LazyRoute component={CV} />} />
            <Route path="/roadmap" element={<LazyRoute component={Roadmap} />} />
            <Route path="*" element={<LazyRoute component={NotFound} />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

