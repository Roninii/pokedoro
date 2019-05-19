import React from 'react';

const Increment = ({ mode, increment }) => {
  return (
    <button
      style={{ display: `inline-block`, transform: `rotate(-90deg)` }}
      id={`${mode}-increment`}
      onClick={() => increment(mode)}>
      >
    </button>
  );
};

export default Increment;
