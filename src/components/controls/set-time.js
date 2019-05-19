import React from 'react';

import Increment from './increment';
import Decrement from './decrement';

const SetTime = props => {
  return (
    <div style={{ display: `flex` }}>
      <Increment mode={props.mode} />
      <p style={{ display: `inline-block`, margin: `1rem` }} id={`${props.mode}-length`}>
        25
      </p>
      <Decrement mode={props.mode} />
    </div>
  );
};

export default SetTime;
