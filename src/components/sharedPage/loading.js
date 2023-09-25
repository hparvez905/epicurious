import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import Signin from "../pages/Register/Signin";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="flex justify-center my-32">
      {loading ? (
        <BounceLoader color={"#36d7b7"} loading={loading} size={300} />
      ) : (
        <Signin></Signin>
      )}
    </div>
  );
};

export default Loading;
