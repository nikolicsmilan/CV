import axios from "axios";
import { saveAs } from "file-saver";

export const downloadPDF = () => {
  axios({
    url: "https://nikolicsmilan-cv.web.app/nikolicsmilan-cv.web.app.pdf", // Replace with the actual URL of your PDF file
    method: "GET",
    responseType: "blob", // Important! This tells axios to expect a binary response
  })
    .then((response) => {
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      saveAs(pdfBlob, "downloaded.pdf"); // Specify the filename for the downloaded file
    })
    .catch((error) => {
      console.error("Error occurred while downloading the PDF file:", error);
    });
}