import React, { useRef } from "react";
import AboutmeText from "./components/AboutmeText";
import thinking from "../../assets/Thinking5.png";
import thinking2 from "../../assets/advanced/thinking24.png"
import smilefront from "../../assets/advanced/smile_front.png"
import smilefront2 from "../../assets/advanced/smile5.png"

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
        className="border-0 lg:flex-1 p-1" // Fontos a flex-1
      >
        <img
          className="border-0 lg:w-full lg:h-full lg:object-cover lg:object-position-top" // Hozzáadtuk az object-position-top osztályt
          src={thinking}
          alt="Milan Nikolics - Fullstack Web Developer"
        />
      </div>
    </div>
  );
};

export default Aboutme;
// for
/*
<img
          className="border-0 w-full h-full object-cover  object-position-top" // Hozzáadtuk az object-position-top osztályt
          src={smilefront2}
          alt="Milan Nikolics - Fullstack Web Developer"
        />
*/