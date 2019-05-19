import React from 'react';

import SetTime from '../controls/set-time';

const Mode = props => {
  return (
    <section
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        margin: `0 1rem`,
      }}>
      <p id={`${props.mode}-label`}>{props.mode.toUpperCase()}</p>
      <SetTime mode={props.mode} />
    </section>
  );
};

export default Mode;
