import React from 'react';

const TimerControls = ({ started, toggleStart, reset }) => {
  return (
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <button onClick={() => toggleStart()}>{started ? 'stop' : 'start'}</button>
      <button disabled={!started}>pause</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};

export default TimerControls;
