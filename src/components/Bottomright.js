import React from "react";
import Circlechart from "./Circlechart";
import ReactTypingEffect from "react-typing-effect";

const Bottomright = (props) => (
  <section className="bottom" id="bottomright">
    <ReactTypingEffect
      text={["ИНФОГРАФИКА"]}
      className="section_title"
      speed={60}
      eraseDelay={800000000000}
      typingDelay={0}
    />
    <div className="graphs">
      <Circlechart series={23} title={"Учебный год"} measure={"%"} />
      <Circlechart
        series={45}
        title={"До каникул"}
        alternativeValue={"4 дня"}
      />
      <Circlechart
        series={66}
        title={"Что-нибудь"}
        alternativeValue={"8 дней"}
      />
    </div>
  </section>
);
export default Bottomright;
