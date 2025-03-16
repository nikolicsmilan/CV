import React, { useRef } from "react";
import AboutmeText from "./components/AboutmeText";
import thinking from "../../assets/Thinking5.png";

const Aboutme = () => {
  const aboutmeTextRef = useRef(null);
  const imgRef = useRef(null);

  return (
    <div
      className="py-5 bg-gray-100 flex flex-col lg:flex-row-reverse
       border-0
     border-lime-400 bg-no-repeat bg-right bg-cover max-w-7xl mx-auto lg:px-4"
    >
      <div ref={aboutmeTextRef} className="mx-5 lg:my-0 lg:w-1/2">
        <AboutmeText />
      </div>
      <div
        ref={imgRef}
        className="shadow-2xl overflow-hidden lg:flex-1 p-100 rounded-full flex items-center justify-center m-5 lg:m-0" // Fontos a flex-1
      >
        <img
          className="border-0 lg:w-full lg:h-full lg:object-cover lg:object-[-60px] " // Hozzáadtuk az object-position-top osztályt
          src={thinking}
          alt="Milan Nikolics - Fullstack Web Developer"
        />
      </div>
    </div>
  );
};

export default Aboutme;
