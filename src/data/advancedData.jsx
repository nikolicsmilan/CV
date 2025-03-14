import { FaFacebook, FaGithub, FaLinkedin, FaYoutube,  FaVideo,
  FaCode,  FaHome,FaLock, 
  FaInfoCircle,FaCloud,FaWifi   } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

export const socialmedia = [
  { name: "Linkedin", icon: <FaLinkedin /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "YouTube", icon: <FaYoutube /> },
  { name: "Facebook", icon: <FaFacebook /> },
];

export const sections = [
  {
    name: "About Me",
    icon: <FaVideo />,
    path: "/Intro",
  }, 
  {
    name: "Projects",
    icon: <FaCode />,
    path: "/Projects",
  },

  {
    name: "Contact",
    icon: <  MdOutlineEmail />,
    path: "/mail",
  },
  
];

export const network = [
 
  {
    name: "Dollar",
    icon: <PiCurrencyDollarBold />,
  },
  {
    name: "Cloud",
    icon: <FaCloud  />,
  },
  {
    name: "Home",
    icon: <FaHome />,
   
  },
  {
    name: "Security",
    icon: <  FaLock />,
  
  },
  {
    name: "World",
    icon: <TbWorld />,
   
  },
  {
    name: "Basket",
    icon: <SlBasket />,
   
  },
  {
    name: "Projects",
    icon: <FaCode />,
    path: "/Projects",
  },
  {
    name: "Info",
    icon: <  FaInfoCircle />,
    path: "/roadmap",
  },
  {
    name: "Wifi",
    icon: <  FaWifi />,
    path: "/roadmap",
  },
  
];


//FaWifi

