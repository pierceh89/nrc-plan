import React from 'react';
import './App.css';
import PaceChart from './PaceChart';
import Nav from './Nav';

const default_unit = 'metric';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="heading">
        Pace Chart
      </header>
      <div>
        <PaceChart unit={default_unit}/>
      </div>
    </div>
  );
}

export default App;
