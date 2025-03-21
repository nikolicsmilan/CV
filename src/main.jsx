/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client"; // Importáld a createRoot-ot
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GeneralContextProvider } from "./context/GeneralContext";
import { InfoContextProvider } from "./context/InfoContext";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import enTranslation from "./locales/en.json";
import huTranslation from "./locales/hu.json";
import 'typeface-montserrat'

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

const root = ReactDOM.createRoot(document.getElementById("root")); // Hozd létre a root-ot
root.render( // Használd a root.render-t
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RootComponent />
    </Suspense>
  </React.StrictMode>
);














// <DataContextProvider>  </DataContextProvider>
/*


*/

/*i18n
  .use(Backend)
  .use(LanguageDetector) // Use LanguageDetector
  .init({
    lng: "en", // Set the default language
    fallbackLng: "en", // Fallback language if a translation is not available
    debug: false, // Enable debug mode for development
   
    // Backend options for loading translation files
    resources: {
      en: { translation: enTranslation },
      hu: { translation: huTranslation },
     
    },
  });*/
/*

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client"; // Importáld a createRoot-ot
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
import 'typeface-montserrat'

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

const root = ReactDOM.createRoot(document.getElementById("root")); // Hozd létre a root-ot
root.render( // Használd a root.render-t
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RootComponent />
    </Suspense>
  </React.StrictMode>
);

*/