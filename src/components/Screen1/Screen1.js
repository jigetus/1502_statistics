import React from "react";
import Topleft from "./Topleft";
import Topright from "./Topright";
import Bottomleft from "./Bottomleft";
import Bottomright from "./Bottomright";
import ReactTypingEffect from "react-typing-effect";
const Screen1 = (props) => {
  return (
    <>
      <ReactTypingEffect
        text={["ЛУЧШИЙ КЛАСС В ПРЕДМЕТЕ "]}
        className="bestclass_title"
        speed={40}
        eraseDelay={800000000000}
        typingDelay={0}
        cursorRenderer={(cursor) => <></>}
      />
      <Topleft best={props.best} />
      <Topright best={props.best} />
      <Bottomleft best={props.best} />
      <Bottomright best={props.best} />
    </>
  );
};
export default Screen1;
