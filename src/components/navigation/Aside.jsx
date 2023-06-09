import React from "react";
import StyleChangeAside from "./StyleChangeAside";
import { NavLink, useMatch } from "react-router-dom";
import { links } from "../../data/aside";
import LanguageChangeAisde from "./LanguageChangeAside";
import { MyGeneralContext } from "../../context/GeneralContext";
import { useTranslation } from 'react-i18next';

const Aside = () => {
  const { style, setStyle, setActiveMenu, size } = MyGeneralContext();


  const MyNavLink = ({ link }) => {
    const { t } = useTranslation();
    const path = link?.path || "/";
    const match = useMatch(path);
    const isActive = (match) => {
      return match ? true : false;
    };

    return (
      <NavLink
        to={path}
        key={link.name}
        onClick={(prevState) => {
          setActiveMenu(!prevState);
        }}
        className={`flex flex-row my-1 items-center border-0 w-40 p-2 ${
          isActive(match) ? "border-0 bg-info p-2 rounded-2xl w-full" : ""
        }`}
      >
        <span className="capitalize border-0 w-86 text-2xl mx-4">
          {link.icon}
        </span>
        <span className="capitalize border-0 "> {t(link.name)}</span>
      </NavLink>
    );
  };
  return (
    <div className={`mt-0 border-0 border-red-400 w-full flex flex-col h-screen ${style==='city'?'bg-primary':""} `}>
      <StyleChangeAside
        style={style}
        setStyle={setStyle}
        setActiveMenu={setActiveMenu}
        size={size}
      />
      <div
        className="fixed right-4 top-4 border-0 h-78 "
        style={{ zIndex: "50" }}
      >
        <LanguageChangeAisde />
      </div>

      <div className=" w-full flex flex-col ">
        {links.map((item) => (
          <div key={item?.title} className=" w-full flex flex-col ">
            {item.links.map((link) => (
              <MyNavLink key={link.name} link={link} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
