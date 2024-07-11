// LazyRoute.js
import React, { Suspense } from "react";

const LazyRoute = ({ component: Component }) => {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold mb-4">Loading...</div>
        <div className="w-1/12 h-1 bg-gray-300 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-black animate-loading-bar"></div>
        </div>
      </div>
    }>
      <Component />
    </Suspense>
  );
};

export default LazyRoute;

/*
const LazyRoute = ({ component: Component }) => {
    return (
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="text-xl font-semibold mb-4">Loading...</div>
          <div className="w-1/12 h-1 bg-gray-300 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full bg-black animate-loading-bar"></div>
          </div>
        </div>
      }>
        <Component />
      </Suspense>
    );
  };*/
/*
const LazyRoute = ({ component: Component }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};*/


