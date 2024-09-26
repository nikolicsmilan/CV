import React,{useState} from "react";
import { motion } from "framer-motion"; // Importáljuk a Framer Motion-t
import thinking from "../../assets/advanced/thinking24.png";
import HexagonalIconList from "./components/HexagonalIconList";

const Hero = ({ navigation, hexagon, cvButtonRef, scrolMenuRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Definiáljuk az animáció variánsokat
  const textVariants = {
    initial: { x: 0, scale: 1 },
    hover: { x: 20, scale: 1.1 }, // Jobbra mozdulnak és növekednek
  };

  // Az átmenetek beállítása
  const transitionSettings = {
    type: "ease-in-out", // Folyamatosabb átmenet
    duration: 0.6, // Lassítjuk az animáció sebességét
  };

  return (
    <div className="bg-primary flex flex-col lg:flex-row lg:h-full border-0 border-lime-400 lg:bg-thinkingbg2 bg-no-repeat bg-center bg-cover">
      {/* First page */}
      <motion.div
        className="lg:w-1/3 lg:p-10 flex flex-col  border-0 border-orange-400 items-center lg:items-start"
        initial="initial"
        whileHover="hover" // Hover az egész div-re
        variants={{
          hover: { transition: { staggerChildren: 0.1 } }, // Az elemek egymás után mozognak
        }}
      >
        <motion.h1
          className="text-3xl xl:text-4xl font-semibold text-white mb-6 text-center lg:text-start"
          variants={textVariants} // Az animáció variánsokat használjuk
          transition={{ type: "spring", stiffness: 100,}}
        >
          Fullstack Web Developer from Hungary
        </motion.h1>

        <motion.p
          className="text-lg xl:text-xl text-text mb-2 leading-relaxed text-center lg:text-start p-2"
          variants={textVariants} // Az animáció variánsokat használjuk
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          Hello, I'm Nikolics Milan. A passionate web developer specializing in
          creating dynamic and responsive web applications. Let’s collaborate to
          build something great!
        </motion.p>

        <motion.a
          ref={cvButtonRef}
          href="#contact"
          className="w-60 m-5 px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-md hover:bg-primary hover:border-2 border-accent transition text-center"
          variants={textVariants} // Az animáció variánsokat használjuk
         // transition={{ duration: 0.2, ease: "easeInOut" }} // Lassabb és egyenletesebb átmenet
          transition={{ duration: 0.1, stiffness: 100, damping: 100 }}
        >
          Let's Work Together
        </motion.a>
      </motion.div>

      <div className="lg:flex-1 hidden lg:flex flex-col justify-end py-10 border-red-400 border-0 h-full">
        <motion.div
          whileHover={{ y: -2,scale: 1.1 }} // Felfelé emelés hover-re
          transition={{ type: "spring", stiffness: 300 }}
          ref={scrolMenuRef}
          className="bg-background rounded w-96 h-16 my-10 flex text-2xl justify-center items-center border-0"
        >
          {navigation.map((item, index) => (
            <div
              key={index}
              className="m-5 bg-white rounded-full p-2 text-primary hover:bg-accent hover:text-white transition duration-300 cursor-pointer"
            >
              {item.icon}
            </div>
          ))}
        </motion.div>
      </div>

      <div className=" flex justify-center lg:hidden border-0">
        <div className="flex justify-center border-t-0 border-accent rounded-full w-full h-full border-0">
          <HexagonalIconList hexagon={hexagon} centerItem={hexagon[0]} />
          <img
            src={thinking}
            className="w-full h-full object-cover rounded-full z-10"
          />
        </div>
      </div>

      <motion.div
        className="border-0 border-red-800 w-96 bg-white lg:bg-primary"
        onHoverStart={() => setIsHovered(true)} // Hover elkezdődött
        onHoverEnd={() => setIsHovered(false)} // Hover vége
      >
        <div className="hidden w-96 lg:w-8 lg:flex justify-center items-center lg:justify-start p-5 border-0 border-orange-400 lg:my-10">
          <HexagonalIconList hexagon={hexagon} centerItem={hexagon[0]} isHovered={isHovered} />
        </div>
      </motion.div>


    </div>
  );
};

export default Hero;

/*
      <div className="border-0 w-96 bg-white lg:bg-primary">
        <div className="hidden w-full lg:w-1/2 lg:flex justify-center lg:justify-start p-5 border-0 my-10 lg:my-0">
          <HexagonalIconList hexagon={hexagon} centerItem={hexagon[0]} />
        </div>
      </div>
*/



/*import React from "react";
import thinking from "../../assets/advanced/thinking24.png";
import HexagonalIconList from "./components/HexagonalIconList";
const Hero = ({ navigation, hexagon, cvButtonRef, scrolMenuRef }) => {
  return (
    <div className="bg-primary  flex flex-col lg:flex-row lg:h-full border-0 border-lime-400 lg:bg-thinkingbg2 bg-no-repeat bg-center bg-cover">

      <div className=" w-full  flex flex-col lg:flex-row lg:items-start p-0 border-0  border-purple-400 shadow-none lg:shadow-none">
        <div className="lg:w-1/3 lg:p-10 flex flex-col lg:justify-between border-2 items-center lg:items-start">
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
          <div
            ref={scrolMenuRef}
            className="bg-background rounded w-96 h-16 my-10 flex text-2xl justify-center items-center"
          >
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

      
    </div>
  );
};

export default Hero;*/
