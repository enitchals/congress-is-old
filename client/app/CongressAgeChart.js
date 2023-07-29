import React from 'react';
// this looks like an unused import... but ChartJS throws errors without it
import {Chart as ChartJS} from 'chart.js/auto'
import {Bar} from "react-chartjs-2";

const CongressAgeChart = ({chartData}) => {
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Your age compared to Congress"
            },
            legend: {
              display: false
            }
          }
        }}
        />
    </div>
  )
}

export default CongressAgeChart;