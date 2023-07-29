import React, { useState } from 'react';
// this looks like an unused import... but ChartJS throws errors without it
import {Chart as ChartJS} from 'chart.js/auto'
import {Bar} from "react-chartjs-2";
import americanAgeData from '../../data/age-data';
import { getDistributionFromRawData } from '../../data/number-crunch';
import { membersOfCongressPerAge, houseData, senateData } from '../../data/congress-data';

const CongressVsAmericaAgeChart = () => {
  const [americanData, setAmericanData] = useState(americanAgeData);
  const [congressData, setCongressData] = useState(houseData.concat(senateData))

  const chartData = {
    datasets: [
      {
        label: 'Americans',
        data: getDistributionFromRawData(americanData)
      },
      {
        label: 'Members of Congress',
        data: getDistributionFromRawData(membersOfCongressPerAge(congressData))
      },
    ]
  }

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true
            }
          }
        }}
        />
    </div>
  )
}

export default CongressVsAmericaAgeChart;