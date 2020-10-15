import React from "react";
import Circle from "./Circle";

const Bestclass = (props) => (
  <section>
    <h2>Лучший класс в предмете</h2>
    <div className="section_content">
      <Circle title="Алгебра" icon="algebra2" type={"svg"} />
      <Circle title="Биология" icon="biologija2" type={"svg"} />
      <Circle title="Английский язык" icon="en2" type={"svg"} offset={1} />
      <Circle title="Физика" icon="Fizika2" type={"svg"} />
      <Circle title="География" icon="geografija2" type={"svg"} />
      <Circle title="Геометрия" icon="geom2" type={"svg"} />
      <Circle title="История" icon="history2" type={"svg"} />
      <Circle title="Информатика" icon="Informatika2" type={"svg"} />
      <Circle title="Химия" icon="Kimija2" type={"svg"} />
      <Circle title="Литература" icon="litra2" type={"svg"} />
      <Circle title="Математика" icon="matem2" type={"svg"} />
      <Circle title="Обществознание" icon="obschestvo2" type={"svg"} />
      <Circle title="Русский язык" icon="rus213" type={"png"} offset={1} />
    </div>
  </section>
);
export default Bestclass;
