import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  myOnSnapshotVisited,
  myOnSnapShotUpdateVisit,
} from "../firebase/Firestore";
import { MyGeneralContext } from "../context/GeneralContext";

const Info = () => {
  const { visit, setVisit } = MyGeneralContext();

  const { t } = useTranslation();
  useEffect(() => {
    const unsubscribe = myOnSnapshotVisited(setVisit);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    myOnSnapShotUpdateVisit();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-primary text-xl mx-2">
      <div className="text-info">
        <span className="typing-animation ">{t("Infom", { visit })}</span>
      </div>
    </div>
  );
};

export default Info;
