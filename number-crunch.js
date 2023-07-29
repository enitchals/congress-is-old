const congressData = require('./congress-data');
const americanAgeData = require('./age-data');

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
