import React from "react";
import ReactApexChart from "react-apexcharts";

export default class Circlechart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [this.props.series],
      options: {
        chart: {
          type: "radialBar",
          animations: {
            enabled: true,
            speed: 1800,
          },
        },

        colors: ["#FFB859"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
            },
            track: {
              background: "#2D2161",
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
                color: "#fff",
                fontSize: "16px",
                fontFamily: "Open Sans",
              },
              value: {
                color: "#fff",
                fontSize: "30px",
                show: true,
                fontFamily: "VAG World Bold",
                formatter: (val) => {
                  if (this.props.alternativeValue !== undefined) {
                    return this.props.alternativeValue;
                  }
                  return val + this.props.measure;
                },
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#CA4E73"],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: [this.props.title],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={320}
        />
      </div>
    );
  }
}
