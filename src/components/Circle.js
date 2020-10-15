import React from "react";

const Circle = (props) => (
  <div className="circle-card noselect">
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
  </div>
);
export default Circle;
