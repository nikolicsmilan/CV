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
      <div className=" relative right-0 z-10 lg:w-1/3 h-screen mt-[500px] lg:mt-[20px] border-0 border-red-400">
        {roadmapItems.map((item, index) => (
          <div
            className={` border-0 border-lime-400 absolut lg:relative left-0 ml-[50px] top-10 lg:top-1 flex  lg:mt-[120px] mt-[${20}px]`}
          >
            <div className="w-48 lg:w-96 h-0.5 bg-primary border-0 border-purple-400">
              <h2 className="ml-[0px] lg:mt-[-75px] bg-dark rounded text-center p-0 ">
              {t(`Roadmapem.${item.date}`)}
              </h2>
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
    </div>
  );
};

export default Roadmap;

/*
    <div className=" flex flex-row overflow-y-scroll  relative  bg-cover bg-prmary space:bg-black  w-full h-screen flex items-center justify-center border-0 border-orange-400">
      <div className=" relative right-0 z-10 lg:w-1/3 h-screen mt-[440px] lg:mt-[20px]">
        {roadmapItems.map((item, index) => (
          <div
            className={`absolut lg:relative left-0 border-0 ml-[50px] top-10 lg:top-1 flex  lg:mt-[120px] mt-[${20}px]`}
          >
            <div className=" w-48 h-0.5 bg-primary ">
              <h2 className="ml-[0px] mt-[-55px] bg-dark rounded text-center p-0 ">
                {item.event}
              </h2>
            </div>
            <div
              style={{
                transform: `
         rotateX(${0}deg)
         rotateY(${0}deg)
         rotateZ(${20}deg)`,
              }}
              className=" w-40 h-0.5 bg-primary mt-[27px] ml-[-5px]"
            ></div>
            <div className=" top-10 w-20 h-0.5 bg-primary ml-[-5px] mt-[54px]">
              <h2 className="bg-dark rounded lg:text-center lg:ml-[20px] mt-[-25px]">
                {item.date}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className=" absolute lg:relative right-0 z-10  h-screen mt-[20px]">
        <img
          src={stillpicture} // Álló kép forrása
          alt="Profile"
          className="w-full h-full rounded-lg -md object-cover filter grayscale brightness-200 contrast-200"
        />
      </div>

   
      </div>
*/

/*      <div className="relative right-0 z-10 lg:w-1/3 h-screen mt-[20px]">
        <div className="absolute left-2 border-0 ml-[50px] top-10 flex mt-[260px]">
          <div className=" w-40 h-0.5 bg-primary ">
            <h2 className="ml-[0px] mt-[-55px]">
            
              Graduated as Sytem Administrator
            </h2>
          </div>
          <div
            style={{
              transform: `
          rotateX(${0}deg)
          rotateY(${0}deg)
          rotateZ(${20}deg)`,
            }}
            className=" w-40 h-0.5 bg-primary mt-[27px] ml-[-5px]"
          ></div>
          <div className=" top-10 w-20 h-0.5 bg-primary ml-[-5px] mt-[54px]">
            <h2 className="ml-[20px] mt-[-25px]">2014</h2>
          </div>
        </div>
      </div> */

/*<div className="w-full overflow-y-scroll flex flex-wrap">
<figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Blur Example"
            className="w-full h-full object-cover filter blur"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Blur
          </figcaption>
        </figure>
  
        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Brightness Example"
            className="w-full h-full object-cover filter brightness-50"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Brightness
          </figcaption>
        </figure>

        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Contrast Example"
            className="w-full h-full object-cover filter contrast-150"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Contrast
          </figcaption>
        </figure>

        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Drop Shadow Example"
            className="w-full h-full object-cover filter drop-shadow-lg"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Drop Shadow
          </figcaption>
        </figure>

        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Grayscale Example"
            className="w-full h-full object-cover filter grayscale"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Grayscale
          </figcaption>
        </figure>

        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Hue Rotate Example"
            className="w-full h-full object-cover filter hue-rotate-90"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Hue Rotate
          </figcaption>
        </figure>

        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Invert Example"
            className="w-full h-full object-cover filter invert"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Invert
          </figcaption>
        </figure>

        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Opacity Example"
            className="w-full h-full object-cover filter opacity-50"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Opacity
          </figcaption>
        </figure>
 
        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Saturate Example"
            className="w-full h-full object-cover filter saturate-200"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Saturate
          </figcaption>
        </figure>
  
        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Sepia Example"
            className="w-full h-full object-cover filter sepia"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Sepia
          </figcaption>
        </figure>

  
        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Brightness Example"
            className="w-full filter brightness-150"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Brightness
          </figcaption>
        </figure>
  
        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Grayscale Example"
            className="w-full filter grayscale brightness-200 contrast-100"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            ID
          </figcaption>
        </figure>
   
        <figure className="w-60 h-60 overflow-hidden relative">
          <img
             src={stillpicture}
            alt="Contrast Example"
            className="w-full filter contrast-20"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-100 text-white text-center py-1">
            Contrast2
          </figcaption>
        </figure>

        <figure className="w-60 h-60 overflow-hidden relative">
          <img  src={stillpicture} alt="Blur Example" className="w-full filter blur" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Blur
          </figcaption>
        </figure>
    

</div> */

/*<div className="relative right-0 z-10 lg:w-1/3 h-screen mt-[20px]">
        <img
          src={stillpicture} // Álló kép forrása
          alt="Profile"
          className="w-full h-full rounded-lg shadow-md object-cover "
        />
      </div> */

/*      <div className="absolute left-2 border-2 ml-[50px] top-10 flex mt-[60px]">

        Frontend Developer
        <div className=" w-40 h-0.5 bg-primary "></div>
        <div
          style={{
            transform: `
          rotateX(${0}deg)
          rotateY(${0}deg)
          rotateZ(${20}deg)`,
          }}
          className=" w-40 h-0.5 bg-primary mt-[27px] ml-[-5px]"
        ></div>
        <div className=" top-10 w-20 h-0.5 bg-primary ml-[-5px] mt-[54px]"></div>
      </div> */

/*    <div className="relative bg-black p-8 w-full h-screen flex items-center justify-center border-2 border-white">
      <div className="relative z-10 w-1/3 h-screen my-5">
        <img
          src={stillpicture} // Álló kép forrása
          alt="Profile"
          className="w-full h-full rounded-lg shadow-md object-cover"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {roadmapItems.map((item, index) => (
          <div
            key={index}
            className="absolute bg-primary"
            style={{
              top: `${(index + 1) * 20}%`,
              left: index % 2 === 0 ? "0" : "auto",
              right: index % 2 === 0 ? "auto" : "0",
              width: "150px",
              height: "2px",
              transform: `translateY(-50%) ${
                index % 2 === 0 ? "" : "translateX(-100%)"
              }`,
            }}
          ></div>
        ))}
      </div>
    </div> */
/*  <div className="flex flex-col md:flex-row bg-gray-100 p-8">
 
      <div className="flex-1 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Roadmap</h2>
        <ul className="space-y-4">
          {roadmapItems.map((item, index) => (
            <li key={index} className="bg-white shadow-md p-4 rounded-lg">
              <div className="text-xl font-semibold">{item.date}</div>
              <div className="text-gray-600">{item.event}</div>
            </li>
          ))}
        </ul>
      </div>
 
      <div className="flex-1 md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <img
          src={stillpicture} // Cseréld ki a saját képed URL-jére
          alt="Profile"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div> */
