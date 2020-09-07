import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';

// importing material UI components___________________________________
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(0),
        borderRadius: 3,
    },
}));

const Chores = (props) => {
    const userData = props.user 
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState('')

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }

    return (
    <Container component="main" maxWidth="md">
        <CssBaseline />
    <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <AssignmentIcon />
        </Avatar>
        <h1>Chores Page</h1>
        <form className={classes.form}></form>
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
                size= "small" 
            />
            <br></br>
            <Icon color="primary">add_circle</Icon>
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
                size= "small" 
            />
            <br></br>
            <Icon color="primary">add_circle</Icon>
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
                size= "small" 
            />
            <br></br>
            <Icon color="primary">add_circle</Icon>
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
                size= "small" 
            />
            <br></br>
            <Icon color="primary">add_circle</Icon>
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
                size= "small" 
            />
            <br></br>
            <Icon color="primary">add_circle</Icon>
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
                size= "small" 
            />
            <br></br>
            <Icon color="primary">add_circle</Icon>
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
                size= "small" 
            />
            <br></br>
            <Icon color="primary">add_circle</Icon>
        </div>
    </div>
    </Container>
    );
}

export default Chores;
