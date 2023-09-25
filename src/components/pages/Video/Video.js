import React from "react";
import BestSection from "./BestSection";
import NewestVideos from "./NewestVideos";
import VideoBanner from "./VideoBanner";

const Video = () => {

  
  return (
    <div className='my-16'>
      <VideoBanner></VideoBanner>
      <BestSection></BestSection>
      <NewestVideos></NewestVideos>
    </div>
  );
};

export default Video;
