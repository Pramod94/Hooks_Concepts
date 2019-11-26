import React, { useState, useEffect } from 'react';

function Hook4() {
    let initialState = 0;

    const [count, setCount] = useState(initialState);
    const [name, setName] = useState('');

    //Second arg will be the condition
    //Based on the condition - useEffect is going to run

    //No condition - runs on every state update
    useEffect(() => {
        console.log("Use Effect - No condition - runs everytime");
    });

    //[] - runs only on first render
    useEffect(() => {
        console.log("Use Effect - Runs once the component mounted on DOM")
    },[]);
  
    //[takes props or state] - useEffect will execute if the state or props changes
    // Below useEffect will run only if state 'count' changes. i.e upon execution of setCount
    useEffect(() => {
        console.log("Use Effect - Based on Condition - either state or props change")
    },[count]);

    const handleClick = () => {
        setCount((preCount) => {
            return preCount + 2;
        })
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <button onClick={handleClick}>Count {count}</button>
        </div>
    )
}

export default Hook4;
