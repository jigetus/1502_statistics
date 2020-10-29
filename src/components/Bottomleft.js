import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Top10 from "./Top10";

const Bottomleft = (props) => (
  <section className="bottom" id="bottomleft">
    <ReactTypingEffect
      text={["ТОП 10 КЛАССОВ"]}
      className="section_title"
      speed={60}
      eraseDelay={800000000000}
      typingDelay={0}
    />
    <Top10 />
  </section>
);
export default Bottomleft;
