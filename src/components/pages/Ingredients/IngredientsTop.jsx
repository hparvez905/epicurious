import React from "react";
import { Link } from "react-router-dom";
import ingredientsCardTop from "./ingredients_cards.json";

const IngredientsTop = () => {
  const ingredientsTopSingle = ingredientsCardTop[0];
  console.log(ingredientsTopSingle);
  const ingredientsCardTopDouble = ingredientsCardTop.slice(1, 3);
  console.log(ingredientsCardTopDouble);

  return (
    <div>
      <div className="flex-col items-center flex justify-center mt-20 lg:m-40">
        <h1 className="text-2xl uppercase font-bold lg:">ingredients</h1>
        {/* <a href="/"> */}
        <div className="flex items-center  justify-center flex-col outline-slate-50  outline-2 outline -outline-offset-[15px]">
          <div className="">
            <img src={ingredientsTopSingle.img} alt="ingredents images" />
          </div>
          <div className="bg-white lg:-mt-24 w-[85%]">
            <div className="p-6">
              <h2 className="heading uppercase text-indigo-300">
                {ingredientsTopSingle.category}
              </h2>
              <p className=" title hover:underline text-2xl my-5 text-black font-semibold cursor-pointer pb-2">
                <Link to={`details/${ingredientsTopSingle.id}`}>
                  {" "}
                  {ingredientsTopSingle.title}
                </Link>
              </p>
              <hr className="mx-16" />
              <div className="flex justify-center gap-2 pt-4">
                <h3 className="uppercase text-red-600">
                  {ingredientsTopSingle.author}
                </h3>
                <span className="text-indigo-300">
                  {ingredientsTopSingle.date}
                </span>
              </div>
            </div>
          </div>
          <hr className="mx-16 pb-4" />
        </div>
      </div>
    </div>
  );
};

export default IngredientsTop;
