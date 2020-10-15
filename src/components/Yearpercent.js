import React from "react";
import { useSpring, animated } from "react-spring";

const Yearpercennt = (props) => {
  props = useSpring({
    width: 200,
    config: { duration: 1000 },
  });
  return (
    <div className="yearpercent">
      <span>Учебный год закончен на:</span>
      <div className="main">
        <animated.div className="fill" style={props} />
        <animated.div className="content">
          {props.width.interpolate((x) =>
            Math.floor((x.toFixed(0) * 100) / props.width)
          )}
        </animated.div>
      </div>
    </div>
  );
};
export default Yearpercennt;
