import React, { useState } from 'react';
import './App.css' 

const App = () => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  function increaseBtn() {
    if (count < 20) {
      setCount(prev => prev + 1);
      setErrorMessage('');
    } else {
      setErrorMessage("You've reached the limit");
    }
  }

  function decreaseBtn() {
    if (count === 0) {
      setErrorMessage("You can't go below 0");
    } else {
      setCount(prev => prev - 1);
      setErrorMessage('');
    }
  }

  return (
    
   <div className="container">
  <div className="counter-content">
    <h1>Count: {count}</h1>
    <button onClick={increaseBtn}>Increase</button>
    <button onClick={decreaseBtn}>Decrease</button>
    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
  </div>
</div>
  );
};

export default App;
