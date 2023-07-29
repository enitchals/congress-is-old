import React from 'react';
import CongressAgeChart from './CongressAgeChart';
import congressVsAmericaAges from '../../data/congressAgeChartData';

const App = () => {
  return (
    <div>
      <CongressAgeChart chartData={congressVsAmericaAges}/>
    </div>
  )
}

export default App;