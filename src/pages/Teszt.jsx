import React from "react";
import { useTranslation } from "react-i18next";

const Teszt = () => {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("content")}</p>
      <button className="p-2 mx-2 border-2 rounded-xl border-primary" onClick={() => handleLanguageChange("en")}>English</button>
      <button className="p-2 mx-2 border-2 rounded-xl border-primary" onClick={() => handleLanguageChange("hu")}>Hungarian</button>
    </div>
  );
};

export default Teszt;
