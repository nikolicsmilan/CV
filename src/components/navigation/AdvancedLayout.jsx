import React from "react";
import { Outlet } from "react-router-dom";
const AdvancedLayout = () => {
  return (
    <div className="border-0 border-sky-400 w-full h-screen">

      <Outlet />
    </div>
  );
};

export default AdvancedLayout;
