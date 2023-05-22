import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="flex flex-wrap justify-center border-0 my-5 border-red-400 items-center ">
      {contact.map((item, index) => (
        <React.Fragment key={`${item.name}_${index}`}>
          {item.name !== "github" && item.name !== "webpage" && (
            <div
              className="flex flex-row text-md w-full lg:w-1/2 border-0  border-sky-400"
            >
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
            <div
              className="flex flex-row text-md w-full lg:w-1/2 border-0  border-sky-400"
            >
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
            <div
              className="  flex flex-row text-md w-full lg:w-1/2 border-0  border-sky-400"
            >
              <h3 className="mx-2 text-primary ">{item.icon}</h3>
              <h3 className="text-dark font-bold ">
                <a
                  href="https://nikolicsmilan-cv.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  nikolicsmilan-cv.web.app
                </a>
              </h3>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Contact;

