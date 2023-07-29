import React, { useState } from 'react';
import CongressVsMe from './CongressVsMe';
import { getStatsFromAge } from '../data/number-crunch';

const MyAge = () => {
  const [age, setAge] = useState(null);
  const [show, setShow] = useState(false);

  const ageInput = (
    <div className='age-input-row'>
      <p>Enter your age:</p>
      <input type="number" className="inline-input number-input" onChange={(e) => setAge(e.target.value)}></input>
      <button className="go-button" onClick={() => setShow(true)}>Go</button>
    </div>
  )

  return (
    <div className='my-age'>
      {!show && ageInput}
      {show && (
        <div className="age-chart">
          <p>If you're {age}, Congress is...</p>
          <CongressVsMe data={getStatsFromAge(age)}/>
        </div>
      )}
    </div>
  )
}

export default MyAge;