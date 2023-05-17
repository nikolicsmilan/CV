import React from "react";
import { skillsIcon } from "../data/aside";
const Skills = () => {
  return (
    <div className="overflow-container py-2">
      <h1 className="text-center text-4xl my-0 font-bold text-info">Stack</h1>
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
            <p>{skill.level}</p>
            <p className="mt-3">
              <span className="text-lg font-semibold">{skill.title}</span>
              <span className={`text-sm text-${skill.pcColor} ml-2 border-0`}>
                {/*later use it */}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
