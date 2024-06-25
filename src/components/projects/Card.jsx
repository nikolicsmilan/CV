import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import usecolor from "../../hooks/use-color";

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
  const {getColor}= usecolor()


  return (
    <div
      className={`text-dark  relative ${background} p-0 pt-0 rounded border-0 space:shadow-2xl  w-80 md:w-96 `}
    >
      <img src={image} className="w-full h-60 md:h-80 rounded" />
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
              <FaGithub className="text-purple-400 hover:text-purple-600 top-[245px] md:top-[325px] right-[50px] absolute" />
            </a>
          )}
          {weblink && (
            <a href={weblink} target="_blank" rel="noreferrer">
              <TbWorldWww
                className={`text-red-400 hover:text-red-600 top-[245px] md:top-[325px] right-[-40px]  absolute ${
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
