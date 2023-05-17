import React from "react";

import { BsStack } from "react-icons/bs";

import {
  FaReact,
  FaPhp,
  FaBootstrap,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaVideo,
  FaCode,
  FaBookOpen,
  FaGit,
  FaNpm,
  FaHome,
  FaInfoCircle
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiTypescript,

} from "react-icons/si";

export const stylesData = {
  city: { color: "white", backgroundColor: "grey" },
  space: { color: "#28A4F1", backgroundColor: "black" },
};
//"rgb(44,57,59)"

export const skillsIcon = [
  {
    title: "React",
    icon: <FaReact />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    level: "Advanced",
  },
  {
    title: "Js",
    icon: <FaJs />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    level: "Advanced",
  },
  {
    title: "HTML",
    icon: <FaHtml5 />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    level: "Advanced",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    level: "Advanced",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    level: "Advanced",
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    level: "Advanced",
  },
  {
    title: "Typescript",
    icon: <SiTypescript />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    level: "Basic",
  },
  {
    title: "Git",
    icon: <FaGit />,
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    level: "Basic",
  },

  {
    title: "PHP",
    icon: <FaPhp />,
    iconColor: "purple",
    iconBg: "rgb(255, 244, 229)",
    level: "Basic",
  },
  {
    title: "Laravel",
    icon: <FaLaravel />,
    iconColor: "purple",
    iconBg: "rgb(255, 244, 229)",
    level: "Basic",
  },
  {
    title: "Npm",
    icon: <FaNpm />,
    iconColor: "purple",
    iconBg: "rgb(255, 244, 229)",
    level: "Basic",
  },
  {
    title: "NodeJs",
    icon: <FaNodeJs />,
    iconColor: "purple",
    iconBg: "rgb(255, 244, 229)",
    level: "Basic",
  },
  {
    title: "MySQL",
    icon: <SiMysql />,
    iconColor: "purple",
    iconBg: "rgb(255, 244, 229)",
    level: "Basic",
  },
  {
    title: "Mongodb",
    icon: <SiMongodb />,
    iconColor: "purple",
    iconBg: "rgb(255, 244, 229)",
    level: "Basic",
  },
  {
    title: "Firebase",
    icon: <SiFirebase />,
    iconColor: "purple",
    iconBg: "rgb(255, 244, 229)",
    level: "Basic",
  },
];

export const links = [
  {
    title: "HR",
    links: [
      {
        name: "Home",
        icon: <FaHome />,
        path: "/",
      },
      {
        name: "Intro",
        icon: <FaVideo />,
        path: "/Intro",
      },
      {
        name: "Stack",
        icon: <BsStack />,
        path: "/Stack",
      },
      {
        name: "Projects",
        icon: <FaCode />,
        path: "/Projects",
      },
      {
        name: "CV",
        icon: <FaBookOpen />,
        path: "/Cv",
      },
    
    ],
  },
];
