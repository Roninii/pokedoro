import React from 'react';

const Timer = ({ mode, time }) => {
  return (
    <section>
      <p id="timer-label">{mode.toUpperCase()}</p>
      <p id="time-left">{`${time.minutes < 10 ? `0${time.minutes}` : time.minutes}:${
        time.seconds < 10 ? `0${time.seconds}` : time.seconds
      }`}</p>
    </section>
  );
};

export default Timer;
