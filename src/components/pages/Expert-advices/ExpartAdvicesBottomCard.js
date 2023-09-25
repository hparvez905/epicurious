import React from "react";
import cardBottomJson from "./expertAdvice.json";

const ExpartAdvicesBottomCard = () => {
  const cardBottom = cardBottomJson.slice(3, 12);
  return (
    <div>
      <hr className="py-6 mx-20" />
      <div>
        <section className="md:h-full flex items-center text-gray-600">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap m-4 ">
              {cardBottom.map((data) => (
                <div key={data.id} className="p-4 sm:w-1/2 lg:w-1/3 ">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      src={data.cardImg}
                      className="lg:h-72 md:h-48 w-full object-cover object-center"
                      alt="expart-advices card images"
                    />
                    <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                      <h2 className="text-base font-medium text-indigo-300 mb-1">
                        {data.cardCategory}
                      </h2>
                      <h1 className="text-2xl font-semibold mb-3">
                        <u>{data.cardHeading}</u>
                      </h1>
                      <hr className="mx-28 my-5" />
                      <p className="leading-relaxed mb-3 text-orange-500">
                        BY {data.adviceBy} /{" "}
                        <span className="text-indigo-300">{data.postDate}</span>
                      </p>
                      <div className="flex item-center flex-wrap">
                        <a
                          href="/"
                          className="text-indigo-300 inline-flex item-center md:mb-2 lg:mb-0"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExpartAdvicesBottomCard;
