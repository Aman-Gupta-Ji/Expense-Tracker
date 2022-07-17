import React from "react";
import Card from "../UI/Card";

import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPoints = props.dataPoints;
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const maxElement = Math.max(...dataPointValues);
  return (
    <Card className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxElement}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </Card>
  );
}

export default Chart;
