import React from "react";

const AdvancedHeader = ({ icons }) => {
  return (
    <>
      <div className="uppercase text-accent text-2xl text-center border-0">expert</div>
      <div className="hidden lg:flex justify-between items-center w-96 h-16 pl-10">
        <div className="flex text-xl justify-between w-44">
          {icons.map((item, index) => (
            <div
              key={index}
              className="p-0 hover:text-accent transition duration-300 cursor-pointer"
            >
              {item.icon}
            </div>
          ))}
        </div>
        <div className="w-12 mx-5 ">
          <div className="hidden   xl:block"> xl</div>
          <div className="hidden  lg:block xl:hidden"> lg</div>
          <div className="hidden md:block lg:hidden xl:hidden"> md</div>
          <div className=" block md:hidden lg:hidden xl:hidden"> sm</div>
        </div>
        <div className="flex justify-center items-center rounded-full border-accent border-2 p-2 w-36 h-10 hover:text-white hover:bg-accent transition duration-300 cursor-pointer">
          <div>Download CV</div>
        </div>
      </div>
    </>
  );
};

export default AdvancedHeader;
