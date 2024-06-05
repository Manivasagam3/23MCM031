import React, { useState } from 'react';
import "./App.css"
const App = () => {
  const [num, setNum] = useState(0);
  const [sequence, setSequence] = useState([]);

  const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNum(value);
    setSequence(generateFibonacci(value));
  };

  return (
    <div >
      <h1>FIBONNACI</h1>
      <input
        type="number"
        value={num}
        onChange={handleChange}
        min="0"
      />
      <ul className='list'>
        {sequence.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;