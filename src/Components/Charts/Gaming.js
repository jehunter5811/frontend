import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data01 = [
  { name: "1ST", value: 25 },
  { name: "FUN", value: 25 },
  { name: "MANA", value: 25 },
  { name: "ENJ", value: 25 }
];

const COLORS = [
  "#FFCD1C",
  "#79F2C3",
  "#1CAA98",
  "#1EC0FF",
  "#305CEE",
  "#9080DC",
  "#6F51FD",
  "#9B10D9",
  "#D6099B",
  "#FE04B7",
  "#FF7C42"
];

export default class Gaming extends PureComponent {
  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          startAngle={45}
          endAngle={405}
          fill="#8884d8"
          label
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    );
  }
}