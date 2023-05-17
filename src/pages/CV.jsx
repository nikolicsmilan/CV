import React from "react";
import PropTypes from "prop-types";
import AsideCv from "../components/cv/AsideCv";
import MainCv from "../components/cv/MainCv";
import CvMobil from "../components/cv/mobil/CvMobil";
import profil from "../assets/Profil3.PNG";
import { stack, language, contact } from "../data/stack";
import { downloadPDF } from "../components/cv/pdfUtils";
import { MyGeneralContext } from "../context/GeneralContext";

const CV = () => {
  // Get the style and size values from the MyGeneralContext
  const { style, size } = MyGeneralContext();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center m-0 border-0">
        {/* Button to download the PDF */}
        <button
          className={`m-0 ${
            style === "city" ? "text-dark" : "text-white"
          } hover:text-primary`}
          onClick={downloadPDF}
        >
          Download PDF
        </button>

        {/* Conditionally render mobile or desktop version of the CV */}
        {size.width < 667 || size.width < size.height || 500 > size.height ? (
          // Mobile version of the CV
          // profil={require("../assets/Profil3.PNG")}
          <CvMobil contact={contact} profil={profil} stack={stack} />
        ) : (
          // Desktop version of the CV
          <div
            className="max-w-screen-lg w-full px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-md flex flex-row border-0 border-red-400"
            style={{ height: "29.7cm", width: "21cm" }}
          >
            <AsideCv profil={profil} stack={stack} language={language} />
            <MainCv contact={contact} />
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
