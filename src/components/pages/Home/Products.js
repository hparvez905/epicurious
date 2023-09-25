import React from "react";
import Product from "./Product";
import moonCakesImg from "../../../assets/Images/Mooncakes_HERO_091321_20978.jpg";
import readPaperPastaImg from "../../../assets/Images/RedPepperPasta_HERO_040821_12876.jpg";

export default function Products() {
   return (
      <div className="container mx-auto lg:pt-24 pt-40">
         <div>
            <div className="products lg:flex justify-center flex lg:flex-row flex-col lg:gap-8 items-center">
               <Product
                  heading="meal plan"
                  title="A Week of Easy Dinners to Get You Back in the Cooking Groove"
                  author="by anna hezel"
                  img={moonCakesImg}
               />
               <Product
                  heading="dessert"
                  title="A Week of Easy Dinners to Get You Back in the Cooking Groove"
                  author="By Genevieve Yam"
                  img={readPaperPastaImg}
               />
            </div>
         </div>
      </div>
   );
}
