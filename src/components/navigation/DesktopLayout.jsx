import React from "react";
import { Outlet } from "react-router-dom";

const DesktopLayout = ({ Aside, activeMenu }) => {
  return (
    <>
      <div className="flex w-full border-0 border-lime-400">
        <div className=" flex  w-1/6  bg-asidebg  ">
          <Aside />
        </div>

        <div className="w-full  bg-secondary border-0 border-orange-400 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DesktopLayout;
//<div className=" flex w-1/6 bg-asidebg  ">
