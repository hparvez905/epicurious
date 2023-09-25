/* eslint-disable react/prop-types */
import React from "react";

export default function ProductInfo({
  // eslint-disable-next-line react/prop-types
  heading = "Meal Plan",
  title = "this is meal",
  author = "author name",
}) {
  return (
    <div className="section_title p-6">
      <h2 className="heading uppercase text-slate-300">{heading}</h2>
      <p className=" title hover:underline text-2xl my-3 text-black font-semibold cursor-pointer">
        {title}
      </p>
      <hr className="mx-16 pb-4" />
      <h3 className="uppercase text-red-600">{author}</h3>
    </div>
  );
}
