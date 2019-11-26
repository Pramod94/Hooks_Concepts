import React, { useState, useEffect } from 'react';

function Hook3() {
    let initialState = 0;

    const [count, setCount] = useState(initialState);

    useEffect(() => {
        console.log("From UseEffect", count);
        if(count === 8){
            setCount( count + 8);
        }
    });

    const handleClick = () => {
        setCount((preCount) => {
            return preCount + 2;
        })
    }

    return (
        <div>
            <button onClick={handleClick}>Count {count}</button>
        </div>
    )
}

export default Hook3;
