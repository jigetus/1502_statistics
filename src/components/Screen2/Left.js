import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Top10 from "./Top10";

const Left = (props) => {
  return (
    <div className="vertical" id="left">
      <ReactTypingEffect
        text={["ТОП 10 КЛАССОВ"]}
        className="section_title"
        speed={60}
        eraseDelay={800000000000}
        typingDelay={0}
        style={{ paddingTop: 40, paddingBottom: 30 }}
        cursorRenderer={(cursor) => <></>}
      />
      <Top10 top={props.top} />
    </div>
  );
};
export default Left;
