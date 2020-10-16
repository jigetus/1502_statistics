import React from "react";
import { useSpring, animated } from "react-spring";

const Yearpercennt = (props) => {
  const year = new Date().getFullYear();
  const time_start = new Date(`09 01 ${year}`);
  const time_end = new Date(`05 28 ${year + 1}`);
  const full_year = time_end - time_start;
  const percentage = Math.round(((Date.now() - time_start) / full_year) * 100);
  props = useSpring({
    width: percentage,
    count: 100,
    from: { width: 0, count: 0 },
    config: { duration: 1200 },
  });
  return (
    <div className="yearpercent">
      <span>Учебный год</span>
      <div className="main">
        <animated.div className="fill" style={props} />
        <animated.div className="content">
          {props.count.interpolate(
            (x) => Math.floor((x * percentage) / 100) + "%"
          )}
        </animated.div>
      </div>
    </div>
  );
};
export default Yearpercennt;
