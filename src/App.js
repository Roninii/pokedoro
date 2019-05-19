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
      sessionTimer: {
        minutes: 25,
        seconds: 0,
      },
      breakTimer: {
        minutes: 5,
        seconds: 0,
      },
      started: false,
    };
  }

  increment = timeMode => {
    let incrementedTime = {};
    incrementedTime[`${timeMode}Timer`] = { minutes: 0, seconds: 0 };
    incrementedTime[`${timeMode}Timer`].minutes = this.state[`${timeMode}Timer`].minutes + 1;
    this.setState(incrementedTime);
  };

  decrement = timeMode => {
    if (this.state[`${timeMode}Timer`].minutes <= 0) return;
    let decrementedTime = {};
    decrementedTime[`${timeMode}Timer`] = { minutes: 0, seconds: 0 };
    decrementedTime[`${timeMode}Timer`].minutes = this.state[`${timeMode}Timer`].minutes - 1;
    this.setState(decrementedTime);
  };

  toggleStart = (mode, time) => {
    if (!this.state.started) this.startTimer(mode, time);
    if (this.state.started);
    this.setState(state => ({ started: !state.started }));
  };

  reset = () => {
    this.setState({ mode: 'session', sessionTime: 25, breakTime: 5, started: false });
  };

  startTimer = (mode, time) => {
    let { minutes, seconds } = time;
    const timerInterval = window.setInterval(() => {
      if (seconds <= 0) {
        minutes--;
        seconds = 59;
        this.setTime(minutes, seconds);
      } else if (minutes <= 0 && seconds <= 0) {
        this.stopTimer(timerInterval);
      } else {
        if (!this.state.started) this.stopTimer(timerInterval);
        seconds--;
        this.setTime(mode, minutes, seconds);
      }
    }, 1000);
  };

  stopTimer = timerid => {
    window.clearInterval(timerid);
  };

  setTime = (mode, minutes, seconds) => {
    const updatedTime = {};
    updatedTime[`${mode}Timer`] = { minutes, seconds };
    this.setState(updatedTime);
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
            time={this.state.sessionTimer}
            handleIncrement={this.increment}
            handleDecrement={this.decrement}
          />
          <Mode
            mode="break"
            time={this.state.breakTimer}
            handleIncrement={this.increment}
            handleDecrement={this.decrement}
          />
        </div>
        <Timer mode={this.state.mode} time={this.state[`${this.state.mode}Timer`]} />
        <TimerControls
          mode={this.state.mode}
          time={this.state[`${this.state.mode}Timer`]}
          started={this.state.started}
          toggleStart={this.toggleStart}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
