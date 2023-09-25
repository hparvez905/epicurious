import React from "react";
import * as FaIcons from "react-icons/fa";

const SearchModal = () => {
  return (
    <div>
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-full max-w-full h-full max-h-full relative opacity-90 bg-gray-400">
          <label
            htmlFor="search-modal"
            className="btn btn-sm btn-circle absolute lg:right-52 lg:top-32 top-1 right-1"
          >
            ✕
          </label>
          <form action="" className="lg:mt-40 mt-4 w-full lg:px-52">
            <div className="relative flex items-center text-gray-500 focus-within:text-gray-700">
              <FaIcons.FaSearch className="absolute lg:w-8 w-4 lg:h-8 h-4 lg:ml-4 ml-1 pointer-events-none z-10" />
              <input
                type="text"
                name="Search"
                placeholder="Find a Recipe..."
                aria-label="Find a Recipee"
                className="w-full placeholder:italic placeholder:text-slate-400 bg-white border-gray-600 border-b-4 rounded-md lg:py-4 py-1 lg:pl-16 lg:pr-3 pl-6 shadow-md focus:outline-none focus:border-rose-600 focus:ring-rose-600 focus:ring-1 lg:text-3xl opacity-80 lg:font-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
