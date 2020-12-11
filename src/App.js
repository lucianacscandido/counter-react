import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, SetCount] = useState(1)
  return (
    <div className="App">
        <h1>Counter</h1>
        <h1>{count}</h1> {/* usando js dentro do jsx (react) tem que ser entre {}*/}
        <button onClick={() => SetCount(count + 1)}>+</button>
        <button onClick={() => SetCount (0)}>reset</button>
        <button onClick={() => SetCount(count > 0 ? count - 1 : 0)}>-</button>
    </div>
  );
}

export default App;
