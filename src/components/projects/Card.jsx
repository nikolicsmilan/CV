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
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`text-dark  relative ${background} p-0 pt-0 rounded-2xl border-2  border-sky-400 w-80 shadow-2xl`}
    >
      <img src={nasa} className="w-full" />
      <h1 className="text-lg rounded-full  text-white p-2">
        {title}
      </h1>
      <div className="h-36">
        <p className="text-truncate  overflow-hidden text-white text-base p-2">
          {t(`Project.${description}`)}
        </p>
      </div>

      <div className="mt-0 border-2 border-red-400 h-12">
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

        <div className="bottom-12 absolute text-white border-0 border-amber-400">
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
