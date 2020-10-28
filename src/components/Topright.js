import React from "react";
import Circle from "./Circle";

const Topright = (props) => (
  <section className="top" id="topright">
    {" "}
    <Circle title="История" icon="history2" type={"svg"} delay={600} />
    <Circle title="Информатика" icon="Informatika2" type={"svg"} delay={700} />
    <Circle title="Химия" icon="Kimija2" type={"svg"} delay={800} />
    <Circle title="Литература" icon="litra2" type={"svg"} delay={900} />
    <Circle
      title="Обществознание"
      icon="obschestvo2"
      type={"svg"}
      delay={1000}
    />
    <Circle
      title="Русский язык"
      icon="rus213"
      type={"png"}
      offset={1}
      delay={1000}
    />
  </section>
);
export default Topright;
