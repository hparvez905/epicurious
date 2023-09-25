import React from "react";
import { useParams } from "react-router-dom";
import ingredientsCardTop from "./ingredients_cards.json";
const IngrediantsDetails = () => {
  const ingredientsTopSingle = ingredientsCardTop;
  console.log(ingredientsTopSingle);
  const id = useParams();
  console.log(id);
  const findSingalData = ingredientsTopSingle.find(
    (detail) => detail.id == id.id
  );
  console.log(findSingalData);
  return (
    <div>
      {" "}
      <div className="flex-col items-center flex justify-center mt-20 lg:m-40">
        <a href="/">
          <div className="flex items-center  justify-center flex-col outline-slate-50  outline-2 outline ">
            <div className="">
              <img src={findSingalData.img} alt="ingredents images" />
            </div>
            <div className="bg-white  w-[85%]">
              <div className="p-6">
                <h2 className="heading uppercase text-xs tracking-tighter font-semibold leading-loose text-red-600">
                  {findSingalData.category}
                </h2>
                <p className=" title hover:underline text-2xl my-5 text-black font-semibold cursor-pointer pb-2">
                  {findSingalData.title}
                </p>
                <p>{findSingalData.innerSubTitle}</p>
                <hr className="mx-16" />
                <div className="flex justify-center gap-2 pt-4">
                  <h3 className="uppercase text-xs font-sans text-black font-semibold tracking-widest">
                    {findSingalData.author}
                  </h3>
                </div>
                <span className="text-black font-mono text-xs oldstyle-nums ">
                  {findSingalData.date}
                </span>
                <div>
                  <p className="font-light text-left text-sm my-7">
                    {findSingalData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default IngrediantsDetails;
