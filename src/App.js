import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import { MyGeneralContext } from "./context/GeneralContext";
import useOrientationLock from "./hooks/use-orientation";
import { useTranslation } from "react-i18next";
import "./App.css";

// Lazy load the page components
const Home = React.lazy(() => import("./pages/Home"));
const VideoIntro = React.lazy(() => import("./pages/VideoIntro"));
const Stack = React.lazy(() => import("./pages/Stack"));
const Projects = React.lazy(() => import("./pages/Projects"));
const CV = React.lazy(() => import("./pages/CV"));
const Roadmap = React.lazy(() => import("./pages/Roadmap"));
const NotFound = React.lazy(() => import("./pages/NotFound")); // Lazy load the custom 404 page

function App() {
  // Get the style value from the MyGeneralContext
  const { style } = MyGeneralContext();
  const isLandscape = useOrientationLock();
  const { t, i18n } = useTranslation();
  return (
    // Top-level container for the entire application
    <>
      {isLandscape && (
        <div
          className={`${style} landscape-warning 
        h-screen w-screen text-primary fixed z-50 bg-white flex
         justify-center items-center`}
        >
          <div className="text-primary">
            {" "}
            <p className="text-2xl text-primary"> {t(`pleaseturn`)}</p>
          </div>
        </div>
      )}
      <div
        className={`w-full  flex font-sans text-base ${style} border-0 border-red-400 text-primary`}
      >
        {/* Set up the routing for different pages */}

        <Routes>
          {/* Parent route with the layout component */}
          <Route path="/" element={<Layout />}>
            {/* Child routes for individual pages */}
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <Home />{" "}
                </Suspense>
              }
            />{" "}
            {/* Home page */}
            <Route
              path="/intro"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <VideoIntro />{" "}
                </Suspense>
              }
            />{" "}
            {/* Video introduction page */}
            <Route
              path="/stack"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <Stack />{" "}
                </Suspense>
              }
            />{" "}
            {/* Skills page */}
            <Route
              path="/projects"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <Projects />{" "}
                </Suspense>
              }
            />{" "}
            {/* Projects page */}
            <Route
              path="/cv"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <CV />{" "}
                </Suspense>
              }
            />{" "}
            {/* CV page */}
            <Route
              path="/roadmap"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <Roadmap />{" "}
                </Suspense>
              }
            />{" "}
          
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <NotFound />{" "}
                </Suspense>
              }
            />{" "}
            {/* Catch-all route for lazy loaded 404 page */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
