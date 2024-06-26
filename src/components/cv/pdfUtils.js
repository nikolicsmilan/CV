import axios from "axios";
import { saveAs } from "file-saver";

export const downloadPDF = (doc,lng) => {
  console.log("ez a doc", doc);
  axios({
    url: doc, // Replace with the actual URL of your PDF file
    method: "GET",
    responseType: "blob", // Important! This tells axios to expect a binary response
  })
    .then((response) => {
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      saveAs(pdfBlob, `${lng==='hu'?'nikolicsmilan-cv.web.app_2024_06_26_hu.pdf':'nikolicsmilan-cv.web.app_2024_06_26_en.pdf'}`); // Specify the filename for the downloaded file
    })
    .catch((error) => {
      console.error("Error occurred while downloading the PDF file:", error);
    });
};

//https://nikolicsmilan-cv.web.app/nikolicsmilan-cv.web.app.pdf
