import React, { useState } from 'react';
import { Chart as ChartJS} from 'chart.js' // ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


const CongressVsMe = ({data}) => {
  console.log(data)
  const chartData = {
    labels: [
      `Younger`, 'Your Age', 'Older'
    ],
    datasets: [
      {
        labels: 'people',
        data,
        backgroundColor: ['rgba(50,50,150, 1)', 'rgba(0,0,0,.7)', 'rgba(250,50,50, .8)']
      },
    ]
  }

  return (
    <div className='congress-pie-chart'>
      <Doughnut className='pie-chart' data={chartData} />
    </div>
  )
}

export default CongressVsMe;