import React from "react";
import { sections, socialmedia } from "../../../data/advancedData";

const Navigation = () => {
  return (
    <div className="border-0 border-sky-400  h-16 flex">
      <div
        className=" rounded  my-0 lg:flex 
       justify-center items-center border-0"
      >
        {sections.map((item, index) => (
          <div
            key={index}
            className=" bg-white p-2 m-2 rounded text-primary hover:scale-110  
          transition duration-300 cursor-pointer"
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="lg:flex justify-between items-center ">
        <div
          className="hover:scale-110 cursor-pointer hidden lg:flex 
          justify-center items-center rounded-lg border-accent border-0 
          p-2 w-36 h-10   transition duration-300 "
        >
          Download CV
        </div>
      </div>
      <div className="lg:flex text-2xl justify-between items-center w-44 border-0">
        {socialmedia.map((item, index) => (
          <div
            key={index}
            className="p-0   hover:scale-150 cursor-pointer transition duration-300"
          >
            {item.icon}
          </div>
        ))}
      </div>
      <div className="lg:flex justify-between items-center w-12 px-3 hidde ">
          <div className="hidden xl:block"> xl</div>
          <div className="hidden lg:block xl:hidden"> lg</div>
          <div className="hidden md:block lg:hidden xl:hidden"> md</div>
          <div className="block md:hidden lg:hidden xl:hidden"> sm</div>
        </div>
    </div>
  );
};

export default Navigation;
