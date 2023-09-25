import React from "react";
import Images from "../../../assets/Images/allBooks.png";

export default function BookRelease() {
   return (
      <div className="flex-col items-center flex justify-center mt-12 mb-20 ">
         <a href="/">
            <div className="relative flex justify-center hover:underline">
               <div className="ingridents-img outline-slate-50 outline-2 outline -outline-offset-[15px] ">
                  <img src={Images} alt="images" />
               </div>
               <div className="bg-white lg:-bottom-[9.5rem] absolute w-[85%] bottom-[-250px]">
                  <div className="p-6">
                     <h2 className="heading uppercase text-indigo-300">
                        brussels sprout
                     </h2>
                     <p className=" title hover:underline text-2xl my-5 text-black font-semibold cursor-pointer pb-4">
                        31 Ways to Make Crispy, Crunchy, Caramelized Brussels
                        Sprouts
                     </p>
                     <hr className="mx-16 pb-4" />
                     <div className="flex justify-center gap-2 pt-4">
                        <h3 className="uppercase text-red-600">
                           by the editors of epicurious{" "}
                        </h3>
                        <span className="text-slate-300">/ 11.15.22</span>
                     </div>
                  </div>
               </div>
            </div>
         </a>
      </div>
   );
}
