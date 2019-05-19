import React from 'react';

import SetTime from '../controls/set-time';

const Mode = ({ mode, time, handleIncrement, handleDecrement }) => {
  return (
    <section
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        margin: `0 1rem`,
      }}>
      <p id={`${mode}-label`}>{mode.toUpperCase()}</p>
      <SetTime mode={mode} time={time} increment={handleIncrement} decrement={handleDecrement} />
    </section>
  );
};

export default Mode;
