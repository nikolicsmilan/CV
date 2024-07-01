import React from "react";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Education from "./Education";
import Jobinfo from "./Jobinfo";
import About from "./About";

const MainCv = ({ contact }) => {
  return (
    <div className="  border-0 border-lime-400  bg-white space:bg-dark">
      <div className=" border-l-0 lg:border-l-0 border-0 border-primary 
      m-0 mx-2 h-screen">
        <Introduction contact={contact} />
        <div className="mx-2">
        <Experience />
        <Education />
        <Jobinfo />
        <About />
        </div>
   
        <div className=" my-[-10px] mr-[10px]  text-end m-0  border-0 border-indigo-400 ">
          <span className="my-0 font-brush text-2xl">Nikolics Milán</span>
        </div>
      </div>
    </div>
  );
};

export default MainCv;
