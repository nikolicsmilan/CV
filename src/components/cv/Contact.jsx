import React from "react";
import { useTranslation } from "react-i18next";
const Contact = ({ contact }) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-dark font-bold uppercase  text-xl my-2 text-red-600">
        {t("Contact.heading")}
      </h1>
      <div className="flex flex-wrap justify-center border-0 my-5 border-red-400 items-center ">
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
