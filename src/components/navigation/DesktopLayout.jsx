import React from "react";
import { Outlet } from "react-router-dom";
import { MyGeneralContext } from "../../context/GeneralContext";

const DesktopLayout = ({ Aside, activeMenu }) => {

  const {size}=MyGeneralContext()
  return (
    <>
      <div className="flex w-full border-0 border-lime-400">
        <div className="  flex  w-1/6  bg-asidebg  ">
          <Aside /> {}
        </div>

        <div className="w-full  bg-secondary border-0 border-orange-400 overflow-y-auto " style={{ maxHeight: `${size.height}px` }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DesktopLayout;
/*
 <div className="w-full  bg-secondary border-0 border-orange-400 overflow-y-auto max-h-[700px]">
          <Outlet />
        </div>
*/