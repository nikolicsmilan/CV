import React from "react";
import { useTranslation } from "react-i18next";
import stillpicture from "../assets/allokep_en_18.png";
// made the bold decision to resign from my job and ventured into the world of web development, establishing my own business
const Roadmap = () => {
  const { t, i18n } = useTranslation();
  const roadmapItems = [
    { date: "2024", event: "Enter CNI" },
    { date: "2019", event: "Establishing web development business" },
    { date: "2017", event: "Start Learning Development" },
    { date: "2014", event: "Graduated as System Administrator" },
    // Add more roadmap items as needed
  ];

  return (
    <div className="overflow-hidden overscroll-none flex flex-row   relative  bg-cover bg-prmary space:bg-black  w-full h-screen flex items-center justify-center border-0 border-orange-400">
      <div className=" relative right-0 z-10 lg:w-1/3 h-screen mt-[500px]  md:mt-[600px] lg:mt-[20px] border-0 border-red-400">
        {roadmapItems.map((item, index) => (
          <div
            className={` border-0 border-lime-400 absolut lg:relative left-0 ml-[50px] top-10 lg:top-1 flex md:mt-[50px] lg:mt-[120px] mt-[${0}px] my-2`}
          >
            <div className="border-b-2 border-primary w-48  md:w-96 lg:w-96 h-20 bg-dark flex justify-center items-center">
              <div>
                <h2 className="ml-[0px]  rounded text-center p-0 ">
                  {t(`Roadmapem.${item.date}`)}
                </h2>
              </div>
            </div>

            <div
              style={{
                transform: `
         rotateX(${0}deg)
         rotateY(${0}deg)
         rotateZ(${90}deg)`,
              }}
              className=" w-12  lg:w-12 h-0.5 bg-primary mt-[35px] md:mt-[22px] ml-[-5px]"
            ></div>
            <div className=" top-10 w-20 h-0.5 bg-primary ml-[-5px] mt-[54px] md:mt-[45px]">
              <h2 className="bg-dark rounded text-center lg:ml-[20px] mt-[-25px] md:mt-[-25px]">
                {item.date}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className=" absolute lg:relative right-0 z-5  h-screen mt-[20px] border-0 border-red-400">
        <img
          src={stillpicture} // Álló kép forrása
          alt="Profile"
          className="w-full h-full rounded-lg -md object-cover filter grayscale brightness-200 contrast-200"
        />
      </div>

      {/* Top Horizontal Line */}

      {/* Diagonal Line */}

  {/* Loading Animation */}
  <div className="flex  w-96 border-2 flex-col items-center justify-center min-h-screen bg-b">
        <div className="text-xl font-semibold mb-4">Loading...</div>
        <div className="w-full h-1 bg-gray-300 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-black animate-loading-bar"></div>
        </div>
        <div className="h-2 relative max-w-xl mx-auto mt-5 bg-gray-200 rounded-full">
      <div className="h-full bg-green-500 rounded-full animate-pulse"></div>
    </div>
      </div>

      
    </div>
  );
};

export default Roadmap;
