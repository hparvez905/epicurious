import React, { useState } from "react";
import bannerImage from "../../../assets/Images/banner_img.jpg";
import { ImSearch } from "react-icons/im";
import { BsArrowRightCircleFill } from "react-icons/bs";
import SearchModal from "./SearchModal";

const Banner = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <>
      <div
        style={{ height: "486px" }}
        className="relative items-center w-full mt-16"
      >
        <img
          src={bannerImage}
          alt="banner iamge"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="block">
          <h1 className="absolute font-bold text-white lg:text-6xl text-4xl top-40 lg:top-32 w-full">
            Find a Recipe
          </h1>
          <div className="flex justify-center">
            <label
              htmlFor="search-modal"
              className="absolute font-bold text-gray-400 text-3xl lg:w-1/2 w-10/12 top-1/2 text-center border bg-gray-100 hover:text-gray-900 hover:cursor-pointer lg:py-4 py-2 pl-4 lg:pl-6 opacity-80 modal-button"
              onClick={() => setShowSearchModal(true)}
            >
              <ImSearch />
            </label>
          </div>
          <h1 className="absolute font-bold text-white lg:text-md text-sm top-80 w-full text-center hover:underline cursor-pointer ">
            ADVANCED SEARCH{" "}
            <BsArrowRightCircleFill className="mx-auto hover:underline cursor-pointer text-2xl mt-2" />
          </h1>
        </div>
      </div>
      {showSearchModal && <SearchModal />}
    </>
  );
};

export default Banner;
