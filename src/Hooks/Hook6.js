import React from 'react';
import { useContext } from 'react';
import { Mycontext } from '../App';

const Hook6 = () => {
    const userContext = useContext(Mycontext);
    return(
    <div>
        <p>Data fetched from React context
           and consumed using useContext : 
           <h3>{userContext.name}</h3>
        </p>
    </div>
    )
}

export default Hook6;
