import React from "react";
import Chart from "react-google-charts";

export default class Top10google extends React.Component {
  constructor(props) {
    super(props);
    const data = [];
    data.push(["Класс", "Средний балл", { role: "annotation" }]);
    props.top.forEach((el) => {
      data.push([el.unit, parseFloat(el.AVG.toFixed(2)), el.unit]);
      // avgs.push(parseFloat(el.AVG.toFixed(2)));
      // labels.push(el.unit);
    });
    this.state = {
      data,
    };
    console.log(this.state.data);
  }

  render() {
    return (
      <Chart
        width={"800px"}
        height={"900px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={this.state.data}
        legend={false}
        options={{
          title: null,
          // chartArea: { width: "50%" },
          hAxis: {
            minValue: this.state.data[10][1],
          },
          vAxis: {
            // title: "City",
          },
          legend: { position: "none" },
          animation: {
            startup: true,
            easing: "inAndOut",
            duration: 1500,
          },
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    );
  }
}
