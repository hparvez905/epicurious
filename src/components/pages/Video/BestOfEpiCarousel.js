/* eslint-disable react/prop-types */
import React from "react";
import videoIcon from "../../../assets/Images/video_icon.png";

const BestOfEpiCarousel = (props) => {
  const { img, categories, title } = props.singleBestItem;
  return (
    <div className="lg:h-[360px] h-[240px]">
      <div className="relative">
        <img
          src={img}
          alt="Best of epi img"
          className="bestImg cursor-pointer"
        />
        <img
          width={55}
          src={videoIcon}
          alt="play icon"
          className="playIcon cursor-pointer absolute"
        />
      </div>
      <h2 className="mt-2 font-bold text-base text-start hover:underline cursor-pointer">
        {title}
      </h2>
      <h3 className="text-start text-xs hover:underline cursor-pointer">
        {categories}
      </h3>
    </div>
  );
};

export default BestOfEpiCarousel;
