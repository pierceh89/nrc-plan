import React from 'react';

const column_seq = ['5k', '10k', 'tempo_pace', 'half', 'full', 'recovery_pace'];
const inline_columns = ['5k', '10k', 'half', 'full'];

function Pace(props) {
  const unit = props.unit;
  const [best, pace] = convert(props.mile_pace, props.pace, unit);
  return (
    <tr>
      <td>{best}</td>
      {column_seq.map((it, key)=> {
        const idx = inline_columns.indexOf(it);
        if (idx === -1) return (<td key={key}>{pace[it]}</td>);
        else return (<td key={key}>
          {pace[it + "_record"]} <br/>
          {pace[it + "_pace"]}
        </td>);
      })
      }
    </tr>
  );
}

function convert(best, pace, unit) {
  if (unit === "mile") {
    return [best, pace];
  }

  let metric_best = convertToMetric(best.valueOf());
  let metric_pace = Object.assign({}, pace);
  for(const k of Object.keys(metric_pace)) {
    if(k.indexOf('pace') !== -1) {
      metric_pace[k] = convertToMetric(metric_pace[k]);
    }
  }

  return [metric_best, metric_pace];
}

function convertToMetric(pace) {
  const t = pace.split(":");
  const sec = parseInt(t[0])*60 + parseInt(t[1]);
  const converted = sec*(1/1.60934);
  const conv_min = Math.floor(converted / 60);
  const conv_sec = Math.round(converted % 60);
  const filling = conv_sec/10 > 1 ? "" : "0";
  return "" + conv_min + ":" + filling + conv_sec;
}

// function _onSelected(e) {
//   e.preventDefault();
//   e.target.className = "row row-selected";
// }

export default Pace;