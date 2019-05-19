import React from 'react';
import './App.css';

import Mode from './components/mode/mode';
import Timer from './components/timer/timer';
import TimerControls from './components/controls/timer-control';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'session',
      sessionTime: 25,
      breakTime: 5,
    };
  }

  increment = timeMode => {
    let incrementedTime = {};
    incrementedTime[`${timeMode}Time`] = this.state[`${timeMode}Time`] + 1;
    this.setState(incrementedTime);
  };

  decrement = timeMode => {
    if (this.state[`${timeMode}Time`] <= 0) return;
    let decrementedTime = {};
    decrementedTime[`${timeMode}Time`] = this.state[`${timeMode}Time`] - 1;
    this.setState(decrementedTime);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pokédoro</h1>
        </header>
        <div style={{ display: `flex`, justifyContent: `center` }}>
          <Mode
            mode="session"
            time={this.state.sessionTime}
            handleIncrement={this.increment}
            handleDecrement={this.decrement}
          />
          <Mode
            mode="break"
            time={this.state.breakTime}
            handleIncrement={this.increment}
            handleDecrement={this.decrement}
          />
        </div>
        <Timer
          mode={this.state.mode}
          time={this.state.mode === 'session' ? this.state.sessionTime : this.state.breakTime}
        />
        <TimerControls />
      </div>
    );
  }
}

export default App;
