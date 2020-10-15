import React from "react";
import Circle from "./Circle";

const Bestclass = (props) => (
  <section>
    <h2>Лучший класс в предмете</h2>
    <div className="section_content">
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
      <Circle title="История" icon="history2" type={"svg"} delay={600} />
      <Circle
        title="Информатика"
        icon="Informatika2"
        type={"svg"}
        delay={700}
      />
      <Circle title="Химия" icon="Kimija2" type={"svg"} delay={800} />
      <Circle title="Литература" icon="litra2" type={"svg"} delay={900} />
      <Circle title="Математика" icon="matem2" type={"svg"} delay={1000} />
      <Circle
        title="Обществознание"
        icon="obschestvo2"
        type={"svg"}
        delay={1100}
      />
      <Circle
        title="Русский язык"
        icon="rus213"
        type={"png"}
        offset={1}
        delay={1200}
      />
    </div>
  </section>
);
export default Bestclass;
