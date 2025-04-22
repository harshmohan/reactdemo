import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="counter-container">
        <h1 className="counter-title">Click Counter</h1>
        <p className="counter-display">Current Count: <span>{count}</span></p>
        <div className="button-group">
          <button className="counter-button increment" onClick={() => setCount(count + 1)}>Increment</button>
          <button className="counter-button decrement" onClick={() => setCount(count - 1)}>Decrement</button>
          <button className="counter-button reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;