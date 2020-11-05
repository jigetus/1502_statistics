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
        subject={findbyTitle("Алгебра")}
        icon="algebra2"
        type={"svg"}
        delay={0}
        offset={1}
      />
      <Circle
        subject={findbyTitle("Биология")}
        icon="biologija2"
        type={"svg"}
        delay={100}
        offset={1}
      />
      <Circle
        subject={findbyTitle("Английский язык")}
        icon="en2"
        type={"svg"}
        offset={1}
        delay={200}
      />
      <Circle
        subject={findbyTitle("Физика")}
        icon="Fizika2"
        type={"svg"}
        delay={300}
        offset={1}
      />
      <Circle
        subject={findbyTitle("География")}
        icon="geografija2"
        type={"svg"}
        delay={400}
        offset={1}
      />
      <Circle
        subject={findbyTitle("Геометрия")}
        icon="geom2"
        type={"svg"}
        delay={500}
        offset={1}
      />
    </section>
  );
};
export default Topleft;
