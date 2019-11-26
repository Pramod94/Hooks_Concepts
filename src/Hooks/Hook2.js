import React, { useState } from 'react';

function AddToArray() {
    let initialArray = [];
    let num = 2;
    const [items, setItmes] = useState(initialArray);

    const handleClick = () => {
        setItmes([
            ...items,
            {
                id: items.length,
                num: num + 2
            }
        ])
    }

    return (
        <div>
            <button onClick={handleClick}>Add to Array</button>
            <ul>
                {
                    items.map(item => {
                        return <li key={item.id}>{item.num}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default AddToArray;
