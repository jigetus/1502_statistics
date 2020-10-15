import React from "react";
import { animated, useSpring } from "react-spring";

const Circle = (props) => {
  const transitions = useSpring({
    transform: "translate3d(0,0px,0)",
    opacity: 1,
    from: { transform: "translate3d(0,-80px,0)", opacity: 0 },
    delay: props.delay,
  });
  return (
    <animated.div className="circle-card noselect" style={transitions}>
      <span className="class">11-Н</span>
      <div
        className="circle"
        style={{
          backgroundImage: `url(/imgs/subjects/${props.icon}.${props.type})`,
          backgroundPosition: props.offset ? `1px -1px` : `-100px -1px`,
        }}
      ></div>
      <span className="title">{props.title}</span>
      <span className="medium">4,56</span>
    </animated.div>
  );
};
export default Circle;
