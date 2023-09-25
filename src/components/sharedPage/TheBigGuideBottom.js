import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TheBigGuideBottom = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, img } = data;

  console.log(title, id);
  return (
    <div className="hover:underline text-xl text-start font-semibold flex lg:gap-6 gap-4 pb-5">
      <img src={img} alt="big guide content" className="w-[116px] h-[77px]" />
      <p>
        <Link to={`details/${id}`}>{title}</Link>
      </p>
    </div>
  );
};

export default TheBigGuideBottom;
