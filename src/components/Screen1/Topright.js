import React from "react";
import Circle from "./Circle";

const Topright = (props) => {
  const findbyTitle = (title) => {
    let tmp = null;
    props.best.forEach((el) => {
      if (el.title === title) tmp = el;
    });
    return tmp;
  };
  return (
    <section className="top" id="topright">
      <Circle
        subject={findbyTitle("Алгебра")}
        icon="algebra2"
        type={"svg"}
        delay={800}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Геометрия")}
        icon="geom2"
        type={"svg"}
        delay={900}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Информатика")}
        icon="Informatika2"
        type={"svg"}
        delay={1000}
        offset={1}
        animationTop={true}
      />
    </section>
  );
};
export default Topright;
