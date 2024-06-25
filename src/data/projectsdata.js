import calendar from "../assets/calendar_project.jpg";
import nasa from "../assets/nasa_project.JPG";
import cv from "../assets/identitycard10.PNG";
import sm from "../assets/sm_project.JPG";
import {
  FaReact,
  FaBootstrap,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGit,
  FaNpm,
  //  FaInfoCircle,
  // FaMapMarkerAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
export const projects = [
  {
    title: "Nasa interface",
    description: "description4",
    textColor: "",
    backgroundColor: "bg-gradient",
    keyword: ["React", "context", "tailwind", "firebase"],
    gitlink: "https://github.com/nikolicsmilan/nasa",
    weblink: "https://nasa-ab2f1.web.app/",
    image: nasa,
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Js", icon: <FaJs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "NodeJs", icon: <FaNodeJs /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Fullstack Calendar App",
    description: "description1",
    textColor: "",
    backgroundColor: "bg-gradient",
    keyword: ["React", "context", "module css", "node"],
    gitlink:
      "https://github.com/nikolicsmilan/Full-Stack-Callendar/tree/master",
    weblink: "",
    image: calendar,
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Js", icon: <FaJs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "NodeJs", icon: <FaNodeJs /> },
     
    ],
  },
  {
    title: "CV",
    description: "description2",
    textColor: "",
    backgroundColor: "bg-gradient",
    keyword: ["React", "context", "tailwind, firebase"],
    gitlink: "https://github.com/nikolicsmilan/CV",
    weblink: "https://nikolicsmilan-cv.web.app/",
    image: cv,
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Js", icon: <FaJs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },

  {
    title: "Webshop furniture",
    description: "description3",
    textColor: "",
    backgroundColor: "bg-gradient",
    keyword: ["React", "context", "tailwind", "firebase"],
    gitlink: "https://github.com/nikolicsmilan/SM",
    weblink: "",
    image: sm,
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Js", icon: <FaJs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "NodeJs", icon: <FaNodeJs /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
];

/*
{
    title: "Image viewer",
    description:
      "description3",
    textColor: "",
    backgroundColor: "bg-gradient",
    keyword: ["React", "context", "tailwind", "firebase"],
    gitlink: "https://github.com/nikolicsmilan/SM",
    weblink: "https://smbutordesign.hu/",
  },
*/
