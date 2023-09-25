/* eslint-disable react/prop-types */
import React from "react";
import recipesImg from "../../../assets/Images/CandiedCitrus_RECIPE_080420_37712.jpg";

export default function Recipe({
  img = recipesImg,
  heading = "recipes",
  title = "recipes title lorem",
}) {
  return (
    <div className="recipes_items">
      <div className="recipes_img overflow-hidden mb-4">
        <img src={img} alt="recipes img" className="h-44 rounded-full" />
      </div>
      <div className="recipes_info">
        <a href="/">
          <h2 className="recipes_litle hover:underline text-black font-semibold">
            {title}
          </h2>
        </a>
        <h3 className="recipes_heading uppercase my-4">{heading}</h3>
      </div>
    </div>
  );
}
