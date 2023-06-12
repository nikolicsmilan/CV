import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  myOnSnapshotVisited,
  myOnSnapShotUpdateVisit,
} from "../firebase/Firestore";
import { MyInfoContext } from "../context/InfoContext";
import TypingAnimation from "../components/info/TypingAnimation";

const Info = () => {
  const { visit, setVisit, latitude, longitude, ipAddress, browserInfo } =
    MyInfoContext();
  const { t } = useTranslation();
  const {
    browser: { name: browserName },
    os: { name: osName },
    device: { type: deviceType },
  } = browserInfo;

  useEffect(() => {
    const unsubscribe = myOnSnapshotVisited(setVisit);
    return () => {
      unsubscribe();
    };
  }, []);

  const shouldShowText =
    visit || ipAddress || longitude || latitude || browserName || osName || deviceType;

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
      if (deviceType) {
        content += `${t("Infom.devicetype", { deviceType })} `;
      }
      return content.trim(); // Trim any extra whitespace
    }
    return "No information available";
  };

  return (
    <div className="text-primary text-xl mx-2">
      <TypingAnimation customcontent={getTextContent()} />
    </div>
  );
};

export default Info;





















/*import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  myOnSnapshotVisited,
  myOnSnapShotUpdateVisit,
} from "../firebase/Firestore";
import { MyInfoContext } from "../context/InfoContext";
import TypingAnimation from "../components/info/TypingAnimation";

const Info = () => {
  const { visit, setVisit, latitude, longitude, ipAddress, browserInfo } =
    MyInfoContext();
  const { t } = useTranslation();
  const {
    browser: { name: browserName },
    os: { name: osName },
    device: { type: deviceType },
  } = browserInfo;
 // console.log("browserName", browserName, osName, deviceType);
  //This here and not context cause only run when this page is load
  useEffect(() => {
    const unsubscribe = myOnSnapshotVisited(setVisit);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="text-primary text-xl mx-2">
      <TypingAnimation
        customcontent={`${t("Infom.visited", { visit })} ${t("Infom.ip", {
          ipAddress,
        })} ${t("Infom.gps", { longitude, latitude })} ${t("Infom.browser", {
          browserName,
          osName, deviceType
        })}`}
      />
    </div>
  );
};

export default Info;*/

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
