import React from 'react';
import {Container, Row} from 'react-bootstrap';
import pace_chart from './pace_mile';
import Pace from './Pace';

const headings = ['mile best',
  '5k best/avg mile pace',
  '10k best/avg mile pace',
  'tempo pace',
  'half marathon best/avg mile pace',
  'full marathon best/avg mile pace',
  'recovery pace'];

const kor_headings = ['1마일 최고기록',
  '5km 최고기록/1마일 평균 페이스',
  '10km 최고기록/1마일 평균 페이스',
  '템포 페이스',
  '하프마라톤 최고기록/1마일 평균 페이스',
  '마라톤 최고기록/1마일 평균 페이스',
  '리커버리 페이스'];

function PaceChart(props) {
  const keys = Object.keys(pace_chart);
  return (
    <Container>
      <Headings/>
      {keys.map((mile_pace, idx) =>
        <Pace key={idx} unit={props.unit} mile_pace={mile_pace} pace={pace_chart[mile_pace]}/>)
      }
    </Container>
  )
}

function Headings() {
  return (
    <Row>
      {kor_headings.map((it, key) => <div key={key} className="col column-heading">{it}</div>)}
    </Row>
  )
}

export default PaceChart;