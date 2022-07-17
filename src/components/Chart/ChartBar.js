import React from "react";

import "./ChartBar.css";

function ChartBar(props) {
  let percent = '10%';
  if (props.value > 0) {
      percent = Math.round((props.value / props.maxValue) * 100) + '%';
      console.log(percent);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="char-bar__fill" style={{height: percent}}></div>
      </div>
      <div className="char_bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
