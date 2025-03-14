/*import React from 'react';

const AboutmeText = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I'm Milan Nikolics, a passionate and experienced Medior Fullstack Web Developer with a strong focus on creating efficient, scalable, and user-friendly web applications.
      </p>
      <p className="mb-4">
        I have a solid understanding of the MERN stack (MongoDB, Express.js, React, Node.js) and I'm comfortable working with various other technologies and tools, such as:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>Git</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>
      <p className="mb-4">
        I'm always eager to learn new things and I'm passionate about writing clean, maintainable, and well-tested code.
      </p>
      <p>
        I'm looking for a challenging and rewarding remote opportunity where I can contribute to a team and make a real impact.
      </p>
    </div>
  );
};

export default AboutmeText;*/
import React from 'react';
import { motion } from "framer-motion";

const AboutmeText = () => {
  const headingVariants = {
    initial: { x: 0, scale: 1 },
    hover: { x: 10, scale: 1.05 },
  };

  return (
    <div
      className="lg:p-10 flex flex-col border-0 items-start"
    >
      <motion.h2
        className="text-2xl font-semibold mb-4 text-left"
        variants={headingVariants}
        whileHover="hover"
        transition={{ type: "spring", stiffness: 100 }}
      >
        About Me
      </motion.h2>

      <p
        className="text-lg text-gray-800 mb-3 leading-relaxed text-left"
      >
        A highly motivated and skilled Software Engineer / Full-Stack Developer with a proven track record of developing robust and scalable web applications using the MERN stack.
      </p>

      <p
        className="text-lg text-gray-800 mb-3 leading-relaxed text-left"
      >
        Proficient in designing and implementing microservice architectures, managing cloud technologies, and ensuring application security. Eager to leverage expertise in backend development and DevOps practices to contribute to innovative and impactful projects.
      </p>

      <motion.h3
        className="text-xl font-semibold mb-3 text-left"
        variants={headingVariants}
        whileHover="hover"
        transition={{ type: "spring", stiffness: 100 }}
      >
        Key Skills & Experience
      </motion.h3>

      <ul  className="list-disc pl-5 mb-3 text-lg text-gray-800 leading-relaxed text-left">
        <li>Full-Stack Web Development:  MERN stack (MongoDB, Express.js, React, Node.js) expertise.</li>
        <li>Microservice Architecture: Designing and implementing microservices.</li>
        <li>RESTful API Design:  Designing and developing RESTful APIs.</li>
        <li>Databases:  NoSQL databases (e.g., MongoDB).</li>
        <li>Frontend Development:  React and TypeScript for user-friendly UIs.</li> {/*TypeScript hozzáadva*/}
        <li>Version Control:  Git.</li>
        <li>Testing:  Unit and integration tests.</li>
        <li>Debugging:  Efficiently debug and fix code.</li>
   
      </ul>

      <motion.h3
        className="text-xl font-semibold mb-3 text-left"
        variants={headingVariants}
        whileHover="hover"
        transition={{ type: "spring", stiffness: 100 }}
      >
        Technical Stack
      </motion.h3>

      <ul  className="list-disc pl-5 mb-3 text-lg text-gray-800 leading-relaxed text-left">
        <li>Frontend: React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Redux, Axios</li> {/*TypeScript hozzáadva*/}
        <li>Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, CORS, dotenv, Winston, AWS</li> {/*AWS hozzáadva*/}
        <li>Other: Git, npm, ESLint, Prettier, Postman, Docker, CI/CD</li>
      </ul>

      <p
        className="text-lg text-gray-800 mt-4 mb-3 leading-relaxed text-left"  //nagyobb margó a listához képest
      >
        Seeking a challenging remote Fullstack Web Developer position to contribute to a dynamic team.
      </p>

    </div>
  );
};

export default AboutmeText;