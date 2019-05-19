import React from 'react';

const Decrement = ({ mode, decrement }) => {
  return (
    <button
      style={{ display: `inline-block`, transform: `rotate(90deg)` }}
      id={`${mode}-decrement`}
      onClick={() => decrement(mode)}>
      >
    </button>
  );
};

export default Decrement;
