import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import TheBigGuideBottom from "../../sharedPage/TheBigGuideBottom";
import bigGuideData from "./home_bigGuide.json";

const HomeBigGuide = () => {
   const bigGuideTop = bigGuideData[0];
   const bigGuideBottom = bigGuideData.slice(1, 4);

   return (
      <div className="my-16 relative">
         <div className="flex items-center justify-center relative">
            <a href="https://www">
               <img
                  src={bigGuideTop.img}
                  alt="big guide poster"
                  className="lg:w-[1004px] lg:h-[500px]"
               />
            </a>
            <button className="absolute w-48 h-12 p-2 font-semibold text-white text-lg bg-rose-600 -top-6">
               THE BIG GUIDE
            </button>
         </div>
         <div className="grid lg:grid-cols-2 grid-cols-1 divide-x py-8">
            <div className="lg:pl-[16rem] pl-10 pr-4">
               <a
                  href="https://www.epicurious.com/recipes-menus/best-fall-baking-recipes-gallery"
                  className="hover:underline cursor-pointer flex lg:text-start text-center text-5xl font-bold"
               >
                  {bigGuideTop.title}
               </a>
               <p className="text-sm mt-8 lg:text-start text-center">
                  Find all of our gift-giving advice here.
               </p>
               <div className="flex lg:justify-start justify-center mt-12">
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
            <div className="lg:pl-10 pl-4 lg:pr-64 pr-4 lg:pt-0 pt-12">
               {bigGuideBottom.map((data) => (
                  <TheBigGuideBottom
                     key={data.id}
                     data={data}
                  ></TheBigGuideBottom>
               ))}
            </div>
         </div>
      </div>
   );
};

export default HomeBigGuide;
