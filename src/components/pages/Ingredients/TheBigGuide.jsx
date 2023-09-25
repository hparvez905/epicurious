import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import bigGuideImg from "../../../assets/Images/big_guide_img.webp";
import bigGuideC1 from "../../../assets/Images/bigGuideContent3.webp";
import bigGuideC2 from "../../../assets/Images/bigGuideContent2.webp";
import bigGuideC3 from "../../../assets/Images/bigGuideContent1.webp";

const TheBigGuide = () => {
  return (
    <div className="my-16 relative">
      <div className="flex items-center justify-center relative">
        <a
          href="https://www.epicurious.com/recipes-menus/best-fall-baking-recipes-gallery"
          className=""
        >
          <img src={bigGuideImg} alt="big guide poster" />
        </a>
        <button className="absolute w-48 h-12 p-2 font-semibold text-white text-lg bg-rose-600 -top-6">
          THE BIG GUIDE
        </button>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 divide-x py-8">
        <div className="lg:pl-[16rem] pl-10 pr-4">
          <a
            href="https://www.epicurious.com/recipes-menus/best-fall-baking-recipes-gallery"
            className="hover:underline cursor-pointer flex lg:text-start text-center text-5xl font-semibold"
          >
            67 Fall Desserts to Cozy Up to All Season Long
          </a>
          <p className="text-sm mt-8 lg:text-start text-center">
            It's time to get baking.
          </p>
          <div className="flex lg:justify-start justify-center mt-6">
            <a
              href="https://www.epicurious.com/recipes-menus/best-fall-baking-recipes-gallery"
              className="hover:underline underline-offset-0 text-sm text-rose-500 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW COMPLETE GUIDE
            </a>
            <IoMdArrowDropright className="inline-block text-2xl text-rose-600"></IoMdArrowDropright>
          </div>
        </div>
        <div className="pl-10 lg:pr-64 lg:pt-0 pt-12">
          <a
            href="https://www.epicurious.com/expert-advice/reverse-creaming-cake"
            className="hover:underline text-lg text-start font-semibold flex gap-4"
          >
            <img src={bigGuideC1} alt="big guide content" />
            <p>
              With This Easy Cake Method, You'll Never Cream Butter and Sugar
              Together Again
            </p>
          </a>
          <a
            href="https://www.epicurious.com/recipes-menus/cake-recipes"
            className="hover:underline text-lg text-start font-semibold flex gap-4 mt-4"
          >
            <img src={bigGuideC2} alt="big guide content" />
            <p>
              Find the Perfect Cake Recipe for Your Current Mood With Our
              Interactive Recipe Tool
            </p>
          </a>
          <a
            href="https://www.epicurious.com/expert-advice/marjolaine-classic-french-cake-tastes-like-the-worlds-best-candy-bar-article"
            className="hover:underline text-lg text-start font-semibold flex gap-4 mt-4"
          >
            <img src={bigGuideC3} alt="big guide content" />
            <p>
              This Classic French Cake Tastes Like the World’s Best Candy Bar
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TheBigGuide;
