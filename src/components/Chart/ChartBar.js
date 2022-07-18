import React from "react";

import "./ChartBar.css";

function ChartBar(props) {
  let percent = "0%";
  if (props.value > 0) {
    percent = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }
  console.log(props.value);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div style={{ height: percent }} className="chart-bar__fill"></div>
      </div>
      <div className="char_bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
