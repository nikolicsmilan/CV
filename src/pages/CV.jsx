import React from "react";
import PropTypes from "prop-types";
import CvMobil from "../components/cv/mobil/CvMobil";
import profil from "../assets/Profil3.PNG";
import profil4 from "../assets/Profil4.jpg";
import profil7 from "../assets/Profil7.JPG"
import { stack, language, contact } from "../data/stack";
import { downloadPDF } from "../components/cv/pdfUtils";
import { MyGeneralContext } from "../context/GeneralContext";
import { useTranslation } from "react-i18next";
import DesktopCv from "../components/cv/DesktopCv";

const CV = () => {
  // Get the style and size values from the MyGeneralContext
  const { style, size } = MyGeneralContext();
  const { i18n } = useTranslation();
  const dochu =
    "https://nikolicsmilan-cv.web.app/nikolicsmilan-cv.web.app_2023_07_14_hu.pdf";
  const docen =
    "https://nikolicsmilan-cv.web.app/nikolicsmilan-cv.web.app_2023_07_14_en.pdf";
  const currentLanguage = i18n.language;

  console.log('ez mi????',currentLanguage)
  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center 
      m-0 border-0 border-red-400">
      {currentLanguage === "hu" ? (
        <button
          className={`hidden m-0 ${
            style === "city" ? "text-dark" : "text-white"
          } hover:text-primary`}
          onClick={()=>{downloadPDF(dochu,"hu")}}
        >
         Letöltés PDF
        </button>
      ) : (
        <button
          className={`hidden  m-0 ${
            style === "city" ? "text-dark" : "text-white"
          } hover:text-primary`}
          onClick={()=>{downloadPDF(docen,"en")}}
        >
          Download PDF
        </button>
      )}

        {/* Conditionally render mobile or desktop version of the CV */}
        {size.width < 667 || size.width < size.height || 500 > size.height ? (
          // Mobile version of the CV
          // profil={require("../assets/Profil3.PNG")}
          <CvMobil contact={contact} profil={profil7} stack={stack} />
        ) : (
          // Desktop version of the CV
          <div
            className="max-w-screen-lg w-full 
             py-0 bg-white shadow-md flex flex-row border-0 border-red-400"
            style={{ height: "29.7cm", width: "21cm" }}
          >
          <DesktopCv profil={profil7} stack={stack} language={language} contact={contact} />
          </div>
        )}
      </div>
    </>
  );
};
// Prop types for the CV component
CV.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
  profil: PropTypes.object,
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
};

export default CV;
