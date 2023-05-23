import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import zumzum from "../../assets/zumzum4.png";
import { useTranslation } from "react-i18next";
import { NavLink, useMatch } from "react-router-dom";

const StyleChangeAside = ({ style, setStyle, setActiveMenu, size }) => {
  const { t } = useTranslation();
  return (
    <div className="mx-3 mt-2 uppercase border-0 text-dark">
      <div className="flex  flex-col">
        <div className=" flex  flex-col">
          <NavLink to="/">
            <img className="w-8 border-0 mx-2" alt="zumzum" src={zumzum} />
          </NavLink>

          <p className="normal-case mx-2 "> {t("stylequestion")}</p>
        </div>
      </div>

      <div className=" flex flex-row border-0">
        <div className="mt-2 m-2 border-0 flex items-center">
          <input
            type="radio"
            id="city"
            name="theme"
            value="city"
            className="cursor-pointer "
            checked={style === "city"}
            onChange={() => {
              setStyle("city");
            }}
          />
          <label
            htmlFor="city"
            className="ml-2 text-md cursor-pointer capitalize "
          >
            {t("City")}
          </label>
        </div>
        <div className="flex items-center mt-2 m-2">
          <input
            type="radio"
            id="space"
            name="theme"
            value="space"
            className="cursor-pointer"
            checked={style === "space"}
            onChange={() => {
              setStyle("space");
            }}
          />
          <label
            htmlFor="space"
            className="ml-2 text-md cursor-pointer capitalize "
          >
            {t("Space")}
          </label>
        </div>
      </div>
    </div>
  );
};

export default StyleChangeAside;
