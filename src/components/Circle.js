import React from "react";
import { animated, useSpring } from "react-spring";

const Circle = (props) => {
  const transitions = useSpring({
    transform: "translate3d(0,0px,0)",
    opacity: 1,
    from: {
      transform: `translate3d(0,${props.animationTop ? "-" : "+"}80px,0)`,
      opacity: 0,
    },
    delay: props.delay,
  });
  if (props.subject === undefined) return null;
  return (
    <animated.div className="circle-card noselect" style={transitions}>
      <span
        className="title"
        style={{ fontSize: props.subject.title.length >= 10 ? "12px" : "14px" }}
      >
        {props.subject.title}
      </span>
      <div
        className="circle"
        style={{
          backgroundImage: `url(/imgs/subjects/${props.icon}.${props.type})`,
          backgroundPosition: props.offset ? `0px 0px` : `-100px -1px`,
        }}
      ></div>
      <span className="class">{props.subject.unit}</span>
      <span className="medium">
        {parseFloat(props.subject.max_mark.toFixed(2))}
      </span>
    </animated.div>
  );
};
export default Circle;
