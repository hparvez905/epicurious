import React from "react";
import FindRecipes from "../Home/FindRecipes";
import CookThisNow from "../../sharedPage/CookThisNow";
import RecipesMenusBigGuide from "./RecipesMenusBigGuide";
import Products from "../Home/Products";
import HomeCard from "../Home/HomeCard";

const RecipesMenus = () => {
   return (
      <div>
         <FindRecipes></FindRecipes>
         <CookThisNow></CookThisNow>
         <Products></Products>
         <RecipesMenusBigGuide></RecipesMenusBigGuide>
         <HomeCard></HomeCard>
      </div>
   );
};

export default RecipesMenus;
