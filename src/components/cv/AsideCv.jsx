import React from "react";
import { useTranslation } from "react-i18next";
import usecolor from "../../hooks/use-color";


const Asidecv = ({ profil, stack, language }) => {
  const { t } = useTranslation();

  const {getColor}= usecolor()
  return (
    <div className="w-auto border-0 border-sky-400   px-2  bg-dark ">
      <img
        src={profil}
        alt="Milan"
        className="rounded-full w-48 mx-auto my-0 border-0 border-primary py-1"
      />
      <h2 className=" text-2xl font-bold my-3 text-center">Stack</h2>
      <div className="border-0 flex flex-col justify-center items-start">
      {stack.map((item) => (
        <div key={item.name} className={`flex text-xl ${getColor(item.name)} `}>
          <h3 className="mx-2 text-2xl ">{item.icon}</h3>
          <h3 className=" text-xl font-bold">{item.name}</h3>
        </div>
      ))}
      </div>
 
      <h2 className="text-center text-2xl font-bold my-3">
        {t("Language.name")}
      </h2>
      {language.map((item) => (
        <div
          key={item.name}
          className="flex flex-col border-2 border-primary text-lg  my-3 mx-2  rounded-2xl p-2 "
        >
          <h4
            className="text-primary  font-bold py-0 border-0"
            style={{ lineHeight: "1" }}
          >
            {t(`Language.${item.name}`)}:
          </h4>
          <h4
            className="my-1 text-s border-0 text-primary block text-end"
           
          >
            {t(`Language.${item.level}`)}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Asidecv;
