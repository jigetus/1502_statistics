import React from "react";
import Chart from "react-apexcharts";

export default class Top10 extends React.Component {
  constructor(props) {
    super(props);
    const avgs = [];
    const labels = [];
    props.top.forEach((el) => {
      avgs.push(parseFloat(el.AVG.toFixed(2)));
      labels.push(el.unit);
    });
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
          animations: {
            enabled: true,
          },
          type: "bar",
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },

        colors: ["#b31217"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#e52d27"],
            stops: [0, 100],
          },
        },
        xaxis: {
          categories: labels,
          labels: {
            show: false,
            style: {
              fontWeight: "bold",
              colors: "#000",
              fontSize: 12,
              fontFamily: "VAG World Bold",
            },
          },
        },
        yaxis: {
          show: true,
          // min: parseFloat((avgs[9] - 0.2).toFixed(2)),
          // max: parseFloat((avgs[0] + 0.1).toFixed(2)),
          // max: 4.7,
          labels: {
            style: {
              colors: "#000",
              fontSize: 26,
              fontFamily: "VAG World Bold",
              fontWeight: "bold",
            },
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          // offsetX: -500,
          // offsetY: -500,
          style: {
            colors: ["#fff"],
            fontSize: 26,
            fontFamily: "VAG World Bold",
            fontWeight: "bold",
          },
          formatter: function (val, opt) {
            return val;
          },
          offsetX: 200,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 2,
            blur: 3,
            color: "#000",
            opacity: 0.6,
          },
        },
      },
      series: [
        {
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
        width="800"
        height="900"
      />
    );
  }
}
