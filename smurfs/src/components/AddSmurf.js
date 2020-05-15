import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/actions';

const AddSmurf = props => {
    const [smurf, createSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = e => {
        createSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const submitNewSmurf = e => {
        e.preventDefault();
        props.postSmurf(smurf);
    }

    return(
        <div>
            <p>Add Smurf</p>
            <input type='text' name='name' value={smurf.name} onChange={handleChanges} placeholder='Name' />
            <input type='text' name='age' value={smurf.age} onChange={handleChanges} placeholder='Age' />
            <input type='text' name='height' value={smurf.height} onChange={handleChanges} placeholder='Height' />
            <button onClick={submitNewSmurf}>Add Smurf</button>
        </div>
    )
}

export default connect(null, {postSmurf})(AddSmurf);