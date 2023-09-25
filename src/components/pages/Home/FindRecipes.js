/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const FindRecipes = () => {
  return (
    <div className="my-24">
      {/* find recipes section start */}
      <section>
        <div className="text-2xl font-semibold flex justify-start ml-10 md:ml-32 lg:ml-60 mt-20">
          <h1>RECIPES & MENUS</h1>
        </div>

        <div className="lg:flex justify-around lg:px-60 lg:py-10">
          <div className="p-10">
            <h1 className="lg:text-6xl text-4xl font-semibold lg:font-bold text-sky-700">
              FIND A RECIPE
            </h1>
            <div className="flex item-center justify-center p-6 ">
              <div className="flex w-full lg:w-96 rounded border-2  ">
                <input
                  type={"Search"}
                  name="search"
                  id="search"
                  placeholder="Search 330,000+ recipes"
                  className="w-full px-4 bg-gray-100 py-1 text-gray-900 outline-none focus:none"
                />
                <button className="rounded bg-teal-800 px-6 py-3 text-white">
                  Search
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex justify-evenly mb-4">
                <h5 className="text-lg text-sky-600 font-semibold">
                  {" "}
                  <a
                    href="https://www.epicurious.com/search"
                    className="hover:underline underline-offset-0   mx-2 p-1   leading-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WHAT'S NEW
                  </a>
                </h5>
                <div className="border-r-2 border-gray-400 "></div>
                <h5 className=" text-lg text-sky-600 font-semibold">
                  {" "}
                  <a
                    href="https://www.epicurious.com/search?special-consideration=healthy"
                    className="hover:underline underline-offset-0   mx-2 p-1   leading-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HEALTHY
                  </a>
                </h5>
                <div className="border-r-2 border-gray-400 "></div>
                <h5 className="text-lg text-sky-600 font-semibold">
                  {" "}
                  <a
                    href="https://www.epicurious.com/search?special-consideration=quick-and-easy"
                    className="hover:underline underline-offset-0    mx-2 p-1   leading-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    QUICK & EASY
                  </a>
                </h5>
              </div>
              <div className="flex justify-evenly">
                <h5 className="text-lg text-sky-600 font-semibold">
                  {" "}
                  <a
                    href="https://www.epicurious.com/holidays-events"
                    className="hover:underline underline-offset-0    mx-2 p-1   leading-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HOLIDAY
                  </a>
                </h5>
                <div className="border-r-2 border-gray-400 "></div>
                <h5 className="text-lg text-sky-600 font-semibold">
                  {" "}
                  <a
                    href="https://www.epicurious.com/search?special-consideration=wheat-gluten-free"
                    className="hover:underline underline-offset-0    mx-2 p-1   leading-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GLUTEN-FREE
                  </a>
                </h5>
                <div className="border-r-2 border-gray-400 "></div>
                <h5 className="text-lg text-sky-600 font-semibold">
                  {" "}
                  <a
                    href="https://www.epicurious.com/search?special-consideration=vegetarian"
                    className="hover:underline underline-offset-0    mx-2 p-1   leading-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VEGETARIAN
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <span className="border-r-2 border-gray-300"></span>
          <div className="py-10 pl-8">
            <h1 className="lg:text-6xl text-4xl font-semibold lg:font-bold text-rose-600">
              CREATE A MENU
            </h1>
            <div className="p-4 mt-10">
              <p className="text-xl font-semibold">
                Use our new menu creator to create your own
              </p>
              <p className="text-xl font-semibold">
                {" "}
                menu collection from any recipes and share it
              </p>
              <p className="text-xl font-semibold">with friends!</p>
            </div>

            <div className="flex justify-center">
              <a
                href="https://id.condenast.com/interaction/nnPP-NADhxjdTFZ8GlWNk/email?xid=22d82be7-60f3-4b62-9cde-2bb784a73434&scope=openid%20offline_access&state=%7B%22redirectURL%22%3A%22%2Faccount%2Fsaved%22%7D&prompt=select_account%20consent&client_id=condenast.identity.bd96ef0e8186fcea33396720bc76b8b9&redirect_uri=https%3A%2F%2Fwww.epicurious.com%2Fauth%2Fcomplete&response_type=code"
                className="hover:underline underline-offset-0 text-xl text-rose-500 font-semibold mx-2 p-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                CREATE A MENU{" "}
              </a>
              <IoMdArrowDropright className="text-2xl text-rose-600 mt-1 pt-1"></IoMdArrowDropright>
            </div>
          </div>
        </div>
      </section>
      {/* find recipes section End */}
    </div>
  );
};

export default FindRecipes;
