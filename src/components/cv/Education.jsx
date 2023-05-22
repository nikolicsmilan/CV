import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="m-3 my-10 border-0 border-indigo-400">
    <h3 className="text-dark font-bold uppercase  text-xl my-2">
    {  t("CVem.education")}
    </h3>
    <div className="flex justify-between">
      <p>
      {  t("CVem.school")}
      </p>
      <p className="font-bold my-1 w-40">2012-2014</p>
    </div>
  </div>

  )
}

export default Education