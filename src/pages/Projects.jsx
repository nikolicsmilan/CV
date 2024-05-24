import React from "react";
import Card from "../components/projects/Card";
import { projects } from "../data/projectsdata";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-center text-4xl my-0 font-bold text-info">
        {t("Project.pagename")}
      </h1>

      <p className="text-center text-base my-2
       font-bold text-info">
        {t("Project.maindescription")}
      </p>
      <div className="flex flex-wrap 
      justify-center items-center lg:items-start gap-4 mx-0 p-0
       my-0 border-0 py-2 border-stone-400 flex-col lg:flex-row">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            weblink={project.weblink}
            gitlink={project.gitlink}
            background={project.backgroundColor}
            keyword={project.keyword}
            image={project.image}
            stack={project.stack}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

/*  <h2>
        Mindegyiket megcsinálom fullra: Lesz 4 ütős projektem:
        Nasa,webshop,CV,Calendar
      </h2>

      <h3>
        Átt kell írnom a css t tailwindra a régieknél a felesleges részeket ki
        kell szedni kommenetekkel el kell látni +élővé kell tenni mindegyiket
        calendarnál vagy találok egy ingyenes node szerevert vagy átviszem
        firebasere ami a roszabik ötlet de inkább mitsem hogy működésképtelenül
        itt hagyam
      </h3> */
