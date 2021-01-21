import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import { useTransition, animated } from "react-spring";
const Topleft = (props) => {
  const findbyTitle = (title) => {
    let tmp = null;
    props.best.forEach((el) => {
      if (el.title === title) tmp = el;
    });
    return tmp;
  };
  const [state, setState] = useState(true);
  const trans = useTransition(state, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  useEffect(() => {
    setInterval(() => {
      setState(!state);
    }, 5000);
  }, [state]);
  const renderSwitch = (abc) => {
    switch (abc) {
      case true:
        return (
          <>
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
          </>
        );
      case false:
        return (
          <>
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
          </>
        );
      default:
        return <h1>Error</h1>;
    }
  };
  return (
    <section className="top" id="topleft">
      {/* {renderSwitch(state)} */}
      {trans.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props}>{renderSwitch(true)}</animated.div>
        ) : (
          <animated.div style={props}>{renderSwitch(false)}</animated.div>
        )
      )}
    </section>
  );
};
export default Topleft;
