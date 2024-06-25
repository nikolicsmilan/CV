import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TypingAnimation from "./TypingAnimation"

const Heading = ({ style, setActiveMenu }) => {
  const { t } = useTranslation();
  return (
    <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-12    bg-blackOverlay">
      <div className="p-5">
        <NavLink to={`/intro`} onClick={() => setActiveMenu(false)}>
          <h1
            className={`  text-center text-2xl lg:text-4xl ${
              style === "city" ? " mycity" : "myspace"
            }`}
          >
           <TypingAnimation customcontent={t("myname")} late={1000}/>
          </h1>
          <h2
            className={` text-center text-xl lg:text-3xl  border-0 ${
              style === "city" ? "mycity" : "myspace"
            }`}
          >
        <TypingAnimation customcontent={t("myjob")}late={2000}/>
          </h2>
          <h3
            className={` text-center text-sm lg:text-xl my-5 ${
              style === "city" ? "mycity" : "myspace"
            }`}
          >
            <TypingAnimation customcontent={t("mainquestion")} late={3000}/>   
          </h3> 
         <h3 className="text-3xl text-primary text-center">  <TypingAnimation customcontent={t("clickhere")} late={5000} />   </h3>
       
        </NavLink>
      </div>
    </div>
  );
};

export default Heading;


