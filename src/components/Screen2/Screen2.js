import React from "react";
import Left from "./Left";
import Right from "./Right";

const Screen2 = (props) => {
  return (
    <>
      <Left top={props.top} />
      <Right />
    </>
  );
};
export default Screen2;
