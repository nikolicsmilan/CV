import React from "react";

const usecolor = () => {
  function getColor(title) {
    switch (title) {
      case "React":
        return "text-sky-400";
      case "Js":
        return "text-yellow-200";
      case "NodeJs":
        return "text-green-400 ";
      case "Tailwind":
        return "text-cyan-400";
      case "Bootstrap":
        return "text-purple-400";
      case "Github":
        return "text-purple-600";
      case "npm":
        return "text-red-400";
      case "HTML":
        return "text-orange-400 ";
      case "CSS":
        return "text-blue-700 ";
      case "Firebase":
        return "text-amber-400 ";
      default:
        return "text-sky-500"; // Default color if no label is specified
    }
  }

  return { getColor };
};

export default usecolor;
