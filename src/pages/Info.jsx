import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  myOnSnapshotVisited,
  myOnSnapShotUpdateVisit,
} from "../firebase/Firestore";
import { MyInfoContext } from "../context/InfoContext";
import { MyGeneralContext } from "../context/GeneralContext";
import TypingAnimation from "../components/info/TypingAnimation";
import city from "../assets/city.mp4";
import space from "../assets/space.mov";
const Info = () => {
  const { visit, setVisit, latitude, longitude, ipAddress, browserInfo } =
    MyInfoContext();
  const { style } = MyGeneralContext();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const {
    browser: { name: browserName },
    os: { name: osName, version: osVersion },
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
    <div className="background-video-container ">
      <video
        src={style === "city" ? city : space}
        className="background-video"
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
      <div className="content2 border-0 border-red-400 m-3">
        {/* Your other content goes here */}

        <div
          className={`mukodj p-5 shadow-2xl text-md mx-2 bg-sky-500  my-10 rounded-xl  w-full  lg:w-1/3 h-56 lg:h-56   ${
            style === "space" ? "text-sky-400" : "text-sky-100"
          }`}
          style={
            {
              /*  boxShadow: "-4px 3px 8px rgba(34, 211, 238, 0.8)",*/
              /*  backgroundColor: "rgba(0, 1, 8, 0.8)",*/
            }
          }
        >
          <TypingAnimation customcontent={getTextContent()} />
        </div>
      </div>
    </div>
  );
};

export default Info;
/*
     <div
        className={`border-2 shadow-xl  text-primary text-md mx-2 bg-sky-300 bg-opacity-10 my-10 rounded-xl p-2 w-full  lg:w-1/2 h-56 lg:h-56 ring-red-300 ${
          style === "space" ? "border-sky-800" : ""
        }`}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>
      <div
        className={`border-0 shadow-lg text-primary text-md mx-2 bg-sky-300 bg-opacity-10 my-10 rounded-xl p-2 w-full lg:w-1/2 h-56 lg:h-56 ${
          style === "space" ? "border-sky-800" : ""
        }`}
        style={{ boxShadow: "0 4px 6px rgba(255, 0, 0, 0.1)" }}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>
      <div
        className={`border-2 ring-4 ring-red-300 text-primary text-md mx-2 bg-sky-300 bg-opacity-10 my-10 rounded-xl p-2 w-full lg:w-1/2 h-56 lg:h-56 ${
          style === "space" ? "border-sky-800" : ""
        }`}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>

*/

/*   <div
        className={`border-0 ring-1 shadow-2xl text-primary text-md mx-2 bg-sky-500 my-10 rounded-xl p-2 w-full lg:w-1/2 h-56 lg:h-56 ring-sky-300 ${
          style === "space" ? "border-sky-800" : ""
        }`}
        style={{
          backgroundColor: "rgba(0, 1, 8, 0.8)", // Adjust the background color with an alpha value for transparency
          border: "none", // Remove the border for a cleaner look
          boxShadow: "none", // Remove the existing boxShadow property
        }}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>

      <div
        className={`border-0 ring-1 shadow-2xl text-primary text-md mx-2 bg-sky-500 my-10 rounded-xl p-2 w-full lg:w-1/2 h-56 lg:h-56 ring-sky-300 ${
          style === "space" ? "border-sky-800" : ""
        }`}
        style={{
          backgroundColor: "rgba(34, 211, 238, 0.5)", // Adjust the alpha value for transparency
          border: "none",
          boxShadow: "none",
        }}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>

      <div
        className={`border-0 ring-1 shadow-2xl text-primary text-md mx-2 my-10 rounded-xl p-2 w-full lg:w-1/2 h-56 lg:h-56 ring-sky-300 ${
          style === "space" ? "border-sky-800" : ""
        }`}
        style={{
          backgroundColor: "rgba(34, 211, 238, 0.2)", // Adjust the alpha value for transparency
          border: "none",
          boxShadow: "-4px 3px 8px rgba(34, 211, 238, 0.8)",
        }}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>

      <div
        className={`border-0 ring-1 shadow-2xl text-primary text-md mx-2 my-10 rounded-xl p-2 w-full lg:w-1/2 h-56 lg:h-56 ring-sky-300 ${
          style === "space" ? "border-sky-800" : ""
        }`}
        style={{
          backgroundColor: "rgba(34, 211, 238, 0.2)", // Adjust the alpha value for transparency
          border: "none",
          boxShadow: "none", // Remove the existing boxShadow property
        }}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>

      <div
        className={`border-0 ring-1 shadow-2xl text-primary text-md mx-2 my-10 rounded-xl p-2 w-full lg:w-1/2 h-56 lg:h-56 ring-sky-300 ${
          style === "space" ? "border-sky-800" : ""
        }`}
        style={{
          backgroundColor: "rgba(34, 211, 238, 0.2)", // Adjust the alpha value for background transparency
          border: "none",
          backdropFilter: "blur(10px)", // Add a blur effect
          backgroundColor: "rgba(34, 211, 238, 0.2)", // Adjust the alpha value for the glass effect
        }}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div> */

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
