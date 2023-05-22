import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="m-3 my-10 border-0 border-indigo-400">
    <h3 className="text-dark font-bold uppercase  text-xl my-2">
     {  t("CVem.workexperience")}
    </h3>
    <div className="flex justify-between">
      <p> {  t("CVem.jobpost")}</p>
      <p className="font-bold my-1 w-40">{  t("CVem.jobdate")}</p>
    </div>

    <p>
    {  t("CVem.jobdescription")}
    </p>
  </div>
  )
}

export default Experience