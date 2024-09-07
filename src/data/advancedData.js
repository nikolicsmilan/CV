import { FaFacebook, FaGithub, FaLinkedin, FaYoutube,  FaVideo,
  FaCode,  FaHome,FaArrowUp, 
  FaInfoCircle } from "react-icons/fa";
import { BsStack } from "react-icons/bs";


export const connection = [
  { name: "Linkedin", icon: <FaLinkedin /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "YouTube", icon: <FaYoutube /> },
  { name: "Facebook", icon: <FaFacebook /> },
];

export const navigation = [
 
  {
    name: "Video",
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
    name: "Roadmap",
    icon: <  FaInfoCircle />,
    path: "/roadmap",
  },
];



