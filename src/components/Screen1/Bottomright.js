import React from "react";
import Circle from "./Circle";

const Bottomright = (props) => {
  const findbyTitle = (title) => {
    let tmp = null;
    props.best.forEach((el) => {
      if (el.title === title) tmp = el;
    });
    return tmp;
  };
  return (
    <section className="bottom" id="bottomright">
      <Circle
        subject={findbyTitle("История")}
        icon="history2"
        type={"svg"}
        delay={1400}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Обществознание")}
        icon="obschestvo2"
        type={"svg"}
        delay={1500}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("География")}
        icon="geografija2"
        type={"svg"}
        delay={1600}
        offset={1}
        animationTop={true}
      />
    </section>
  );
};
export default Bottomright;
