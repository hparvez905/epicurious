import React from "react";
import image1 from "../../../assets/Images/f1.avif";
import image2 from "../../../assets/Images/f2.avif";
import image3 from "../../../assets/Images/f3.avif";
import image4 from "../../../assets/Images/f4.avif";
import image5 from "../../../assets/Images/f5.avif";
import image6 from "../../../assets/Images/f6.avif";

const HomeCard = () => {
   return (
      <div>
         <hr className="py-6 mx-12" />
         <div>
            <section className="md:h-full flex items-center text-gray-600">
               <div className="container px-5 py-5 mx-auto">
                  <div className="flex flex-wrap m-4 ">
                     <div className="p-4 sm:w-1/2 lg:w-1/3 ">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img
                              src={image1}
                              className="lg:h-72 md:h-48 w-full object-cover object-center"
                              alt="meal-1"
                           />
                           <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                              <h2 className="text-base font-medium text-indigo-300 mb-1">
                                 Meal Plan
                              </h2>
                              <h1 className="text-2xl font-semibold mb-3">
                                 <u>
                                    A Week of Easy Dinners to Get You Back in
                                    the Cooking Groove
                                 </u>
                              </h1>
                              <p className="leading-relaxed mb-3 text-orange-500">
                                 BY ANNA HIZAL
                              </p>
                              <div className="flex item-center flex-wrap">
                                 <a
                                    href="/"
                                    className="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                                 >
                                    Read more
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img
                              src={image2}
                              className="lg:h-72 md:h-48 w-full object-cover object-center"
                              alt="meal-2"
                           />
                           <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                              <h2 className="text-base font-medium text-indigo-300 mb-1">
                                 SHOPPING
                              </h2>
                              <h1 className="text-2xl font-semibold mb-3">
                                 <u>
                                    Considering a Smart Toaster Oven? Get a
                                    Multi-Oven Instead
                                 </u>
                              </h1>
                              <p className="leading-relaxed mb-3 text-orange-500">
                                 BY EMILY FARRIS
                              </p>

                              <div className="flex item-center flex-wrap">
                                 <a
                                    href="/"
                                    className="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                                 >
                                    Read more
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img
                              src={image3}
                              className="lg:h-72 md:h-48 w-full object-cover object-center"
                              alt="meal-3"
                           />
                           <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                              <h2 className="text-base font-medium text-indigo-300 mb-1">
                                 KITCHEN INTELLIGENCE
                              </h2>
                              <h1 className="text-2xl font-semibold mb-3">
                                 <u>
                                    Why Does Spinach Make My Teeth Feel Weird?
                                 </u>
                              </h1>
                              <p className="leading-relaxed mb-3 text-orange-500">
                                 BY GENEVIEVE YAM
                              </p>

                              <div className="flex item-center flex-wrap">
                                 <a
                                    href="/"
                                    className="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                                 >
                                    Read more
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img
                              src={image4}
                              className="lg:h-72 h-48 w-full object-cover object-center"
                              alt="imagealt"
                           />
                           <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                              <h2 className="text-base font-medium text-indigo-300 mb-1">
                                 FALL
                              </h2>
                              <h1 className="text-2xl font-semibold mb-3">
                                 <u>Our Best September Recipes for 2022</u>
                              </h1>
                              <p className="leading-relaxed mb-3 text-orange-500">
                                 THE EDITORS OF EPICURIOUS
                              </p>

                              <div className="flex item-center flex-wrap">
                                 <a
                                    href="/"
                                    className="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                                 >
                                    Read more
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img
                              src={image5}
                              className="lg:h-72 h-48 w-full object-cover object-center"
                              alt="imagealt"
                           />
                           <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                              <h2 className="text-base font-medium text-indigo-300 mb-1">
                                 Meal Plan
                              </h2>
                              <h1 className="text-2xl font-semibold mb-3">
                                 <u>
                                    A Week of Easy Dinners to Get You Back in
                                    the Cooking Groove
                                 </u>
                              </h1>
                              <p className="leading-relaxed mb-3 text-orange-500">
                                 BY ANNA HIZAL
                              </p>
                              <div className="flex item-center flex-wrap">
                                 <a
                                    href="/"
                                    className="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                                 >
                                    Read more
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                           <img
                              src={image6}
                              className="lg:h-72 h-48 w-full object-cover object-center"
                              alt="imagealt"
                           />
                           <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                              <h2 className="text-base font-medium text-indigo-300 mb-1">
                                 COOKBOOKS
                              </h2>
                              <h1 className="text-2xl font-semibold mb-3">
                                 <u>
                                    This Vegan Cookbook Celebrates Chinese Home
                                    Cooking
                                 </u>
                              </h1>
                              <p className="leading-relaxed mb-3 text-orange-500">
                                 BY GENEVIEVE YAM
                              </p>
                              <div className="flex item-center flex-wrap">
                                 <a
                                    href="/"
                                    className="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                                 >
                                    Read more
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default HomeCard;
