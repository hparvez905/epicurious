/* eslint-disable react/prop-types */
import React from "react";
import ProductInfo from "./ProductInfo";

export default function Product({
  heading = "",
  title = "",
  author = "",
  img = "",
}) {
  return (
    <div className="card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <img src={img} alt="meal" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center -mt-10">
        <ProductInfo heading={heading} title={title} author={author} />
      </div>
    </div>
  );
}
