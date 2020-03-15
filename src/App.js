import React, { useState } from 'react';
import './App.css';
import Hook1 from './Hooks/Hook1';
import Hook2 from './Hooks/Hook2';
import Hook3 from './Hooks/Hook3';
import Hook4 from './Hooks/Hook4';
import Hook5 from './Hooks/Hook5';
import Hook6 from './Hooks/Hook6';
import Counter from './Hooks/Hook7';
import Counter1 from './Hooks/Hook8';
import Counter2 from './Hooks/Hook9';
import CounterContext from './Hooks/Context and Hook/Counter';
import Response from './Hooks/API Call/Response';

const firstValue = {
  name : "Pramod"
}

export const Mycontext = React.createContext();

function App() {
  let initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const handleCountChange = () => {
    setCount((preCount) => {
      return preCount + 1
    })
  }

  return (
    <div className="App">
      {/* <button onClick={() => handleCountChange()}>Count {count}</button>
      <Hook1 />
      <Hook2 />
      <Hook3 /> */}
      {/* <Hook4 /> */}
      {/* <Hook5 /> */}
      {/* <Mycontext.Provider value={firstValue}>
        <Hook6 />
      </Mycontext.Provider> */}
      {/* <Counter /> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <CounterContext /> */}
      <Response />
    </div>
  );
}

export default App;
