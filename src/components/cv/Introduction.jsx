import React from "react";
import Contact from "./Contact";
import { useTranslation } from 'react-i18next';

const Introduction = ({ contact }) => {
  const { t } = useTranslation();
  return (
    <div className="border-0 border-orange-400 m-3 bg-white space:bg-dark">
      <div>
        <h1 className=" text-center  text-3xl ">
          Milán Nikolics
        </h1>
        <h2 className="text-center xs:text-center md:text-center sm:text-center text-xl lg:text-2xl text-primary font-bold ">
        {  t("CVem.jobtitle")}
        </h2>
        <p className="text-center  sm:text-center">
        {  t("CVem.jobsubtext")}
        </p>
      </div>
      <Contact contact={contact} />
    </div>
  );
};

export default Introduction;

