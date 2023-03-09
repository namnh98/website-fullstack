import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Demo = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
          setState((pre) => pre + 1);
        }}
      >
        Submit 1
      </button>
      <button
        onClick={() => {
          console.log('đã lên 1');
        }}
      >
        Submit 2
      </button>
      <p>state: {state}</p>
    </div>
  );
};

const App = () => {
  const [newState, setNewState] = useState(-1);
  useEffect(() => {
    alert('vô didmount');

    // return () => {
    //   alert('unmout');
    // };
  }, []);

  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Demo />
      <button onClick={() => setNewState(newState + 1)}></button>
      <p>newState: {newState}</p>
    </section>
  );
};

export default App;
