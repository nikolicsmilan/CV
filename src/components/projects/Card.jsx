import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import nasa from "../../assets/nasa_project.JPG";

const Card = ({
  title,
  description,
  weblink,
  gitlink,
  background,
  keyword,
  image,
  stack,
}) => {
  const { t } = useTranslation();
  function getColor(title) {
    switch (title) {
      case "React":
        return "text-sky-400";
      case "Js":
        return "text-yellow-200";
      case "Node":
        return "text-green-400 ";
      case "tailwind":
        return "text-blue-300";
      case "HTML":
        return "text-orange-400 ";
      case "CSS":
        return "text-blue-400 ";
      case "Firebase":
        return "text-amber-400 ";
      default:
        return "text-sky-500"; // Alapértelmezett szín, ha nincs meghatározott címke
    }
  }

  return (
    <div
      className={`text-dark  relative ${background} p-0 pt-0 rounded border-2 space:shadow-2xl  space:border-sky-400 w-80 `}
    >
      <img src={image} className="w-full h-60 rounded" />
      <h1 className="text-lg rounded-full  text-white p-2">{title}</h1>
      <div className="h-36">
        <p className="text-truncate  overflow-hidden text-white text-base p-2">
          {t(`Project.${description}`)}
        </p>
      </div>

      <div className="mt-0 border-0 border-red-400 h-12 p-1">
        <span className="text-3xl font-semibold ">
          {gitlink && (
            <a href={gitlink} target="_blank" rel="noreferrer">
              <FaGithub className="text-purple-400 hover:text-purple-600 top-[245px] right-[50px] absolute" />
            </a>
          )}
          {weblink && (
            <a href={weblink} target="_blank" rel="noreferrer">
              <TbWorldWww
                className={`text-red-400 hover:text-red-600 top-[245px] right-[-40px]  absolute ${
                  gitlink ? "mx-12 " : ""
                }`}
              />
            </a>
          )}
        </span>
        <div className="left-0 absolute flex px-2">
          {stack?.map((item) => (
            <div className={`text-3xl ${getColor(item.name)}`}>{item.icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weblink: PropTypes.string,
  gitlink: PropTypes.string,
  background: PropTypes.string.isRequired,
  keyword: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
/*
    <div className="bottom-12 absolute text-white border-0 border-amber-400 p-1">
          #
          {keyword.map((item, index) => (
            <span key={index} className="text-md  ">
              {item},{" "}
            </span>
          ))}
        </div>
*/
/*

import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import nasa from "../../assets/nasa_project.JPG";


const Card = ({
  title,
  description,
  weblink,
  gitlink,
  background,
  keyword,
  image,
  stack
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`text-dark  relative ${background} p-0 pt-0 rounded border-2  space:border-sky-400 w-80 shadow-2xl`}
    >
      <img src={image} className="w-full h-60 rounded" />
      <h1 className="text-lg rounded-full  text-white p-2">
        {title}
      </h1>
      <div className="h-36">
        <p className="text-truncate  overflow-hidden text-white text-base p-2">
          {t(`Project.${description}`)}
        </p>
      </div>

      <div className="mt-0 border-0 border-red-400 h-12 p-1">
        <span className="text-3xl font-semibold ">
          {gitlink && (
            <a href={gitlink} target="_blank" rel="noreferrer">
              <FaGithub className=" bottom-2 absolute" />
            </a>
          )}
          {weblink && (
            <a href={weblink} target="_blank" rel="noreferrer">
              <TbWorldWww
                className={`bottom-2 absolute ${gitlink ? "mx-12 " : ""}`}
              />
            </a>
          )}
        </span>
        <div className="right-0 absolute">
          {stack?.map((item)=>(
            <div>
{item.name}

            </div>
          ))}
        </div>

        <div className="bottom-12 absolute text-white border-0 border-amber-400 p-1">
          #
          {keyword.map((item, index) => (
            <span key={index} className="text-md  ">
              {item},{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weblink: PropTypes.string,
  gitlink: PropTypes.string,
  background: PropTypes.string.isRequired,
  keyword: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
*/
