import React, { useReducer } from 'react';

// Can use multiple state properties like secondCount : 10. 
// But make sure to use spread operator to not to distrub other state values
// i.e case 'increment'
// return { ...currentState, firstCount : currentState.firstCount + action.value }
// Best practice to use multiple useReducer()
const initialState = {
    firstCount : 0
}

const reducer = (currentState, action) => {
    switch(action.type){
        case 'increment' :
            return { firstCount : currentState.firstCount + action.value }
        case 'decrement' :
            return { firstCount : currentState.firstCount - action.value }
        case 'reset' :
            return initialState;
        default : return currentState;
    }
}

const Counter1 = () => {
    const [currentCount, dispatch] = useReducer(reducer, initialState);
    return(
        <>
        <h3>Count : {currentCount.firstCount} </h3>
        <button onClick={() => dispatch({type : 'increment', value : 1 })}>Increment</button>
        <button onClick={() => dispatch({type : 'decrement', value : 1 })}>Decrement</button>
        <button onClick={() => dispatch({type : 'increment', value : 5 })}>Increment 5</button>
        <button onClick={() => dispatch({type : 'decrement', value : 5 })}>Decrement 5</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        </>
    )
}

export default Counter1;
