import React from "react";
import { useTranslation } from "react-i18next";
const NotFound = () => {
    const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen text-primary text-xl mx-2">
   {t('errror404')}
    </div>
  );
};

export default NotFound;
