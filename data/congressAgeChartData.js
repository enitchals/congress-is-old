const americanAgeData = require('./age-data')
const {congressMemberAges, congressMemberNames, membersOfCongressPerAge} = require('./congress-data')
const {getDistributionFromRawData} = require('./number-crunch')

const numsArr = Array(101)
for (let i=0; i<numsArr.length; i++){
  numsArr[i] = i
}

const congressVsAmericaAges = {
  datasets: [
    {
      label: 'Americans',
      data: getDistributionFromRawData(americanAgeData)
    },
    {
      label: 'Members of Congress',
      data: getDistributionFromRawData(membersOfCongressPerAge)
    },
  ]
}

module.exports = congressVsAmericaAges;