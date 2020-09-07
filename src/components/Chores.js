import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, ListItemSecondaryAction } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Container from '@material-ui/core/Container';

const Chores = (props) => {
    const userData = props.user 
    const [selectedValue, setSelectedValue] = useState('')

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }
    return (
    <Container component="main" maxWidth="xs">
    <div>
        <h1>Chores Page</h1>
        <div>
            <h3>Monday</h3>
            <TextField
                label="Chores"
                backgroundColor="secondary"
            />
            <Radio
                onChange={handleChange}
                value="Completed"
                color="secondary"
                name="Completed"
                inputProps={{'aria-label': 'E'}}
                size= "small" 
            />
            <h3>Tuesday</h3>
            <TextField
                label="Chores"
                backgroundColor="secondary"
            />
            <Radio
                onChange={handleChange}
                value="Completed"
                color="secondary"
                name="Completed"
                inputProps={{'aria-label': 'E'}}
                size= "small" 
            />
            <h3>Wednesday</h3>
            <TextField
                label="Chores"
                backgroundColor="secondary"
            />
            <Radio
                onChange={handleChange}
                value="Completed"
                color="secondary"
                name="Completed"
                inputProps={{'aria-label': 'E'}}
                size= "small" 
            />
            <h3>Thursday</h3>
            <TextField
                label="Chores"
                backgroundColor="secondary"
            />
            <Radio
                onChange={handleChange}
                value="Completed"
                color="secondary"
                name="Completed"
                inputProps={{'aria-label': 'E'}}
                size= "small" 
            />
            <h3>Friday</h3>
            <TextField
                label="Chores"
                backgroundColor="secondary"
            />
            <Radio
                onChange={handleChange}
                value="Completed"
                color="secondary"
                name="Completed"
                inputProps={{'aria-label': 'E'}}
                size= "small" 
            />
            <h3>Saturday</h3>
            <TextField
                label="Chores"
                backgroundColor="secondary"
            />
            <Radio
                onChange={handleChange}
                value="Completed"
                color="secondary"
                name="Completed"
                inputProps={{'aria-label': 'E'}}
                size= "small" 
            />
            <h3>Sunday</h3>
            <TextField
                label="Chores"
                backgroundColor="secondary"
            />
            <Radio
                onChange={handleChange}
                value="Completed"
                color="secondary"
                name="Completed"
                inputProps={{'aria-label': 'E'}}
                size= "small" 
            />
        </div>
    </div>
    </Container>
    );
}

export default Chores;
