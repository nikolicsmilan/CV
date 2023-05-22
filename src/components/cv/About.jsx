import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="m-3 my-10 border-0 border-indigo-400">
      <h3 className="text-dark font-bold uppercase  text-xl my-2">About</h3>
      <p>
       {t("CVem.about")}
      </p>
    </div>
  );
};

export default About;
