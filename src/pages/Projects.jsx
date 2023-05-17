import React from "react";
import Card from "../components/projects/Card";
import { projects } from "../data/projectsdata";

const Projects = () => {
  return (
    <>
      <h1 className="text-center text-4xl my-0 font-bold text-info">
        Projects
      </h1>
      <p className="text-center text-base my-2 font-bold text-info">
        On this page you can get to know some of my projects that I have made
        over the years.
      </p>
      <div className="flex justify-center gap-4 mx-5 my-0 border-0 py-2 border-stone-400 flex-col lg:flex-row">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            weblink={project.weblink}
            gitlink={project.gitlink}
            background={project.backgroundColor}
            keyword={project.keyword}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;


