import React from "react";
import thinking from "../../assets/advanced/thinking24.png";
import HexagonalIconList from "./components/HexagonalIconList";
const Hero = ({ navigation, hexagon,cvButtonRef }) => {
  return (
    <div className="bg-primary  flex flex-col lg:flex-row lg:h-full border-0 border-lime-400 lg:bg-thinkingbg2 bg-no-repeat bg-center bg-cover">
      {/* First page */}
      <div className=" w-full  flex flex-col lg:flex-row lg:items-start p-0 border-0  border-purple-400 shadow-none lg:shadow-none">
        <div className="lg:w-1/3 lg:p-10 flex flex-col lg:justify-between border-0 items-center lg:items-start">
          <h1 className="text-3xl xl:text-4xl font-semibold text-white mb-6 text-center lg:text-start">
            Fullstack Web Developer from Hungary
          </h1>
          <p className="text-lg xl:text-xl text-text mb-2  leading-relaxed text-center lg:text-start p-2">
            Hello, I'm Nikolics Milan. A passionate web developer specializing
            in creating dynamic and responsive web applications. Let’s
            collaborate to build something great!
          </p>

          <a
          ref={cvButtonRef}
            href="#contact"
            className="w-60 m-5 px-6 py-3 bg-accent
         text-white font-bold rounded-lg shadow-md hover:bg-primary hover:border-2 border-accent transition duration-300 text-center"
          >
            Let's Work Together
          </a>
        </div>
     
        <div className="lg:w-1/3 hidden lg:flex flex-col justify-end py-10 border-red-400 border-0 h-full">
          <div className="bg-background rounded w-96 h-16 my-10 flex text-2xl justify-center items-center">
            {navigation.map((item, index) => (
              <div
                key={index}
                className="m-5 bg-white rounded-full p-2 text-primary hover:bg-accent hover:text-white transition duration-300 cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center lg:hidden border-0 ">
          <div className="flex justify-center border-t-0 border-accent rounded-ful w-full h-full border-0 ">
            <HexagonalIconList hexagon={hexagon} centerItem={hexagon[0]} />
            <img
              src={thinking}
              className="w-full h-full object-cover rounded-ful z-10"
            />
          </div>
        </div>
        <div className="border-0 bg-white lg:bg-primary">
          <div className="hidden w-full lg:w-1/2 lg:flex justify-center lg:justify-start p-5 border-0 my-10 lg:my-0">
            <HexagonalIconList hexagon={hexagon} centerItem={hexagon[0]} />
          </div>
        </div>
      </div>

      {/*Desktop quick menu */}

      {/*scroll button */}
    </div>
  );
};

export default Hero;
