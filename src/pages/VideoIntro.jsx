import React, { useRef,useEffect } from "react";
import { useLocation } from "react-router-dom";
const VideoIntro = () => {
  const videoRef = useRef(null);
  const location = useLocation();
  const handleVideoEnd = () => {
    // Újraindítás a videó visszatekerésével
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    // Újratöltjük a videót, amikor az útvonal változik
    if (videoRef.current && location.pathname === "/intro") {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [location]);
  return (
    <div>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className=" relative w-full h-full">
          <video
            ref={videoRef}
            src={
              "https://cockers-43ccb.web.app/videos/English_interview_teszt_2.mp4"
            }
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
