import React from 'react';

const TimerControls = props => {
  return (
    <div style={{ display: `flex`, justifyContent: `center` }}>
      <button>Play</button>
      <button>Pause</button>
      <button>Restart</button>
    </div>
  );
};

export default TimerControls;
