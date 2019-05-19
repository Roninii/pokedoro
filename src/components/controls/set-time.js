import React from 'react';

import Increment from './increment';
import Decrement from './decrement';

const SetTime = ({ mode, time, increment, decrement }) => {
  return (
    <div style={{ display: `flex` }}>
      <Increment mode={mode} increment={increment} />
      <p style={{ display: `inline-block`, margin: `1rem` }} id={`${mode}-length`}>
        {time.minutes}
      </p>
      <Decrement mode={mode} decrement={decrement} />
    </div>
  );
};

export default SetTime;
