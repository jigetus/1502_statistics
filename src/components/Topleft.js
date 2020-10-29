import React from "react";
import Circle from "./Circle";
const Topleft = (props) => (
  <section className="top" id="topleft">
    {" "}
    <Circle title="Алгебра" icon="algebra2" type={"svg"} delay={0} offset={1} />
    <Circle
      title="Биология"
      icon="biologija2"
      type={"svg"}
      delay={100}
      offset={1}
    />
    <Circle
      title="Английский язык"
      icon="en2"
      type={"svg"}
      offset={1}
      delay={200}
    />
    <Circle title="Физика" icon="Fizika2" type={"svg"} delay={300} offset={1} />
    <Circle
      title="География"
      icon="geografija2"
      type={"svg"}
      delay={400}
      offset={1}
    />
    <Circle
      title="Геометрия"
      icon="geom2"
      type={"svg"}
      delay={500}
      offset={1}
    />
  </section>
);
export default Topleft;
