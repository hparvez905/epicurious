import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import MainImage from "../../assets/Images/main.avif";

const CookThisNow = () => {
   return (
      <div className="lg:mb-0 mb-52">
         {/* main pic added */}
         <a
            href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
            className="flex justify-center lg:relative lg:h-screen"
         >
            <img
               src={MainImage}
               className="lg:w-4/6 w-full lg:h-4/6 h-full object-cover mt-20 outline-slate-50 outline-2 outline -outline-offset-[15px]"
               alt="cook item"
            />

            {/* main pic button  */}
            <div className="absolute lg:block mr-40 group">
               <div className="absolute lg:ml-[650px] lg:mt-[156px] ml-80 mt-12">
                  <button className="lg:w-72 w-48 h-14 p-2 font-semibold text-white text-lg bg-rose-600">
                     COOK THIS NOW
                  </button>
               </div>

               <div className="lg:w-96 w-[100vw] px-6 pt-16 bg-white lg:ml-[600px] ml-40 mt-80 lg:mt-[170px]">
                  <h3>
                     <a
                        href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
                        className="group-hover:underline underline-offset-2 text-4xl text-gray-800 font-semibold mx-2 p-1"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Chocolate-Pecan Sheet Pie
                     </a>
                  </h3>

                  <p className="text-md p-6 font-semibold">
                     Creamy chocolate ganache, sweetened with earthy molasses,
                     and crunchy candied pecans add texture and richness to this
                     eminently shareable dessert.
                  </p>
                  <div className="flex justify-center">
                     <a
                        href="https://www.epicurious.com/recipes/food/views/chocolate-pecan-sheet-pie-with-molasses"
                        className="hover:underline underline-offset-0 text-md  font-semibold mx-2 p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#f93f23" }}
                     >
                        VIEW RECIPE{" "}
                     </a>
                     <IoMdArrowDropright
                        className="text-2xl mt-1 pt-2"
                        style={{ color: "#f93f23" }}
                     ></IoMdArrowDropright>
                  </div>
               </div>
            </div>
         </a>
      </div>
   );
};

export default CookThisNow;
