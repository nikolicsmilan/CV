import React from "react";
import { motion } from "framer-motion";

const headingVariants = {
  initial: { x: 0, scale: 1 },
  hover: { x: 5, scale: 1.05 },
};

const transitionConfig = { type: "spring", stiffness: 100 };

const AboutmeText = () => {
  return (
    <div className="lg:p-10 flex flex-col border-0 lg:items-start items-center">
      <motion.h2
        className="text-2xl font-semibold mb-4 lg:text-left text-center"
        variants={headingVariants}
        initial="initial"
        whileHover="hover"
        transition={transitionConfig}
      >
        About Me
      </motion.h2>

      <p className="text-lg text-gray-800 leading-relaxed lg:text-left text-center mb-4">
        A highly motivated and skilled Software Engineer / Full-Stack Developer
        with a proven track record of developing robust and scalable web
        applications using the MERN stack.
      </p>
      <p className="text-lg text-gray-800 leading-relaxed lg:text-left text-center mb-6">
        Proficient in designing and implementing microservice architectures,
        cloud-based deployments, and ensuring application security. Passionate
        about backend development and DevOps practices, eager to contribute to
        innovative projects.
      </p>

      <motion.h3
        className="text-xl font-semibold mb-4 lg:text-left text-center"
        variants={headingVariants}
        initial="initial"
        whileHover="hover"
        transition={transitionConfig}
      >
        Key Skills & Experience
      </motion.h3>

      <ul className="lg:list-disc pl-5 mb-6 text-lg text-gray-800 leading-relaxed lg:text-left text-center">
        <li>MERN stack (MongoDB, Express.js, React, Node.js) expertise.</li>
        <li>
          Microservice Architecture: Designing and implementing microservices.
        </li>
        <li>RESTful API Design & Development.</li>
        <li>NoSQL & SQL Databases: MongoDB, Mongoose, PostgreSQL.</li>
        <li>
          Frontend: React, Next.js, React Native, TypeScript, Redux Toolkit,
          Tailwind CSS, Bootstrap, Sass.
        </li>
        <li>Cloud & DevOps: AWS, Firebase, Terraform.</li>
        <li>Version Control: Git, GitHub.</li>
        <li>Testing: Unit and integration testing.</li>
        <li>Debugging: Efficient troubleshooting and optimization.</li>
        <li>
          Security: Authentication, Authorization, JWT, Secure API Development.
        </li>
        <li>Performance Optimization: Efficient code, caching, Redis.</li>
        <li>Server & Deployment: Docker, CI/CD, SSH, Terraform.</li>
      </ul>

      <motion.h3
        className="text-xl font-semibold  mb-4 lg:text-left text-center"
        variants={headingVariants}
        initial="initial"
        whileHover="hover"
        transition={transitionConfig}
      >
        Technical Stack
      </motion.h3>

      <ul className="lg:list-disc pl-5 text-lg text-gray-800 leading-relaxed flex flex-col gap-2 lg:text-left text-center">
        <li>
          Frontend: React, Next.js, React Native, TypeScript, JavaScript (ES6+),
          HTML5, CSS3, Redux Toolkit, Axios, Tailwind CSS, Bootstrap, Sass.
        </li>
        <li>
          Backend: Node.js, Express.js, MongoDB, Mongoose, PostgreSQL, JWT,
          CORS, dotenv, Winston, AWS, Firebase, Redis.
        </li>
        <li>
          DevOps & Tools: Docker, CI/CD, Terraform, SSH, Postman, ESLint,
          Prettier.
        </li>
      </ul>
    </div>
  );
};

export default AboutmeText;
