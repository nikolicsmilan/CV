import React from "react";
import cv3 from "../assets/cv3.mp4";

const VideoIntro = () => {
  return (
    <div>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className=" relative w-full h-full">
          <video
            src={cv3}
            type="video/mp4"
            controls={false}
            autoPlay
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-12    bg-blackOverlay">
            <div className="p-5"></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
