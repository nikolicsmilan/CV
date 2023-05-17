import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import zumzum from "../../assets/zumzum4.png";

const StyleChangeAside = ({ style, setStyle, setActiveMenu, size }) => {
  return (
    <div className="mx-3 mt-2 uppercase border-0 text-dark">
      <div className="flex items-center">
        {size.width < 667 ? (
          <FaArrowLeft
            className="mx-2"
            onClick={() => setActiveMenu((prevState) => !prevState)}
          />
        ) : (
          ""
        )}

        <img className="w-8 border-0 mx-2" alt="zumzum" src={zumzum} />
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
            City
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
            Space
          </label>
        </div>
      </div>
    </div>
  );
};

export default StyleChangeAside;
