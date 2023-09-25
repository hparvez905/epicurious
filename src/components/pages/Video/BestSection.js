import React, { useEffect, useState } from "react";
import BestOfEpiCarousel from "./BestOfEpiCarousel";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const BestSection = () => {
  const [bestOfEpi, setbestOfEpi] = useState([]);

  useEffect(() => {
    fetch("https://project-epicurious-backendapi.onrender.com/bestOfEpiData")
      .then((res) => res.json())
      .then((data) => setbestOfEpi(data));
  }, []);

  return (
    <div className="pt-4 pb-10 bg-gray-200">
      <div className="lg:w-[870px] w-full mx-auto ">
        <h2 className="my-6 uppercase text-xl font-semibold lg:text-start">
          Best of Epicurious
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          slidesPerGroup={2}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {bestOfEpi.map((singleBestItem) => (
            <SwiperSlide key={singleBestItem._id}>
              <BestOfEpiCarousel
                singleBestItem={singleBestItem}
              ></BestOfEpiCarousel>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSection;
