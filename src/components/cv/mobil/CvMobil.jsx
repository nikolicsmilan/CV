import React from "react";
import Introduction from "../Introduction";
import Experience from "../Experience";
import Education from "../Education";
import Jobinfo from "../Jobinfo";
import About from "../About";

const CvMobil = ({ contact, profil, stack }) => {
  return (
    <div className="w-full border-0 border-lime-400 bg-white">
      <div className=" border-l-0 lg:border-l-2 border-0 border-primary m-2 mx-10 h-screen ">
        <img
          src={profil}
          alt="Milan"
          className="rounded-full w-40 h-40 mx-auto my-3 border-4 border-primary "
        />
        <Introduction contact={contact} />
        <h2 className="text-center text-2xl font-bold my-3">Stack</h2>
        <div className="flex flex-wrap">
        
          {stack.map((item) => (
            <div key={item.name} className="flex text-xl border-0 w-1/2 items-center justify-center">
              <h3 className="mx-2 text-primary ">{item.icon}</h3>
              <h3 className="text-dark font-bold">{item.name}</h3>
            </div>
          ))}
        </div>

        <Experience />
        <Education />
        <Jobinfo />
        <About />
        <div className=" my-20 text-end m-3  border-0 border-indigo-400 ">
          <span className="my-20 font-brush text-2xl"> Nikolics Milán</span>
        </div>
      </div>
    </div>
  );
};

export default CvMobil;
