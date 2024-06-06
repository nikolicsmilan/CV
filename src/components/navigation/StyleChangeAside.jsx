import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import zumzum from "../../assets/zumzum4.png";
import { useTranslation } from "react-i18next";
import { NavLink, useMatch } from "react-router-dom";
import { FaCity,FaSpaceShuttle  } from "react-icons/fa";



const StyleChangeAside = ({ style, setStyle, setActiveMenu, size }) => {
  const { t } = useTranslation();

  return (
    <div className="mx-3 mt-2 uppercase border-0 text-dark">
      <div className="flex flex-col">
        <div className="flex flex-col">
       
          
        </div>
      </div>

      <div className="flex flex-row border-0 justify-start px-10 lg:px-5">
      <NavLink to="/">
            <img className="w-8 border-0 mx-2" alt="zumzum" src={zumzum} />
          </NavLink>
        <div
          className={`mt-2 m-2 border-0 flex items-center cursor-pointer text-primary ${style==='city' ?'border-2 border-primary p-1':''}`}
          onClick={() => setStyle("city")}
        >
          <FaCity size={24} />
         
        </div>
        <div
          className={`mt-2 m-2 border-0 flex items-center cursor-pointer text-primary  ${style==='space' ?'border-2 border-primary p-1':''}`}
          onClick={() => setStyle("space")}
        >
          <FaSpaceShuttle size={24} />
         
        </div>
      </div>
    </div>
  );
};

export default StyleChangeAside;












