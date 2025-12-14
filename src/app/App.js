import React from 'react';

import CongressVsAmericaAgeChart from './CongressVsAmericaAgeChart.js';
import MyAge from './MyAge.js';

const App = () => {
  return (
    <div className='App'>
      <section className='header'>
        Congress is Old!
      </section>
      <section className='main-content'>
        <CongressVsAmericaAgeChart/>
        <MyAge/>
      </section>
    </div>
  )
}

export default App;