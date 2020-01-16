import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import styled from "styled-components";
import COLORS from "../../Theme/Colors"

const Contenitore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (max-width: 768px) {
    width: 80%;
    padding: 10%;
  }
`;

const data01 = [
  { name: "Crypto Basket", value: 10 },  
  { name: "Equity, U.S., Large Cap", value: 27 },
  { name: "Bond, U.S., Long-Term", value: 36 },
  { name: "Bond, U.S., Intermediate-Term", value: 13.5 },
  { name: "Commodity, Gold", value: 6.75 },
  { name: "Commodity, Broad Diversified", value: 6.75 },
];
export default class AWPLight extends PureComponent {
  render() {
    return (
      <Contenitore>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </Contenitore>
    );
  }
}
