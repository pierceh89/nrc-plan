import React from 'react';
import './App.css';
import PaceChart from './PaceChart';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 'metric'
    };

    // This binding is necessary to make `this` work in the callback
    this.toggleUnit = this.toggleUnit.bind(this);
  }

  toggleUnit() {
    const current = this.state.unit;
    this.setState({
      unit: current === 'metric' ? 'mile' : 'metric'
    });
  }

  render() {
    return (
      <div className="App">
        <Nav changeMetric={this.toggleUnit} />
        <header className="heading">
          Pace Chart
        </header>
        <div>
          <PaceChart unit={this.state.unit}/>
        </div>
      </div>
    );
  }
}

export default App;
