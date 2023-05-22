import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChangeAside = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="mx-3 mt-0 uppercase border-0 text-dark">
      <div className="flex flex-row border-0">
        <div className="mt-2 m-2 border-0 flex items-center">
          <input
            type="radio"
            id="en"
            name="language"
            value="en"
            className="cursor-pointer"
            checked={currentLanguage === 'en'}
            onChange={() => handleLanguageChange('en')}
          />
          <label htmlFor="en" className="ml-2 text-md cursor-pointer capitalize">
            EN
          </label>
        </div>
        <div className="flex items-center mt-2 m-2">
          <input
            type="radio"
            id="hu"
            name="language"
            value="hu"
            className="cursor-pointer"
            checked={currentLanguage === 'hu'}
            onChange={() => handleLanguageChange('hu')}
          />
          <label htmlFor="hu" className="ml-2 text-md cursor-pointer capitalize">
            HU
          </label>
        </div>
      </div>
    </div>
  );
};

export default LanguageChangeAside;