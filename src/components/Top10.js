import React from "react";
import Chart from "react-apexcharts";
const data = [
  { AVG: 4.39295848778316, unit: "8-Н" },
  { AVG: 4.364319225152333, unit: "7-М" },
  { AVG: 4.303892005573619, unit: "7-Л" },
  { AVG: 4.294082760810852, unit: "8-Л" },
  { AVG: 4.210333195599643, unit: "7-Н" },
  { AVG: 4.177228689193726, unit: "9-М" },
  { AVG: 4.144027577506171, unit: "10-Л" },
  { AVG: 4.098117438229648, unit: "10-Н" },
  { AVG: 4.072588188307626, unit: "8-М" },
  { AVG: 3.968037403546847, unit: "10-Я" },
];
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default class Top10 extends React.Component {
  constructor(props) {
    super(props);
    const avgs = [];
    const labels = [];
    const cols = [];
    let x = 80;
    let y = 80;
    data.forEach((el) => {
      avgs.push(el.AVG.toFixed(2));
      labels.push(el.unit);
    });

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        colors: [
          () => {
            x -= 4;
            y -= 4;
            return `hsl(250deg,${x}%,${y}%)`;
          },
        ],
        xaxis: {
          categories: labels,
          labels: {
            style: {
              fontSize: "16px",
              fontWeight: "bold",
            },
          },
        },
        yaxis: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          dropShadow: {
            enabled: true,
            left: 2,
            top: 2,
            opacity: 0.5,
          },
          style: {
            colors: ["white"],
          },
        },
      },
      series: [
        {
          name: "Средний балл",
          data: avgs,
        },
      ],
    };
  }

  render() {
    console.log(this.state.options.colors);
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="500"
      />
    );
  }
}
