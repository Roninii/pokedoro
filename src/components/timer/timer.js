import React from 'react';

const Timer = ({ mode, time }) => {
  return (
    <section>
      <p id={mode}>{mode.toUpperCase()}</p>
      <p id="time-left">{`${time.minutes}:${time.seconds <= 10 ? '00' : time.seconds}`}</p>
    </section>
  );
};

export default Timer;
