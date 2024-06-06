import React from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import Aside from "./Aside";
import { AiOutlineMenu } from "react-icons/ai";
import { MyGeneralContext } from "../../context/GeneralContext";

const Layout = () => {
  const { activeMenu, setActiveMenu, size } = MyGeneralContext();
  return (
    <div className="border-0 border-orange-400  w-full   ">
      {size.width < 667 || size.width < size.height || 500 > size.height ? (
        <MobileLayout
          Aside={Aside}
          AiOutlineMenu={AiOutlineMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          size={size}
        />
      ) : (
        <DesktopLayout Aside={Aside} />
      )}
    </div>
  );
};

export default Layout;

/*  {size.width < 667 ? (
        <MobileLayout
          Aside={Aside}
          AiOutlineMenu={AiOutlineMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      ) : (
        <DesktopLayout Aside={Aside} />
      )} */
//vagy magassab vagy a maggaság 500 alatt van vagy a szélesség 667 alatt
