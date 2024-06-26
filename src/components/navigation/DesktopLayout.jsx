import React from "react";
import { Outlet } from "react-router-dom";
import { MyGeneralContext } from "../../context/GeneralContext";

const DesktopLayout = ({ Aside, activeMenu }) => {
  const { size } = MyGeneralContext();
  /*to save cv only
  0. write hidde to hidden the two buttons in Cv component
  1. here write hidde to hidden on Aside component
  2. click ctrl + shift + i 
  3. set margo custom and set all margo to 0
  4.click print
  5. Rewrite the download name english and download name hungarian in pdfUtils.js component
  6. Rewrite the dochu and docen constant to apropirate in Cv component
  7. Build and deploy*/
  return (
    <>
      <div className="flex w-full border-0 border-lime-400">
        <div className="  flex  w-1/6  bg-asidebg  hidde">
          <Aside /> {}
        </div>

        <div
          className="w-full  bg-secondary border-0 border-orange-400 overflow-y-auto "
          style={{ maxHeight: `${size.height}px` }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DesktopLayout;
/*
alternative body with fix height to laptop
 <div className="w-full  bg-secondary border-0 border-orange-400 overflow-y-auto max-h-[700px]">
          <Outlet />
        </div>
*/
