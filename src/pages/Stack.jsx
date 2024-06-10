import React from "react";
import { skillsIcon } from "../data/aside";
import { useTranslation } from "react-i18next";
import Icon3d from "../components/stack/Icon3d";

const Stack = () => {
  const { t } = useTranslation();
  return (
    <div
      className="overflow-container py-0 bg-primar space:bg-black h-screen
     border-0 border-sky-400 relative z-10"
    >
    
      <Icon3d />
    </div>
  );
};

export default Stack;

