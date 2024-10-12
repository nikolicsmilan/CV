import React from 'react'
import { motion } from "framer-motion"; // Importáljuk a Framer Motion-t
const Navigation = ({navigation}) => {
  return (
   <div>
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }} // Felfelé emelés hover-re
      transition={{ type: "spring", stiffness: 300 }}
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
  )
}

export default Navigation