import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { myOnSnapshotVisited,myOnSnapShotUpdateVisit } from "../firebase/Firestore";
import { MyInfoContext } from "../context/InfoContext";
import { MyGeneralContext } from "../context/GeneralContext";
import TypingAnimation from "../components/info/TypingAnimation";

const Info = () => {
  const { visit, setVisit, latitude, longitude, ipAddress, browserInfo } =
    MyInfoContext();
  const { style } = MyGeneralContext();
  const { t,i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const {
    browser: { name: browserName },
    os: { name: osName,version: osVersion  },
    device: { type: deviceType },
  } = browserInfo;

  useEffect(() => {
    const unsubscribe = myOnSnapshotVisited(setVisit);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    myOnSnapShotUpdateVisit();
  }, []);

  const shouldShowText =
    visit ||
    ipAddress ||
    longitude ||
    latitude ||
    browserName ||
    osName ||
    deviceType;

  const getTextContent = () => {
    if (shouldShowText) {
      let content = "";
      if (visit) {
        content += `${t("Infom.visited", { visit })} `;
      }
      if (longitude && latitude) {
        content += `${t("Infom.gps", { longitude, latitude })} `;
      }
      if (ipAddress) {
        content += `${t("Infom.ip", { ipAddress })} `;
      }
      if (browserName) {
        content += `${t("Infom.browser", { browserName })} `;
      }
      if (osName) {
        content += `${t("Infom.os", { osName })} `;
      }
      if (osVersion) {
        content += `${t("Infom.version", { osVersion })} `;
      }
      if (deviceType) {
        content += `${t("Infom.devicetype", { deviceType })} `;
      }
     /* if(true){
        content +=` ${currentLanguage ==="en" ? "Other: I know what you did last summer...":"Egyéb: Tudom mit tettél tavaly nyáron..." }`
      }*/
      return content.trim(); // Trim any extra whitespace
    }
    return "No information available";
  };

  return (
    <div className="flex justify-center h-screen">
      <div
        className={`border-2  text-primary text-md mx-2 bg-sky-300 bg-opacity-10 my-10 rounded-xl p-2 w-full  lg:w-1/2 h-56 lg:h-56 ${
          style === "space" ? "border-sky-800" : ""
        }`}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>
    </div>
  );
};

export default Info;

/* GPS
        Weather
        Screen Size
        City
        irányítószám, Népeeség
        Ip Address
        Idő Időzna
        Napkelte napnyugta időpontja 
        browser inormation >> navigator
        */
