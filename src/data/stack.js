import React from "react";

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
import { AiFillGithub, AiFillMail, AiFillMobile } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

export const stack = [
  { name: "React", icon: <FaReact /> },
  { name: "Js", icon: <FaJs /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "NodeJs", icon: <FaNodeJs /> },
  { name: "npm", icon: <FaNpm /> },
  { name: "git", icon: <FaGit /> },
  { name: "firebase", icon: <SiFirebase /> },
];

export const language = [
  { name: "Hungarian", level: "Native" },
  { name: "English", level: "Limited working proficiency" },
];

export const contact = [
  { name: "nikolicsmilan77@gmail.com", icon: <AiFillMail /> },
  { name: "+36 20 475 24 60", icon: <AiFillMobile /> },  
  { name: "github", icon: <AiFillGithub /> },
  { name: "webpage", icon: <TbWorldWww /> },
];
//{ name: "Hungary", icon: <FaMapMarkerAlt /> },