import React from "react";
import Circle from "./Circle";
import { CSSTransition } from "react-transition-group";

const Bestclass = (props) => (
  <section>
    <h2>Лучший класс в предмете</h2>
    <div className="section_content">
      <CSSTransition in={true} timeout={200} classNames="my-node">
        <div>
          <Circle backgroundColor={"#BB86FC"} />
          <Circle backgroundColor={"#3700B3"} />
          <Circle backgroundColor={"#03DAC6"} />
          <Circle backgroundColor={"#CF6679"} />
          <Circle backgroundColor={"#FF5B01"} />
          <Circle backgroundColor={"#CF6679"} />
          <Circle backgroundColor={"#DDDD88"} />
        </div>
      </CSSTransition>
    </div>
  </section>
);
export default Bestclass;
