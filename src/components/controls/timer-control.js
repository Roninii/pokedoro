import React from 'react';

const TimerControls = ({ mode, time, started, toggleStart, reset }) => {
  return (
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <button
        id="start_stop"
        onClick={() => {
          toggleStart(mode, time);
        }}>
        {started ? 'stop' : 'start'}
      </button>
      <button id="reset" onClick={() => reset()}>
        reset
      </button>
    </div>
  );
};

export default TimerControls;
