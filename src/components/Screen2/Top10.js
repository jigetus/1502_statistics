import React from "react";
import Chart from "react-apexcharts";

const Top10 = (props) => {
  const avgs = [];
  const labels = [];
  props.top.forEach((el) => {
    avgs.push(el.AVG !== null ? parseFloat(el.AVG.toFixed(2)) : 0);
    labels.push(el.unit);
  });
  const settings = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
        type: "bar",
      },
      tooltip: {
        enabled: false,
      },
      markers: {
        size: 0,
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
        min: avgs[9] > 3.4 ? 3.4 : 3,
        max: avgs[0] < 4.5 ? 4.5 : 5,
        labels: {
          style: {
            colors: "#000",
            fontSize: 32,
            fontFamily: "VAG World Bold",
            fontWeight: "bold",
          },
        },
      },
      dataLabels: {
        enabled: true,
        // textAnchor: "start",
        offsetX: 800,
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

  return (
    <div>
      <Chart
        options={settings.options}
        series={settings.series}
        type="bar"
        width="800"
        height="900"
      />
    </div>
  );
};

export default Top10;
