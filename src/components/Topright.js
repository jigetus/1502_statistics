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
        subject={findbyTitle("История")}
        icon="history2"
        type={"svg"}
        delay={600}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Информатика")}
        icon="Informatika2"
        type={"svg"}
        delay={500}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Химия")}
        icon="Kimija2"
        type={"svg"}
        delay={400}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Литература")}
        icon="litra2"
        type={"svg"}
        delay={300}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Обществознание")}
        icon="obschestvo2"
        type={"svg"}
        delay={200}
        offset={1}
        animationTop={true}
      />
      <Circle
        subject={findbyTitle("Русский язык")}
        icon="rus"
        type={"svg"}
        offset={1}
        delay={100}
        animationTop={true}
      />
    </section>
  );
};
export default Topright;
