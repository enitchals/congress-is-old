import { congressData } from './congress-data.js';
import americanAgeData from './age-data.js';

const getAverageOfPopulationData = () => {
  let totalAge = 0;
  let totalPop = 0;
  for (let i=0; i<101; i++){
    const numPeople = americanAgeData[i];
    totalAge += numPeople * i;
    totalPop += americanAgeData[i];
  }
  return totalAge/totalPop;
}

const getAverageOfCongressionalData = () => {
  let totalPop = congressData.length;
  let totalAge = congressData.reduce((acc, cur) => {
    const DOB = cur.Birthdate;
    const age = (Date.now() - Date.parse(DOB))/(1000*60*60*24*365.25);
    return acc + age;
  },0)
  return totalAge/totalPop;
}

const getDistributionFromRawData = (data) => {
  let total = Object.keys(data).reduce((acc, cur) => acc + data[cur], 0);
  const distribution = Object.keys(data).reduce((acc, cur) => {
    const percentage = (data[cur]/total) * 100;
    acc[cur] = percentage;
    return acc;
  }, {})
  return distribution
}

const getCongressStatsFromAge = (age, dataset=congressData) => {
  let younger = 0;
  let yourAge = 0;
  let older = 0;
  for(const person in dataset){
    console.log(dataset[person].Birthdate)
    const personAge = Math.round((Date.now() - Date.parse(dataset[person].Birthdate))/(1000*60*60*24*365.25));
    const ageDiff = personAge-age;
    if (ageDiff > 3){
      console.log("older")
      older = older+1
    } else if (ageDiff < -3){
      younger = younger+1
    } else {
      yourAge = yourAge+1
    }
  }
  return [younger, yourAge, older]
}

const getAmericansStatsFromAge = (age) => {
  let younger = 0;
  let yourAge = 0;
  let older = 0;
  for (const dataPoint in americanAgeData){
    if (dataPoint<age-3){
      younger = younger+americanAgeData[dataPoint];
    } else if (dataPoint>age+3){
      older = older+americanAgeData[dataPoint];
    } else {
      yourAge = yourAge+americanAgeData[dataPoint];
    }
  }
  return [younger, yourAge, older]
}

export {
  getDistributionFromRawData,
  getCongressStatsFromAge,
  getAmericansStatsFromAge
}