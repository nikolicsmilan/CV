import React from "react";
import Contact from "./Contact";

const Introduction = ({ contact }) => {
  return (
    <div className="border-0 border-orange-400 m-3">
      <div>
        <h1 className="sm:text-center lg:text-start text-3xl">Milán Nikolics</h1>
        <h2 className="text-center lg:text-start text-xl lg:text-2xl text-primary font-bold">
          Frontend Web Developer
        </h2>
        <p className="text-center lg:text-start">with some backend knowledge</p>
      </div>
   <Contact contact={contact}/>
    </div>
  );
};

export default Introduction;


