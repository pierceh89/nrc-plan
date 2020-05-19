import React from 'react';
import pace_chart from './pace_mile';

function PaceChart() {
  const keys = Object.keys(pace_chart);
  console.log(keys);
  return (
    <div>
      { keys.map( mile_pace => {
        const pace = pace_chart[mile_pace];
        const paceKeys = Object.keys(pace);
        return (<div>
          {mile_pace}
          { paceKeys.map( it => (<span>{it} : {pace[it]}</span>))}
        </div>)
      }) }
    </div>
  )
}

export default PaceChart;