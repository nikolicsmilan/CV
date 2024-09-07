import React from 'react';
import city from "../assets/city.mp4";
import space from "../assets/space.mov";


const BackgroundVideo = () => {
  return (
    <div className="background-video-container ">
      <video className="background-video" autoPlay loop muted>
        <source src={space} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content2">
        {/* Your other content goes here */}
        deewq mi van itt

        
      </div>
    </div>
  );
}

export default BackgroundVideo;

/*
    <div className="flex justify-center h-screen border-0 border-red-400">



      
      <div
        className={`border-0 ring-1 shadow-2xl  text-primary text-md mx-2 bg-sky-500  my-10 rounded-xl p-2 w-full  lg:w-1/2 h-56 lg:h-56 ring-sky-300  ${
          style === "space" ? "border-sky-800" : ""
        }`}
        style={{
          boxShadow: "-4px 3px 8px rgba(34, 211, 238, 0.8)",
          backgroundColor: "rgba(0, 1, 8, 0.8)",
        }}
      >
        <TypingAnimation customcontent={getTextContent()} />
      </div>

   
    </div>


*/