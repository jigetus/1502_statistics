import React from "react";
import { animated, useSpring } from "react-spring";
const Studentcount = (props) => {
  props = useSpring({
    number: 100,
    from: { number: 0 },
    config: {
      duration: 1000,
    },
  });
  console.log(typeof props.number);
  return (
    <div className="studentcount">
      <span>Количество учеников:</span>
      <animated.span className="counter">
        {props.number.interpolate((x) => Math.floor((x * 587) / 100))}
      </animated.span>
    </div>
  );
};
export default Studentcount;
