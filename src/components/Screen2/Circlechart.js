import React from "react";
import ReactApexChart from "react-apexcharts";

export default class Circlechart extends React.Component {
  constructor(props) {
    super(props);

    this.settings = {
      series: [this.props.series],
      options: {
        chart: {
          type: "radialBar",
          animations: {
            enabled: true,
            speed: 3800,
          },
        },

        colors: ["#b31217"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
            },
            track: {
              background: "#000000de",
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
                fontSize: "30px",
                fontFamily: "VAG World Bold",
              },
              value: {
                color: "#000",
                fontSize: "40px",
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
            gradientToColors: ["#e52d27"],
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
          options={this.settings.options}
          series={this.settings.series}
          type="radialBar"
          height={420}
          width={400}
        />
      </div>
    );
  }
}
