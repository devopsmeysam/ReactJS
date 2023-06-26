// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // Please note that this is not a good User Experience!
  useEffect(() => {
    alert('The counter was just changed to ' + counter);
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      </header>
    </div>
  );
}

export default App;
