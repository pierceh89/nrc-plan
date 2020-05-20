import React from 'react';
import {Col} from "react-bootstrap";

const column_seq = ['5k', '10k', 'tempo_pace', 'half', 'full', 'recovery_pace'];
const inline_columns = ['5k', '10k', 'half', 'full'];

function Pace(props) {
  const unit = props.unit;
  const {best, pace} = convert(props.mile_pace, props.pace, unit);
  return (
    <div className="row">
      <Col>{best}</Col>
      {column_seq.map((it, key)=> {
        const idx = inline_columns.indexOf(it);
        if (idx === -1) return (<Col key={key}>{pace[it]}</Col>);
        else return (<Col key={key}>
          {pace[it + "_record"]} <br/>
          {pace[it + "_pace"]}
        </Col>);
      })
      }
    </div>
  );
}

function convert(best, pace, unit) {
  if (unit === "mile") {
    return {best, pace};
  }

  return {best, pace};
}

function _onSelected(e) {
  e.preventDefault();
  e.target.className = "row row-selected";
}

export default Pace;