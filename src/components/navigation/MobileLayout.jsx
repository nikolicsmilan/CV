import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MobileLayout = ({
  Aside,
  AiOutlineMenu,
  activeMenu,
  setActiveMenu,
  size,
}) => {
  useEffect(() => {
    if (activeMenu) {
      window.scrollTo(0, 0);
    }
  }, [activeMenu]);

  return (
    <>
      <div className="relative w-full border-0   border-lime-600">
        {activeMenu && (
          <div className="absolute inset-0 bg-asidebg  border-0 border-red-400 z-20">
            <Aside />
          </div>
        )}

        <div
          className="fixed left-4 top-4 border-0 h-78"
          style={{ zIndex: "50" }}
        >
          {!activeMenu ? (
            <AiOutlineMenu
              title="Menu"
              className="text-primary text-3xl city:bg-primary city:text-white"
              onClick={() => setActiveMenu((prevState) => !prevState)}
            />
          ) : (
            <FaArrowLeft
              className="text-primary text-2xl "
              onClick={() => setActiveMenu((prevState) => !prevState)}
            />
          )}
        </div>
        <main className="relative bg-secondary border-0 border-sky-400 ">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MobileLayout;
