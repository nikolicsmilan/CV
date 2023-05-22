import React from 'react';
import { useTranslation } from "react-i18next";

const Asidecv = ({profil,stack,language}) => {

  const { t } = useTranslation();
  return (
    <div className="w-3/12 border-0 border-sky-400 px-1 ">
    <img
      src={profil}
      alt="Milan"
      className="rounded-full w-full mx-auto my-3 border-4 border-primary"
    />
    <h2 className="text-start text-2xl font-bold my-3">Stack</h2>
    {stack.map((item) => (
      <div key={item.name}  className="flex text-xl">
        <h3 className="mx-2 text-primary">{item.icon}</h3>
        <h3 className="text-dark font-bold">{item.name}</h3>
      </div>
    ))}
    <h2 className="text-start text-2xl font-bold my-3">{t("Language.name")}</h2>
    {language.map((item) => (
      <div key={item.name}  className="flex flex-col text-lg  my-3 rounded-2xl p-2 ">
        <h4
          className="text-dark font-bold py-0 border-0"
          style={{ lineHeight: "1" }}
        >
          {t(`Language.${item.name}`)}:
        </h4>
        <h4
          className="my-1text-sm border-0 text-primary"
          style={{ lineHeight: "1.3" }}
        >
         {t(`Language.${item.level}`)}:
        </h4>
      </div>
    ))}
  </div>
  )
}

export default Asidecv