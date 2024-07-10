import React from "react";
import Heading from "../components/home/Heading";
import { MyGeneralContext } from "../context/GeneralContext";

const Home = () => {
  const { style, size, activeMenu, setActiveMenu } = MyGeneralContext();
  const city = "https://cockers-43ccb.web.app/videos/city.mp4";
  const space = "https://cockers-43ccb.web.app/videos/space.mov";
  return (
    <div className="flex justify-start items-center flex-col border-0 border-sky-400 h-screen">
      <div className=" relative w-full h-full">
        <video
          src={style === "city" ? city : space}
          type="video/mp4"
          loop
          preload="auto"
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        {/* Render Heading component based on window size and activeMenu state */}
        {size.width < 667 ||
        size.width < size.height ||
        (500 > size.height && !activeMenu) ? (
          <Heading style={style} setActiveMenu={setActiveMenu} />
        ) : (
          ""
        )}

        {size.width > 667 ? (
          <Heading style={style} setActiveMenu={setActiveMenu} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
