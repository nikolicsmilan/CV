import React from 'react'
import { motion } from "framer-motion";
const HeroText = () => {

    const textVariants = {
        initial: { x: 0, scale: 1 },
        hover: { x: 20, scale: 1.01 }, // Jobbra mozdulnak és növekednek
      };

      
  return (
    <>

<motion.div
        className="lg:w-1/3 lg:p-10 flex flex-col border-0 border-orange-400 items-center lg:items-start"
        initial="initial"
        whileHover="hover" // Hover az egész div-re
        variants={{
          hover: { transition: { staggerChildren: 0.1 } }, // Az elemek egymás után mozognak
        }}
      >
        <motion.h1
          className="text-3xl xl:text-4xl font-semibold text-white mb-6 text-center lg:text-start"
          variants={textVariants} // Az animáció variánsokat használjuk
          transition={{ type: "spring", stiffness: 100 }}
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
          href="#contact"
          className="w-60 m-5 px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-md hover:bg-primary hover:border-2 border-accent transition text-center"
          variants={textVariants} // Az animáció variánsokat használjuk
          transition={{ duration: 0.1, stiffness: 100, damping: 100 }}
        >
          Let's Work Together
        </motion.a>
      </motion.div>

    </>
  )
}

export default HeroText