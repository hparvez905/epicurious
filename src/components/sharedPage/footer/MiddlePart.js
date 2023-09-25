import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTumblrSquare } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImGooglePlus3 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { BsRssFill } from "react-icons/bs";

const MiddlePart = () => {
  return (
    <div className="bg-gray-100">
      {/* // -- middle part of footer-- */}
      <section className="lg:h-96 lg:px-60 py-10 h-1/2 bg-rose-600">
        <div className="lg:flex justify-between ">
          <div className="lg:flex ">
            <div className=" p-2">
              <h1 className="text-5xl font-bold text-white">epicurious</h1>
              <div className="m-2 flex p-2 md:flex justify-center ">
                <BsFacebook className="text-white text-2xl mx-1 "></BsFacebook>
                <FaTwitterSquare className="text-white text-2xl mx-1"></FaTwitterSquare>
                <BsPinterest className="text-white text-2xl mx-1"></BsPinterest>
                <FaTumblrSquare className="text-white text-2xl mx-1"></FaTumblrSquare>
                <TiSocialYoutubeCircular className="text-white text-3xl mx-1"></TiSocialYoutubeCircular>
                <ImGooglePlus3 className="text-white text-2xl mx-1"></ImGooglePlus3>
                <AiFillInstagram className="text-white text-3xl mx-1"></AiFillInstagram>
                <BsRssFill className="text-white text-2xl mx-1"></BsRssFill>
              </div>
            </div>
          </div>
          <div className="lg:flex p-2 hidden">
            <div className="m-4 ">
              <div className="mb-4 ">
                <h3>
                  <a
                    href="https://www.condenast.com/careers"
                    className="hover:underline underline-offset-0 text-xl text-white font-bold mx-2 p-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SITE MAP
                  </a>
                </h3>
              </div>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/recipes-menus"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recipes & Menus
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/expert-advice"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Expert Advice
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/ingredients"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ingredients
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/holidays-events"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Holidays & Events
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://video.epicurious.com/"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </h5>
            </div>
            <div className="m-4">
              <div className="mb-4">
                <h3 className=" text-white text-xl font-bold mx-2 p-1">
                  HELPFUL LINKS
                </h3>
              </div>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/info/epicurious-user-help-article"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscription FAQs
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/about/contact-us"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/about/masthead"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Masthead
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/expert-advice/accessibility-help-article"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accessibility Help
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.condenast.com/careers"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Advertising
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/about/press-center"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Press Center
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/newsletter"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Newsletters
                </a>
              </h5>
            </div>
            <div className="m-4">
              <div className="mb-4">
                <h3 className="text-white text-xl font-bold mx-2 p-1">
                  FOOD INNOVATION GROUP
                </h3>
              </div>
              <h5>
                {" "}
                <a
                  href="https://www.bonappetit.com/"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bon Appetit
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="https://www.epicurious.com/"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Epicurios
                </a>
              </h5>
              <h5>
                {" "}
                <a
                  href="http://www.gourmet.com/"
                  className="hover:underline underline-offset-0  text-white  mx-2 p-1 text-sm font-semibold  leading-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gourment
                </a>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddlePart;
