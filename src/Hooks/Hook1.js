import React, { useState } from 'react';

function Hook1() {
    let initialObject = {
        fname: '',
        lname: ''
    }

    const [name, setName] = useState(initialObject);

    const handleNameChange = (e) => {
     setName({
         ...name,
         [e.target.name] : e.target.value
     })
    }

    return (
        <div>
            <h3>From Hook1</h3>
            <div>
                <label> Fname :
            <input type="text" value={name.fname}
            name="fname"
            onChange={(e) => handleNameChange(e)}
            />
                </label>
            </div>

            <div>
                <label> Lname :
            <input type="text" value={name.lname}
            name="lname"
            onChange={(e) => handleNameChange(e)}
            />
                </label>
            </div>
    <p>{JSON.stringify(name)}</p>
        </div>
    )
}

export default Hook1;
