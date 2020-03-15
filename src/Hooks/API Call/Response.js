import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    isLoading: true,
    response: {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'onSuccess':
            return {
                isLoading: false,
                response: action.response,
                error: ''
            }
        case 'onFailure':
            return {
                isLoading: false,
                response: {},
                error: 'Something went wrong! May be Internet Disconnected'
            }
        default: return state;
    }
}

const Response = () => {
    const [currentState, dispatch] = useReducer(reducer, initialState);
    const { isLoading, response, error } = currentState;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/5')
            .then((res) => {
                console.log(res);
                dispatch({
                    type: 'onSuccess',
                    response: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'onFailure'
                })
            })
    }, []);

    return (
        <div>
            <h3>From Api Response</h3>
            {
                isLoading ? 'Loading...' : <p>{response.title}</p>
            }
            {
                error ? error : null
            }
        </div>
    )
}

export default Response;
