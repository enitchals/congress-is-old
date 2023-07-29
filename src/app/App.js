import React from 'react';

import CongressVsAmericaAgeChart from './CongressVsAmericaAgeChart';
import MyAge from './MyAge';

const App = () => {
  return (
    <div className='App'>
      <section className='main-content'>
        <CongressVsAmericaAgeChart/>
        <MyAge/>
      </section>
    </div>
  )
}

export default App;