import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Card = ({
  title,
  description,
  weblink,
  gitlink,
  background,
  keyword,
}) => {
  return (
    <div
      key="dsadas"
      className={`text-dark  relative ${background} md:w-40 p-4 pt-9 rounded-2xl border-0 border-sky-400 lg:w-1/5`}
    >
      <h1 className="text-2xl opacity-0.9 rounded-full p-1 hover:drop-shadow-xl text-white">
        {title}
      </h1>

      <p className="text-truncate h-52 overflow-hidden text-white ">
        {description}
      </p>
      <div className="mt-0 ">
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

        <div className="bottom-12 absolute text-white">
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

