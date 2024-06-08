import React from "react";
import { skillsIcon } from "../data/aside";
import { useTranslation } from "react-i18next";
import Icon3d from "../components/stack/Icon3d";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div
      className="overflow-container py-0 bg-primar space:bg-black h-screen
     border-0 border-sky-400 relative z-10"
    >
    
      <Icon3d />
    </div>
  );
};

export default Skills;
/*  <h2 className="text-primary">Ez egy szöveg</h2>
      <h2 className="bg-primary">Ez egy szöveg </h2>
      <h2 className="text-primaryb">Ez egy szöveg</h2>
      <h2 className="bg-primaryb">Ez egy szöveg </h2>
      <h2 className="city:font-bold space:text-red-400">Ez egy szöveg </h2> */

/*
            <div className="flex m-3 flex-wrap justify-center gap-12 items-center border-0">
        {skillsIcon.map((skill) => (
          <div
            key={skill.title}
            className="bg-stone-300  text-dark w-36 md:w-40
       p-4 pt-9 rounded-2xl border-0 border-red-400"
          >
            <button
              type="button"
              style={{ color: skill.iconColor, backgroundColor: skill.iconBg }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              {skill.icon}
            </button>{" "}
            <p className="mt-2">{t(`Stackem.${skill.level}`)}</p>
            <p className="mt-1">
              <span className="text-lg font-semibold">{skill.title}</span>
              <span className={`text-sm text-${skill.pcColor} ml-2 border-0`}>
              
                </span>
                </p>
              </div>
            ))}
          </div>
      */
