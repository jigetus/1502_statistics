import React from "react";
import Circle from "./Circle";

const Topright = (props) => (
  <section className="top" id="topright">
    <Circle
      title="История"
      icon="history2"
      type={"svg"}
      delay={600}
      offset={1}
      animationTop={true}
    />
    <Circle
      title="Информатика"
      icon="Informatika2"
      type={"svg"}
      delay={500}
      offset={1}
      animationTop={true}
    />
    <Circle
      title="Химия"
      icon="Kimija2"
      type={"svg"}
      delay={400}
      offset={1}
      animationTop={true}
    />
    <Circle
      title="Литература"
      icon="litra2"
      type={"svg"}
      delay={300}
      offset={1}
      animationTop={true}
    />
    <Circle
      title="Обществознание"
      icon="obschestvo2"
      type={"svg"}
      delay={200}
      offset={1}
      animationTop={true}
    />
    <Circle
      title="Русский язык"
      icon="rus"
      type={"svg"}
      offset={1}
      delay={100}
      animationTop={true}
    />
  </section>
);
export default Topright;
