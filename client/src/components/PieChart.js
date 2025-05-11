import React from "react";
import CarbonCalculator from "./CarbonCalculator";

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0"];
const LABELS = ["Electricity", "Car", "Flight", "Water"];

const PieChart = ({ electricity, car, flight, water }) => {
  const data = [electricity, car, flight, water];
  const total = data.reduce((sum, val) => sum + val, 0);

  let cumulativePercent = 0;

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const slices = data.map((value, i) => {
    const percent = value / total;
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
    cumulativePercent += percent;
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    const largeArcFlag = percent > 0.5 ? 1 : 0;

    return (
      <path
        key={i}
        d={`M 0 0 L ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
        fill={COLORS[i]}
      />
    );
  });

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto", textAlign: "center" }}>
      <h3>CO₂ Emissions Breakdown</h3>
      <svg viewBox="-1.2 -1.2 2.4 2.4" width="100%" height="250">
        {slices}
      </svg>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((value, i) => (
          <li key={i}>
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                backgroundColor: COLORS[i],
                marginRight: 8,
              }}
            />
            {LABELS[i]}: {value.toFixed(1)} kg CO₂
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChart;
