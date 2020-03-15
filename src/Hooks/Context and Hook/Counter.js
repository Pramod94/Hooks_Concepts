import React, { useReducer } from 'react';
import CompA from './Components/CompA';
import CompB from './Components/CompB';

const initialState = {
    count: 0
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return { count: currentState.count + action.value }
        case 'decrement':
            return { count: currentState.count - action.value }
        case 'reset':
            return initialState;
        default: return currentState;
    }
}

export const counterContext = React.createContext();

const CounterContext = () => {
    const [currentCount, dispatch] = useReducer(reducer, initialState);
    const contextValue = { currentCount, dispatch };
    return (
        <counterContext.Provider value={contextValue}>
            <CompA />
            <CompB />
        </counterContext.Provider>
    )
}

export default CounterContext;
