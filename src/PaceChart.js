import React from 'react';
import pace_chart from './pace_mile';
import Pace from './Pace';

// const headings = ['mile best',
//   '5k best/avg mile pace',
//   '10k best/avg mile pace',
//   'tempo pace',
//   'half marathon best/avg mile pace',
//   'full marathon best/avg mile pace',
//   'recovery pace'];

const kor_headings = ['1마일 기록',
  '5km 기록/1마일 페이스',
  '10km 기록/1마일 페이스',
  '템포 페이스',
  '하프 기록/1마일 페이스',
  '마라톤 기록/1마일 페이스',
  '회복 페이스'];

const kor_metric_headings = ['1km 기록',
  '5km 기록/1km 페이스',
  '10km 기록/1km 페이스',
  '템포 페이스',
  '하프 기록/1km 페이스',
  '마라톤 기록/1km 페이스',
  '회복 페이스'];

function PaceChart(props) {
  const keys = Object.keys(pace_chart);
  return (
    <table className="table table-hover">
      <Headings unit={props.unit}/>
      <tbody>
      {keys.map((mile_pace, idx) =>
        <Pace key={idx} unit={props.unit} mile_pace={mile_pace} pace={pace_chart[mile_pace]}/>)
      }
      </tbody>
    </table>
  )
}

function Headings(props) {
  const headings = props.unit === 'metric' ? kor_metric_headings : kor_headings;
  return (
    <thead className="thead-dark">
    <tr>
      {headings.map((it, key) =>
        <th key={key} className="align-middle">
          { it.indexOf('/') === -1 ? it :
            it.split('/').map((line, idx) =>
              <span key={idx}>{line}<br/></span>) }
        </th>
      )}
    </tr>
    </thead>
  )
}

export default PaceChart;