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
    <div className="mx-3 mt-0 uppercase  text-primary bg-secondary p-2 rounded border-0">
      <div className="relative inline-block border-0 flex flex-col items-center">
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {currentLanguage}
          {console.log(currentLanguage)}
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
        {isOpen && currentLanguage === "en" && (
          <div className=" mt-2 rounded-md  flex border-0">
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

/* {isOpen && (
          <div className="absolute top-8  mt-2  rounded-md shadow-md ">
            <div
              className="px-0 py-1 cursor-pointer hover:bg-gray-200 text-primary "
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </div>
            <div
              className="px-0 py-1 cursor-pointer hover:bg-gray-200"
              onClick={() => handleLanguageChange('hu')}
            >
              HU
            </div>
          </div>
        )} */
