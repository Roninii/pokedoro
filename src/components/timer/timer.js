import React from 'react';

const Timer = props => {
  return (
    <section>
      <p>{props.mode}</p>
      <p>25:00</p>
    </section>
  );
};

export default Timer;
