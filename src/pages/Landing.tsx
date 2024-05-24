import React from "react";
import Signup from "./Signup";

const Landing = () => {
  return (
    <div className="flex gap-5 mx-10 items-center justify-around">
      <div>
        <h1>this is landing page</h1>
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
};

export default Landing;
