import React, { useState } from 'react';
import './App.css';
import Hook1 from './Hooks/Hook1';
import Hook2 from './Hooks/Hook2';
import Hook3 from './Hooks/Hook3';
import Hook4 from './Hooks/Hook4';
import Hook5 from './Hooks/Hook5';
import Hook6 from './Hooks/Hook6';

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
      <Mycontext.Provider value={firstValue}>
        <Hook6 />
      </Mycontext.Provider>
    </div>
  );
}

export default App;
