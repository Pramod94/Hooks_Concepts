import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hook5(){

    const [id, setId] = useState(1);
    const [idFetch, setIdFetch] = useState(1);
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setId(e.target.value);
        console.log(e.target.value);
    }

    const handleClick = () => {
        setIdFetch(id);
        console.log(idFetch);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFetch}`)
        .then(res => {
            console.log(res.data.title);
            setResult(res.data.title);
        })
        .catch(err => {
            console.log(err);
        })
    }, [idFetch]);

    return(
        <div>
            <input type="text" value={id} onChange={handleChange} />
            <button onClick={handleClick}>Fetch</button>
            <div>
                {result}
            </div>
        </div>
    )
}

export default Hook5;
