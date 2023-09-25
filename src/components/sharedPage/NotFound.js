import React from "react";

import notFoundPageImg from "../../assets/Images/404pageNotFound.jpg";

export default function NotFound() {
  return (
    <div className="my-24 flex-col sm:flex-row md:flex">
      <div className="lg:p-32 sm:pt-16">
        <h1 className="mt-10 text-rose-600">Aha! see you can be wrong!</h1>
        <h3 className="">Or it could be us!</h3>
        <p>...either way you should probrable go back to home page...</p>
        <a href="/" role="button" className="btn mt-5 bg-rose-600">
          Go Back Home
        </a>
      </div>
      <div>
        <img src={notFoundPageImg} alt="Not found page" />
      </div>
    </div>
  );
}
