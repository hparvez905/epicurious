import React from "react";
import Recipe from "./Recipe";
import { Swiper, SwiperSlide } from "swiper/react";
import recipesData from "../../../assets/data/RecipesData";

// swiper style import
import "swiper/css";

export default function NewestRecipes() {
  return (
    <div className="h-full newest_recipes bg-slate-100">
      <div className="lg:mx-40 sm:p-2">
        <div className="recipes_header py-4">
          <div className="divider md:inline-flex lg:inline-flex w-full lg:mt-16 text-black">
            <h1 className="font-bold font-serif lg:text-3xl text-xl">
              Our Newest Recipes
            </h1>
          </div>
        </div>
        <div className="recipes_allItems md:m-8 mb-8">
          <Swiper
            spaceBetween={5}
            slidesPerView={5}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 2,
              },
              // when windows width is >= 640px
              640: {
                slidesPerView: 3,
              },
              // when windows width is >= 768px
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {recipesData.map((recipe, index) => {
              if (index >= 5) return "";
              return (
                <SwiperSlide key={recipe.id}>
                  <Recipe
                    title={recipe.title}
                    img={recipe.img}
                    heading={recipe.heading}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
