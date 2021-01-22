import React from "react";
import Circle from "./Circle";

const Bottomleft = (props) => {
  const findbyTitle = (title) => {
    let tmp = null;
    props.best.forEach((el) => {
      if (el.title === title) tmp = el;
    });
    return tmp;
  };
  return (
    <section className="bottom" id="bottomleft">
      <Circle
        subject={findbyTitle("Физика")}
        icon="fizika2"
        type={"svg"}
        delay={1100}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Химия")}
        icon="Kimija2"
        type={"svg"}
        delay={1200}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Биология")}
        icon="biologija2"
        type={"svg"}
        delay={1300}
        offset={1}
        animationTop={true}
      />
    </section>
  );
};
export default Bottomleft;
