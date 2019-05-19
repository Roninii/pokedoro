import React from 'react';

const TimerControls = ({ time, started, toggleStart, reset }) => {
  return (
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <button
        onClick={() => {
          toggleStart(time);
        }}>
        {started ? 'stop' : 'start'}
      </button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};

export default TimerControls;
