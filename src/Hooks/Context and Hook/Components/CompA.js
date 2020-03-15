import React, { useContext } from 'react';
import { counterContext } from '../Counter';

const CompA = () => {
    const { currentCount, dispatch } = useContext(counterContext);
    return(
        <>
        <h3>CompA -> Count : {currentCount.count} </h3>
        <button onClick={() => dispatch({type : 'increment', value : 1 })}>Increment</button>
        <button onClick={() => dispatch({type : 'decrement', value : 1 })}>Decrement</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        </>
    )
}

export default CompA;
