import React from 'react';
import './App.css';

import Mode from './components/mode/mode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokédoro</h1>
      </header>
      <div style={{ display: `flex`, justifyContent: `center` }}>
        <Mode mode="break" />
        <Mode mode="session" />
      </div>
    </div>
  );
}

export default App;
