import React from "react";
import ReactApexChart from "react-apexcharts";

export default class Yearchart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [67],
      options: {
        chart: {
          height: 280,
          type: "radialBar",
        },

        colors: ["rgb(149, 132, 235)"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15,
              },
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#000",
                fontSize: "14px",
              },
              value: {
                color: "#000",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["rgb(70, 59, 125)"],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Учебный год"],
      },
    };
  }

  render() {
    return (
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350}
          />
        </div>
      </div>
    );
  }
}
