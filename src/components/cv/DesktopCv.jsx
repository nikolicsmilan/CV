import React from "react";
import AsideCv from "./AsideCv";
import MainCv from "./MainCv";

const DesktopCv = ({ profil, stack, language, contact }) => {
  return (
    <>
      <AsideCv profil={profil} stack={stack} language={language} />

      <MainCv contact={contact} />
    </>
  );
};

export default DesktopCv;
