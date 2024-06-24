import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GeneralContextProvider } from "./context/GeneralContext";
import { InfoContextProvider } from "./context/InfoContext";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import enTranslation from "./locales/en.json";
import huTranslation from "./locales/hu.json";

// Initialize i18next

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: false,
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    resources: {
      en: { translation: enTranslation },
      hu: { translation: huTranslation },
    },
  });

const RootComponent = () => (
  <I18nextProvider i18n={i18n}>
    <GeneralContextProvider>
      <InfoContextProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </InfoContextProvider>
    </GeneralContextProvider>
  </I18nextProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RootComponent />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

