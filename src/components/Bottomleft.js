import React from "react";

import { CanvasJSChart } from "canvasjs-react-charts";
import Top10 from "./Top10";

const options = {
  title: {
    text: "ТОП-10 КЛАССОВ",
  },
  backgroundColor: "transparent",
  animationEnabled: true,
  creditText: "",
  creditHref: "",
  theme: "light1",
  data: [
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: [
        { label: "8-Н", y: 4.54 },
        { label: "11-Л", y: 3.7 },
        { label: "9-Л", y: 2.5 },
        { label: "7-Н", y: 5 },
        { label: "10-Я", y: 1.7 },
        { label: "11-Л", y: 3.7 },
        { label: "9-Л", y: 2.5 },
        { label: "7-Н", y: 5 },
        { label: "10-Я", y: 1.7 },
        { label: "10-Я", y: 1.7 },
      ],
    },
  ],
};
const Bottomleft = (props) => (
  <section className="bottom" id="bottomleft">
    <h1>ТОП-10</h1>
    <Top10 />
  </section>
);
export default Bottomleft;
