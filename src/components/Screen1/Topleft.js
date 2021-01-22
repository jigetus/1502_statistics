import React from "react";
import Circle from "./Circle";

const Topleft = (props) => {
  const findbyTitle = (title) => {
    let tmp = null;
    props.best.forEach((el) => {
      if (el.title === title) tmp = el;
    });
    return tmp;
  };
  return (
    <section className="top" id="topleft">
      <Circle
        subject={findbyTitle("Русский язык")}
        icon="rus"
        type={"svg"}
        offset={1}
        delay={500}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Литература")}
        icon="litra2"
        type={"svg"}
        delay={600}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Английский язык")}
        icon="en2"
        type={"svg"}
        delay={700}
        offset={1}
        animationTop={true}
      />
    </section>
  );
};
export default Topleft;
