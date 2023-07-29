import React, { useState } from 'react';
// this looks like an unused import... but ChartJS throws errors without it
import {Chart as ChartJS} from 'chart.js/auto'
import {Bar} from "react-chartjs-2";
import americanAgeData from '../../data/age-data';
import { getDistributionFromRawData } from '../../data/number-crunch';
import { membersOfCongressPerAge, houseData, senateData } from '../../data/congress-data';

const CongressVsAmericaAgeChart = () => {
  const [americanData, setAmericanData] = useState(americanAgeData);
  const [minAge, setMinAge] = useState(null);
  const [congressData, setCongressData] = useState(houseData.concat(senateData))
  const [congressLabel, setCongressLabel] = useState('Members of Congress')

  const chartData = {
    datasets: [
      {
        label: `Americans ${minAge ? `over ${minAge}` : ''}`,
        data: getDistributionFromRawData(americanData),
        backgroundColor: 'rgba(50,50,150, .8)',
        stack: 'america'
      },
      {
        label: congressLabel,
        data: getDistributionFromRawData(membersOfCongressPerAge(congressData)),
        backgroundColor: 'rgba(250,50,50, .8)',
        stack: 'congress'
      },
    ]
  }

  const updateAmericanData = (e) => {
    const data = {...americanAgeData}
    for (let i=0; i<e.target.value; i++){
      delete data[`${i}`];
    }
    setAmericanData(data)
    e.target.value == 0 ? setMinAge(null) : setMinAge(e.target.value)
  }

  const updateCongressData = (e) => {
    switch(e.target.value){
      case 'house':
        setCongressData(houseData);
        setCongressLabel('Members of the House');
        break;
      case 'senate':
        setCongressData(senateData);
        setCongressLabel('Members of the Senate');
        break;
      default:
        setCongressData(houseData.concat(senateData));
        setCongressLabel('Members of Congress')
    }
  }

  console.log(getDistributionFromRawData(americanData))
  return (
    <>
    <div className='chart-title'>
      <div>Age distribution for</div>
      <select className="inline-input" onChange={updateAmericanData}>
        <option value={0}>All Americans</option>
        <option value={18}>Americans old enough to vote</option>
        <option value={25}>Americans old enough to run for House</option>
        <option value={30}>Americans old enough to run for Senate</option>
      </select>
      <div>vs</div>
      <select className="inline-input" onChange={updateCongressData}>
        <option value='both'>Congress</option>
        <option value='house'>the House</option>
        <option value='senate'>the Senate</option>
      </select>
      </div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true
            }
          },
        }}
        />
      </>
  )
}

export default CongressVsAmericaAgeChart;