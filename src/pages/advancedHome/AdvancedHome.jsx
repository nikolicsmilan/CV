import React from "react";
import { connection, navigation, network } from "../../data/advancedData";
import { FaArrowUp } from "react-icons/fa";
import HexagonalIconList from "./HexagonalIconList";

const AdvancedHome = () => {
  return (
    <div className="flex flex-col w-full h-full bg-primary text-text text-base">
      {/* Header */}
      <div className="w-full h-16 flex justify-between items-center px-5">
        <div className="uppercase text-accent text-2xl">expert</div>

        <div className="hidden md:flex justify-between items-center w-96 h-16 pl-10">
          <div className="flex text-xl justify-between w-44">
            {connection.map((item, index) => (
              <div
                key={index}
                className="p-0 hover:text-accent transition duration-300 cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="w-12 mx-5 ">
          <div className="hidden   xl:block"> xl</div>
            <div className="hidden  lg:block xl:hidden"> lg</div>
            <div className="hidden md:block lg:hidden xl:hidden"> md</div>
            <div className=" block md:hidden lg:hidden xl:hidden"> sm</div>
          </div>
          <div className="flex justify-center items-center rounded-full border-accent border-2 p-2 w-36 h-10 hover:text-white hover:bg-accent transition duration-300 cursor-pointer">
            <div>Download CV</div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="w-full h-full bg-thinkingbg1 bg-no-repeat bg-right-bottom bg-cover">
        <div className="flex flex-col md:flex-row h-full">
          {/* Tartalom */}
          <div className="w-full md:w-1/3 flex flex-col items-start p-10">
            <h1 className="text-3xl xl:text-4xl font-semibold text-white mb-6 ">
              Fullstack Web Developer from Hungary
            </h1>
            <p className="text-lg xl:text-xl text-text mb-2 text-start leading-relaxed">
              Hello, I'm Nikolics Milan. A passionate web developer specializing
              in creating dynamic and responsive web applications. Let’s
              collaborate to build something great!
            </p>
            <a
              href="#contact"
              className="m-5 px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            >
              Let's Work Together
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-start p-5">
            <HexagonalIconList items={network} centerItem={network[0]} />
          </div>

          <div className="hidden md:flex flex-col justify-end py-10">
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

          <div className="h-full flex flex-col justify-evenly items-end w-14 ml-auto">
            <FaArrowUp className="text-text hover:text-white hover:bg-accent cursor-pointer bg-primary border-2 rounded-full border-accent text-4xl p-2 transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedHome;
