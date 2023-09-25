/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Newsletter = () => {
  return (
    <div>
      <div className="py-8 bg-rose-600 lg:flex grid items-center justify-center gap-12">
        <h3 className="lg:text-xl lg:px-0 px-28 text-white font-semibold ">
          Get our latest recipes and expert tips right in your inbox
        </h3>
        <div className="flex mx-auto lg:mx-0 lg:w-80 w-4/6 border">
          <input
            type={"Search"}
            name="search"
            id="search"
            placeholder="YOUR EMAIL ADDRESS"
            className="w-full px-4 bg-gray-100 py-1 text-gray-900 outline-none focus:none"
          />
          <button className="rounded bg-black px-6 py-3 text-white">
            Search
          </button>
        </div>
      </div>
      <div className="lg:flex grid justify-center lg:gap-8 gap-2 lg:px-60 px-10 py-6 bg-slate-100">
        <div className="flex justify-center gap-2">
          <AiOutlineCheckCircle className="inline-block text-8xl pb-12 text-green-500 cursor-pointer" />
          <div>
            <h2 className="text-green-500 text-2xl font-semibold hover:underline cursor-pointer text-start">
              THE TOP TEN
            </h2>
            <p className="text-start text-xs font-semibold">
              Become a better cook instantly with this weekly report of our ten
              most helpful tips, tricks, and kitchen secrets. Don't miss it!
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <AiOutlineCheckCircle className="inline-block text-8xl pb-12 text-green-500 cursor-pointer" />
          <div>
            <h2 className="text-green-500 text-2xl font-semibold hover:underline cursor-pointer text-start">
              COOK THIS NOW
            </h2>
            <p className="text-start text-xs font-semibold">
              Love recipes, but hate searching? We do the work for you. You'll
              get our favorite seasonal recipe plus collections of our exclusive
              editors' picks.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <AiOutlineCheckCircle className="inline-block text-8xl pb-12 text-green-500 cursor-pointer" />
          <div>
            <h2 className="text-green-500 text-2xl font-semibold hover:underline cursor-pointer text-start">
              TRENDING RECIPES
            </h2>
            <p className="text-start text-xs font-semibold">
              Get a daily does of the hottest recipes from Epicurious, Bon
              Appétit, and other great sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
