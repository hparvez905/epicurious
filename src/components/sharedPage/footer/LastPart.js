import React from "react";

const LastPart = () => {
  return (
    <div className="bg-gray-100  ">
      {/* // -- last part of footer-- */}
      <section
        className="h-76 lg:px-60 py-20  "
        style={{ backgroundColor: "#292929" }}
      >
        <div className="lg:flex justify-between">
          <div className="lg:flex">
            <div className=" p-2">
              <h1 className="text-4xl font-semibold text-gray-600">
                Condé Nast
              </h1>
            </div>
            <div className=" p-2">
              <select
                className=" px-3 py-2 border-gray-500 border-2 text-gray-600"
                style={{ backgroundColor: "#292929" }}
              >
                <option>Condé Nast Websites</option>
                <option>allure</option>
                <option>Architectural Digest</option>
                <option>GQ</option>
                <option>Self</option>
                <option>Lucy</option>
                <option>Style</option>
                <option>Vogue</option>
                <option>Wired</option>
              </select>
            </div>
          </div>
          <div className=" p-2 hidden lg:block">
            <a
              href="https://www.condenast.com/careers"
              className="hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              CAREERS
            </a>
            <a
              href="https://condenaststore.com/"
              className="hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONDE NAST STORE
            </a>
            <a
              href="https://www.condenast.com/reprints-permissions"
              className="hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONDé NAST
            </a>
          </div>
        </div>
        <div className="mt-4">
          <button className=" border-gray-500 border-2  p-2 text-gray-600">
            <a
              href="https://www.epicurious.com/expert-advice/accessibility-help-article"
              className="hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies Setting
            </a>
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-500 text-xs font-semibold">
            © 2022 Condé Nast. All rights reserved.Use of and/or registration on
            any portion of this site constitutes acceptance of our User
            Agreement (updated as of 1/1/21) and (updated as of 1/1/21).Your
            California Privacy Rights. The material on this site may not be
            reproduced, distributed, transmitted, cached or otherwise used,
            except with the prior written permission of Condé Nast.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LastPart;
