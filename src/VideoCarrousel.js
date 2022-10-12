import React from "react";
import video from "./assets/video/videotest.mp4"

const VideoCarrousel = () => {
  return (
    <>
      <video src={video} loop={true} autoPlay={true} muted={true} width="100%" height="720" controls></video>
    </>
  );
};

export default VideoCarrousel;
