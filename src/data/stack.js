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
  FaGithub,
  //  FaInfoCircle,
  // FaMapMarkerAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { AiFillGithub, AiFillMail, AiFillMobile } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

import glbModeljs from "../assets/glb/jsok.glb";
import glbModelhtml5 from "../assets/glb/html5ok.glb";
import glbModelcss from "../assets/glb/cssok.glb";
import glbModelreact from "../assets/glb/reactok.glb";
import glbModeltailwind from "../assets/glb/tailwindok.glb";
import glbModelnodejs from "../assets/glb/nodejsok.glb";
import glbModelfirebase from "../assets/glb/firebaseok.glb";
import glbModelbootstrap from "../assets/glb/bootstrapok.glb";

export const stack = [
  { name: "React", icon: <FaReact /> },
  { name: "Js", icon: <FaJs /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "NodeJs", icon: <FaNodeJs /> },
  { name: "npm", icon: <FaNpm /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Firebase", icon: <SiFirebase /> },
];

export const language = [
  { name: "Hungarian", level: "Native" },
  { name: "English", level: "Limited working proficiency" },
];

export const contact = [
  {
    name: "nikolicsmilan.hu",
    icon: <TbWorldWww />,
    url: "https://nikolicsmilan.hu",
  },
  {
    name: " github.com/nikolicsmilan",
    icon: <AiFillGithub />,
    url: "https://github.com/nikolicsmilan",
  },
  { name: "nikolicsmilan77@gmail.com", icon: <AiFillMail /> },
  { name: "+36 20 475 24 60", icon: <AiFillMobile /> },
];

export const desktopIcons = [
  {
    path: glbModelreact,
    scale: [10, 10, 10],
    speed: 0.01,
    direction: { x: 0, y: 0, z: 0 },
    borderColor: "border-yellow-500",
    sizeW:"64",
    sizeH:"64"
  },
 /* {
    path: glbModeljs,
    scale: [10, 10, 10],
    speed: 0.01,
    direction: { x: -3, y: 3, z: 2 },
    borderColor: "border-red-500",
  },
  {
    path: glbModelhtml5,
    scale: [150, 150, 150],
    speed: 0.02,
    direction: { x: -1, y: 2, z: 0 },
    borderColor: "border-green-500",
  },
  {
    path: glbModelcss,
    scale: [0.3, 0.3, 0.3],
    speed: 0.003,
    direction: { x: 10, y: 10, z: 10 },
    borderColor: "border-blue-500",
  },
 
  {
    path: glbModeltailwind,
    scale: [500, 500, 500],
    speed: 0.014,
    direction: { x: -1, y: -2, z: -1 },
    borderColor: "border-purple-500",
  },
  {
    path: glbModelnodejs,
    scale: [1, 0.2, 1],
    speed: 0.005,
    direction: { x: 4, y: 2, z: 7 },
    borderColor: "border-pink-500",
  },
  {
    path: glbModelfirebase,
    scale: [0.4, 0.2, 0.4],
    speed: 0.003,
    direction: { x: 2, y: 2, z: 2 },
    borderColor: "border-indigo-500",
  },
    { path: glbModelbootstrap, scale: [7, 7, 7], speed: 0.003, direction: { x: 1, y: 2, z: 1 }, borderColor: "border-teal-500" },*/
];

export const mobileIcons = [
  {
    path: glbModelhtml5,
    scale: [100, 110, 100],
    speed: 0.003,
    direction: { x: -1, y: 2, z: 1 },
    borderColor: "border-red-500",
  },
  {
    path: glbModelcss,
    scale: [0.1, 0.1, 0.1],
    speed: 0.001,
    direction: { x: 5, y: 5, z: 5 },
    borderColor: "border-green-500",
  },
  {
    path: glbModeljs,
    scale: [10, 10, 10],
    speed: 0.02,
    direction: { x: -1, y: 0, z: 1 },
    borderColor: "border-blue-500",
  },
  {
    path: glbModelreact,
    scale: [15, 15, 15],
    speed: 0.005,
    direction: { x: -3, y: -0.5, z: -1.5 },
    borderColor: "border-yellow-500",
  },
  {
    path: glbModeltailwind,
    scale: [400, 400, 400],
    speed: 0.003,
    direction: { x: -0.5, y: -2, z: -3.5 },
    borderColor: "border-purple-500",
  },
  {
    path: glbModelnodejs,
    scale: [0.3, 0.05, 0.3],
    speed: 0.005,
    direction: { x: 2.0, y: -1, z: 1.5 },
    borderColor: "border-pink-500",
  },
  {
    path: glbModelfirebase,
    scale: [0.5, 0.1, 0.5],
    speed: 0.01,
    direction: { x: 1, y: 1, z: 1 },
    borderColor: "border-indigo-500",
  },
  {
    path: glbModelbootstrap,
    scale: [5, 5, 5],
    speed: 0.003,
    direction: { x: 1, y: 2, z: 1 },
    borderColor: "border-teal-500",
  },
];
//{ name: "Hungary", icon: <FaMapMarkerAlt /> },
