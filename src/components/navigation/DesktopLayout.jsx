import React from "react";
import { Outlet } from "react-router-dom";
import { MyGeneralContext } from "../../context/GeneralContext";

const DesktopLayout = ({ Aside, activeMenu }) => {
  const { size } = MyGeneralContext();
  /*to save cv only needed: DesktopLayout.jsx,Cv.jsx,pdfUtils.js, index.js use Edge browser
  1. write hidde to hidden the two buttons in Cv component
  2. here write hidde to hidden on Aside component
  3. click ctrl + shift + i 
  4. click print
  5.set margo custom and set all margo to 0
  6. Rewrite the download name english and download name hungarian in pdfUtils.js component
  7. Rewrite the dochu and docen constant to apropirate in Cv component
  8. Change langugae in this mode index.js  enTranslation >>  huTranslation
  9. Rewrite back all
  10. Build and deploy*/
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
