import React from "react";
import { sections, socialmedia } from "../../../data/advancedData";
import { FaBars } from 'react-icons/fa';
import SideBar from "./SideBar";

const Navigation = ({isSidebarOpen, setIsSidebarOpen}) => {
  
  return (
    <>
      <div className="border-0 border-sky-400 h-16 flex items-center justify-between">
        {/* Hamburger Menu (Mobile) */}
        <div className={` lg:hidden  ${isSidebarOpen ? 'hidden' : 'flex'}`}>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        {/* Sidebar (Mobile) */}
        {isSidebarOpen && (
          <SideBar setIsSidebarOpen={setIsSidebarOpen} />
        )}

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex justify-center items-center">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white p-2 m-2 rounded text-primary hover:scale-110 transition duration-300 cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Download CV (Desktop) */}
        <div className="hidden lg:flex items-center">
          <div className="hover:scale-110 cursor-pointer rounded-lg border-accent border-0 p-2 w-36 h-10 transition duration-300">
            Download CV
          </div>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden lg:flex items-center  text-2xl justify-between w-44 border-0">
          {socialmedia.map((item, index) => (
            <div
              key={index}
              className=" hover:scale-150 cursor-pointer transition duration-300 "
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
