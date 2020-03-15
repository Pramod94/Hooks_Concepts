import React, { useReducer } from 'react';

// Using Multiple useReducer() when same reducer functionality is required

const initialState = {
    count : 0
}

const reducer = (currentState, action) => {
    switch(action.type){
        case 'increment' :
            return { count : currentState.count + action.value }
        case 'decrement' :
            return { count : currentState.count - action.value }
        case 'reset' :
            return initialState;
        default : return currentState;
    }
}

const Counter2 = () => {
    const [currentCount, dispatch] = useReducer(reducer, initialState);
    const [currentCountTen, dispatchTen] = useReducer(reducer, initialState);
    return(
        <>
        <h3>Count : {currentCount.count} </h3>
        <button onClick={() => dispatch({type : 'increment', value : 1 })}>Increment</button>
        <button onClick={() => dispatch({type : 'decrement', value : 1 })}>Decrement</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        <div>
        <h3>Count : {currentCountTen.count} </h3>
        <button onClick={() => dispatchTen({type : 'increment', value : 10 })}>Increment</button>
        <button onClick={() => dispatchTen({type : 'decrement', value : 10 })}>Decrement</button>
        <button onClick={() => dispatchTen({type : 'reset'})}>Reset</button>
        </div>
        </>
    )
}

export default Counter2;
