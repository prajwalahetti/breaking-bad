import spinner from "../img/spinner.gif";
import React from "react";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading"
        style={{ width: "200px", margin: "auto", display: "black" }}
      />
    </div>
  );
};

export default Spinner;
