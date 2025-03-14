import React from "react";
import { socialmedia, sections } from "../../../data/advancedData";
const SideBar = ({ setIsSidebarOpen }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-4/5 bg-gray-100 shadow-md z-50 ">
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 font-bold"
      >
        X
      </button>
      <div className="p-4">
        {sections.map((item, index) => (
          <div
            key={index}
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            {item.name}
          </div>
        ))}
        <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
          Download CV
        </a>
        <div className="flex">
          {socialmedia.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-2xl px-4 py-2  text-gray-700 hover:bg-gray-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
