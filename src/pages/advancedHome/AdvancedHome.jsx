import React from "react";
import { connection, navigation, network } from "../../data/advancedData";
import { FaArrowUp } from "react-icons/fa";
import HexagonalIconList from "./components/HexagonalIconList";
import AdvancedHeader from "./components/AdvancedHeader";
import thinking from "../../assets/advanced/thinking24.png";
import smile from "../../assets/advanced/smile_front2.png";
const AdvancedHome = () => {
  return (
    <div className="shadow-2xl flex flex-col w-full h-full text-text text-base border-0 lg:border-0">
      {/* Header */}
      <div className="bg-primary  w-full h-16 flex justify-between items-center px-5 border-0 lg:border-0 border-red-400">
        <AdvancedHeader icons={connection} />
      </div>

      {/* Body */}
      <div className="w-full h-full ">
        <div className="bg-primary  flex flex-col lg:flex-row lg:h-full border-0 border-lime-400 lg:bg-thinkingbg2 bg-no-repeat bg-center bg-cover">
          {/* First page */}
          <div className=" w-full  flex flex-col lg:flex-row lg:items-start p-0 border-0  border-purple-400 shadow-none lg:shadow-none">
            <div className="lg:w-1/3 lg:p-10 flex flex-col lg:justify-between border-0 items-center lg:items-start">
              <h1 className="text-3xl xl:text-4xl font-semibold text-white mb-6 text-center lg:text-start">
                Fullstack Web Developer from Hungary
              </h1>
              <p className="text-lg xl:text-xl text-text mb-2  leading-relaxed text-center lg:text-start p-2">
                Hello, I'm Nikolics Milan. A passionate web developer
                specializing in creating dynamic and responsive web
                applications. Let’s collaborate to build something great!
              </p>

              <a
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
            <div className="w-full flex justify-center lg:hidden ">
            
              <div className="flex justify-center border-t-0 border-accent rounded-ful w-96 h-96 ">
              <HexagonalIconList items={network} centerItem={network[0]} />
                <img
                  src={thinking}
                  className="w-full h-full object-cover rounded-ful z-10"
                />
              </div>
            </div>
            <div className="border-0 bg-white lg:bg-primary">
              <div className="hidden w-full lg:w-1/2 lg:flex justify-center lg:justify-start p-5 border-0 my-10 lg:my-0">
                <HexagonalIconList items={network} centerItem={network[0]} />
              </div>
            </div>
          </div>

          {/*Desktop quick menu */}

          {/*scroll button */}
        </div>
        xxxxxxxxxxxxxxxxxxxxxx
      </div>
      <div className="fixed bottom-4 right-4 w-14 h-14 flex justify-center items-center z-30">
        <FaArrowUp className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300" />
      </div>
    </div>
  );
};

export default AdvancedHome;
/* <div className=" h-full lg:flex flex-col justify-evenly items-end w-14 ml-auto my-1">
            <FaArrowUp className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300" />
          </div> */
