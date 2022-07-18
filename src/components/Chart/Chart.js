import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";

function Chart(props) {
  const dataPoints = props.dataPoints;
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxElement = Math.max(...dataPointValues);
  return (
    <Card className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxElement}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
}

export default Chart;
