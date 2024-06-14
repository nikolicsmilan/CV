import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageChangeAside = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="  mx-3 mt-0 uppercase  text-primary bg-secondary p-2 rounded border-4 border-sky-400">
      <div className="relative inline-block border-0 flex flex-col items-center">
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {currentLanguage}
       
        </div>
        {isOpen && currentLanguage === "hu" && (
          <div className=" mt-2  rounded-md ">
            <div
              className="p-2 py-1 cursor-pointer text-secondary bg-primary rounded"
              onClick={() => handleLanguageChange("en")}
            >
              EN
            </div>
          </div>
        )}
        {isOpen && currentLanguage !== "hu" && (
          <div className=" mt-2 rounded-md  flex border-0 ">
            <div
              className=" p-2 py-1 cursor-pointer  text-secondary bg-primary rounded"
              onClick={() => handleLanguageChange("hu")}
            >
              HU
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageChangeAside;

