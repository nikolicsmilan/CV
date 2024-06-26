import React from "react";
import { useTranslation } from "react-i18next";
const Contact = ({ contact }) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-dark rounded font-bold 
      uppercase  text-base text-center py-2 text-red-600 city:bg-dark">
        {t("Contact.heading")}
      </h1>


      <div className="    rounded flex 
      flex-wrap justify-center border-0 my-5
       border-lime-400 items-center text-base">
        {contact.map((item, index) => (
          <div
            key={`${item.name}_${index}`}
            className="w-[270px] h-28 p-1 m-1 border-2 md:border-2 
            rounded border-primary flex flex-col  items-center justify-center my-1 "
          >
            <div className="text-3xl mx-2 ">{item.icon}</div>{" "}
            <div className="md:text-xl">
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </div>
            <div className=" py-1">
            {item.url ? (
              <div
                className="rounded bg-primary text-white border-0 border-red-400  
              mx-1 px-2 flex justify-center items-center cursor-pointer "
              >
                <div className="text-base">
                  {" "}
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {t("CVem.clickhere")}
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;

/*
    <>
      <h1 className="text-dark rounded font-bold uppercase  text-base text-center py-2 text-red-600 bg-dark">
        {t("Contact.heading")}
      </h1>
      <div className=" shadow-2xl rounded flex flex-wrap justify-center border-0 my-5 border-red-400 items-center text-base">
        {contact.map((item, index) => (
          <div
            key={`${item.name}_${index}`}
            className="w-full border-2 md:border-0 rounded border-primary flex flex-col md:flex-row items-center my-1 "
          >
            <div className="text-2xl mx-2 ">{item.icon}</div>{" "}
            <div className="md:text-xl">
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </div>
            <div className="md:ml-auto py-1">
            {item.url ? (
              <div
                className="rounded bg-primary text-white border-0 border-red-400  
              mx-1 px-2 flex justify-center items-center cursor-pointer "
              >
                <div className="text-base">
                  {" "}
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {t("CVem.clickhere")}
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}</div>
          </div>
        ))}
      </div>
    </>

*/

/*
import React from "react";
import { useTranslation } from "react-i18next";
const Contact = ({ contact }) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-dark font-bold uppercase  text-base text-center my-2 text-red-600">
        {t("Contact.heading")}
      </h1>
      <div className="flex flex-wrap justify-center border-2 my-5 border-red-400 items-center text-base">
        {contact.map((item, index) => (
          <React.Fragment key={`${item.name}_${index}`}>
            {item.name !== "github" && item.name !== "webpage" && (
              <div className="flex flex-row text-md w-full lg:w-1/2 border-0  border-sky-400">
                <h3 className="mx-2 text-primary ">{item.icon}</h3>
                <h3 className="text-dark font-bold ">
                  {item.name === "github" ? (
                    <a
                      href="https://github.com/nikolicsmilan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/nikolicsmilan
                    </a>
                  ) : (
                    item.name
                  )}
                </h3>
              </div>
            )}

            {item.name === "github" && (
              <div className="flex flex-row text-md w-full lg:w-1/2 border-0  border-sky-400">
                <h3 className="mx-2 text-primary ">{item.icon}</h3>
                <h3 className="text-dark font-bold ">
                  <a
                    href="https://github.com/nikolicsmilan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/nikolicsmilan
                  </a>
                </h3>
              </div>
            )}

            {item.name === "webpage" && (
              <div className="  flex flex-row text-md w-full lg:w-1/2 border-0  border-sky-400">
                <h3 className="mx-2 text-primary ">{item.icon}</h3>
                <h3 className="text-dark font-bold ">
                  <a
                    href="https://nikolicsmilan.hu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    nikolicsmilan.hu
                  </a>
                </h3>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Contact;
*/
