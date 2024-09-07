import React from "react";
import { useTranslation } from "react-i18next";

const Jobinfo = () => {
  const { t } = useTranslation();
  return (
    <div className="m-3 my-10 border-0 border-indigo-400">
      <h3 className="text-dark font-bold uppercase  text-xl my-2">
        {" "}
        {t("CVem.jobinfo")}
      </h3>
      <ul className="list-disc mx-5">
        <li> {t("CVem.employmenthours")}</li>
        <li> {t("CVem.remotework")} </li>
        <li>{t("CVem.employmenttype")}</li>
       
      </ul>
    </div>
  );
};

export default Jobinfo;
/* <li>
          {t("CVem.salarytext")}
          <span className="font-bold"> {t("CVem.salaryamount")} </span>
        </li> */