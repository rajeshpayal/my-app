import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dt) => dt.value);
  const totalMax = Math.max(...valueArray);
  return (
    <div className="chart">
      {/* <ChartBar></ChartBar> */}
      {props.dataPoints.map((chart) => (
        <ChartBar
          key={chart.label}
          value={chart.value}
          maxValue={totalMax}
          label={chart.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
