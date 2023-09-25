/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewestVideo from "./NewestVideo";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineDown } from "react-icons/ai";

const NewestVideos = () => {
  const [allVideoData, setAllVideoData] = useState([]);
  const [visibleData, setVisibleData] = useState(12);

  const showMore = () => {
    setVisibleData((previousVis) => previousVis + 4);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    fetch("https://project-epicurious-backendapi.onrender.com/videoData")
      .then((res) => res.json())
      .then((data) => setAllVideoData(data));
  });

  return (
    <div className="bg-gray-100 lg:px-52 py-10 drop-shadow-xl">
      <div className="my-6 lg:flex block justify-between">
        <h2 className="uppercase text-xl font-semibold lg:text-start">
          Newest Videos
        </h2>

        <Menu as="div" className="relative inline-block text-left ">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white lg:mt-0 mt-10 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              ALL CATEGORIES
              <AiOutlineDown
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-1 z-10 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      HOW-TO
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      CHEFS
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      HOLIDAYS
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      CUISINES
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      DRINKING
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      EVENTS
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      ENTERTAINING
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      RECIPES
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Q&A
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      PEOPLE
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 pt-8 pb-6">
        {allVideoData.slice(0, visibleData).map((singleVideoData) => (
          <NewestVideo
            key={singleVideoData._id}
            singleVideoData={singleVideoData}
          ></NewestVideo>
        ))}
      </div>

      {allVideoData.length !== visibleData ? (
        <div className="lg:text-start">
          <button onClick={showMore} className="btn btn-sm btn-outline">
            More...
          </button>
        </div>
      ) : (
        <div className="lg:text-start">
          <h2 className="text-rose-600 font-semibold">That's all for now!</h2>
        </div>
      )}
    </div>
  );
};

export default NewestVideos;
