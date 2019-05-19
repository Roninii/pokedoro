import React from 'react';

const Timer = ({ mode, minutes, seconds }) => {
  return (
    <section>
      <p id={mode}>{mode.toUpperCase()}</p>
      <p id="time-left">{`${minutes}:${seconds <= 0 ? '00' : seconds}`}</p>
    </section>
  );
};

export default Timer;
