import React from 'react';

const Timer = ({ mode, time }) => {
  return (
    <section>
      <p>{mode.toUpperCase()}</p>
      <p>{time}</p>
    </section>
  );
};

export default Timer;
