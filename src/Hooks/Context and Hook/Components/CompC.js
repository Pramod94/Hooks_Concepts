import React, { useContext } from 'react';
import { counterContext } from '../Counter';

const CompC = () => {
    const { currentCount, dispatch } = useContext(counterContext);
    return(
        <>
        <h3>CompC -> Count : {currentCount.count} </h3>
        <button onClick={() => dispatch({type : 'increment', value : 10 })}>Increment</button>
        <button onClick={() => dispatch({type : 'decrement', value : 10 })}>Decrement</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        </>
    )
}

export default CompC;
