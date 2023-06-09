import React from "react";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Education from "./Education";
import Jobinfo from "./Jobinfo";
import About from "./About";

const MainCv = ({ contact }) => {
  return (
    <div className="w-full border-0 border-lime-400">
      <div className=" border-l-2 lg:border-l-2 border-0 border-primary m-2 mx-10 h-screen">
        <Introduction contact={contact} />
        <Experience />
        <Education />
        <Jobinfo />
        <About />
        <div className=" my-20 text-end m-3  border-0 border-indigo-400 ">
          <span className="my-20 font-brush text-2xl">Nikolics Milán</span>
        </div>
      </div>
    </div>
  );
};

export default MainCv;
