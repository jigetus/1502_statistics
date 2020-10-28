import React from "react";
import Circle from "./Circle";
const Topleft = (props) => (
  <section className="top" id="topleft">
    {" "}
    <Circle title="Алгебра" icon="algebra2" type={"svg"} delay={0} />
    <Circle title="Биология" icon="biologija2" type={"svg"} delay={100} />
    <Circle
      title="Английский язык"
      icon="en2"
      type={"svg"}
      offset={1}
      delay={200}
    />
    <Circle title="Физика" icon="Fizika2" type={"svg"} delay={300} />
    <Circle title="География" icon="geografija2" type={"svg"} delay={400} />
    <Circle title="Геометрия" icon="geom2" type={"svg"} delay={500} />
  </section>
);
export default Topleft;
