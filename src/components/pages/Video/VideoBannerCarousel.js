/* eslint-disable react/prop-types */
import React from "react";

const VideoBannerCarousel = (props) => {
  const { img, categories, title } = props.vData;

  return (
    <div className="relative mx-auto bg-gradient-to-t from-black to-gradient">
      <img
        src={img}
        alt="video thumbnail"
        className="w-full lg:h-[32vw] h-48 mix-blend-overlay"
      />
      <div className="block text-start">
        <h4 className="absolute lg:block hidden text-white top-[18.5rem]font-medium uppercase text-md mx-12">
          {categories}
        </h4>
        <h2 className="absolute text-white lg:top-80 top-32 font-semibold lg:text-3xl text-sm lg:ml-12 ml-4 lg:mr-20 mr-6">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default VideoBannerCarousel;
