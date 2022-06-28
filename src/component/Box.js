import React from "react";

const Box = (props) => {
  console.log("props:", props);
  return (
    <div className="box">
      Box1
      <p>리사</p>
    </div>

    /*
    <div className="box">
      Box{props.num}
      <p>{props.name}</p>
    </div>
    */
  );
};

export default Box;
