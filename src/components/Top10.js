import React from "react";
import Chart from "react-apexcharts";

export default class Top10 extends React.Component {
  constructor(props) {
    super(props);
    const avgs = [];
    const labels = [];
    props.top.forEach((el) => {
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
        tooltip: {
          enabled: false,
        },
        colors: ["#FFB859"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#CA4E73"],
            stops: [0, 100],
          },
        },
        xaxis: {
          categories: labels,
          labels: {
            style: {
              fontWeight: "bold",
              colors: "#fff",
              fontSize: 21,
              fontFamily: "VAG World Bold",
            },
          },
        },
        yaxis: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          offsetX: 0,
          // offsetY: 220,
          dropShadow: {
            enabled: true,
            left: 2,
            top: 2,
            opacity: 0.5,
          },
          style: {
            colors: ["white"],
            fontSize: 16,
            fontFamily: "VAG World Bold",
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
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="650"
      />
    );
  }
}
