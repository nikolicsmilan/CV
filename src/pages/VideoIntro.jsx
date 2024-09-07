import React, { useRef } from 'react';
//import cv3 from "../assets/cv3.mp4";
import teszt from "../assets/English_interview_teszt.mp4"

const VideoIntro = () => {


  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // Újraindítás a videó visszatekerésével
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };
  return (
    <div>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className=" relative w-full h-full">
          <video
          ref={videoRef}
            src={teszt}
            type="video/mp4"
            controls={false}
            autoPlay
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
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
