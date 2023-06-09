import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  myOnSnapshotVisited,
  myOnSnapShotUpdateVisit,
} from "../firebase/Firestore";
import { MyInfoContext } from "../context/InfoContext";

const Info = () => {
  const { visit, setVisit, latitude, longitude, ipAddress, browserInfo } =
    MyInfoContext();
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showFourthText, setShowFourthText] = useState(false);
  const { t } = useTranslation();
  const { browser:{name: browserName}, os: { name: osName }, device: { type: deviceType } } = browserInfo;
  console.log('browserName',browserName,osName,deviceType)
  //This here and not context cause only run when this page is load
  useEffect(() => {
    const unsubscribe = myOnSnapshotVisited(setVisit);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    myOnSnapShotUpdateVisit();
    // Show the second text after a delay of 2 seconds
    const timeout = setTimeout(() => {
      setShowSecondText(true);
    }, 2000);

    // Show the third text after a delay of 4 seconds (2 seconds after the second text)
    const timeout2 = setTimeout(() => {
      setShowThirdText(true);
    }, 4000);

    const timeout3 = setTimeout(() => {
      setShowFourthText(true);
    }, 6000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-primary text-xl mx-2">
      <div className="text-info ">
        <span className="typing-animation ">
          {t("Infom.visited", { visit })}
        </span>
        <br></br>
        {showSecondText && (
          <span className="typing-animation">
            {t("Infom.gps", { longitude, latitude })}
          </span>
        )}{" "}
        <br></br>
        {showThirdText && (
          <span className="typing-animation">
            {" "}
            {t("Infom.ip", { ipAddress })}
          </span>
        )} <br></br>
        {showFourthText && (
          <span className="typing-animation"> {t("Infom.browser", {browserName,osName,deviceType})}</span>
        )}
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
