import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageChangeAside = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [actualLanguage, setActualLanguage] = useState();
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language;
  console.log("currentLanguage: ", currentLanguage);

  useEffect(() => {
    if (currentLanguage && currentLanguage.includes("en")) {
      setActualLanguage("en");
    }else if(currentLanguage && currentLanguage.includes("hu")){
      setActualLanguage("hu");
    }else{
      setActualLanguage("en");
    }
  }, [currentLanguage]);
  return (
    <div className="  mx-3 mt-0 uppercase  text-primary bg-secondary p-2 rounded border-4 border-primary">
      <div className="relative inline-block border-0 flex flex-col items-center">
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {actualLanguage}
        </div>
        {isOpen && actualLanguage === "hu" && (
          <div className=" mt-2  rounded-md ">
            <div
              className="p-2 py-1 cursor-pointer text-secondary bg-primary rounded"
              onClick={() => handleLanguageChange("en")}
            >
              EN
            </div>
          </div>
        )}
        {isOpen && actualLanguage !== "hu" && (
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
