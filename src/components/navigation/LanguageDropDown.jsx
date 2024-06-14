import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChangeAside = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="mx-3 mt-0 uppercase border-4 border-lime-400 text-dark ">
      <div className="border-4">
        <select
          value={currentLanguage}
          onChange={handleLanguageChange}
          className="cursor-pointer border-2 border-primary rounded p-2"
        >
          <option value="en">EN</option>
          <option value="hu">HU</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageChangeAside;