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
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper } from '@material-ui/core'

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
    const [newChore, setNewChore] = useState(' ')
    const [selectedValue, setSelectedValue] = useState('')
    const [checked, setChecked] = useState(false);
    const chores = ["take out trash", "clean rooms", "feed the dog", "wash dishes", "etc.."];
    //______________________________________________________

     //when checkbox is checked, what happens?
    //chore turns green for completed
    const handleChange = (e, chore) => {
        setChecked(e.target.checked)
        console.log("✅✅✅", {chore})
    }

    // <paper 
    
    
    
    // />
    const listItems = chores.map((chore) =>
    <div>
        <li className="listStyle" style={{ listStyleType: "none" }} >
            <Checkbox
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {chore}
        </li>
    </div>
        );

    //adds a chore to the list when plus button is clicked
    //this works
    const addChore = (e) => {
        console.log('chore has been added');
    }

    //setting value of the new chore
    const handleNewChore = (e) => {
        setNewChore(e.target.value)
    }

    return (
    <Container component="main" maxWidth="md">
        <CssBaseline />
    <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <AssignmentIcon />
        </Avatar>
        <h1>Chores Page</h1>
        
        <TextField 
            label="Add A Chore"
            type="newChore"
            name="newChore"
            value={newChore}
            onChange={handleNewChore}
        />
        <IconButton color="primary">
            <AddCircleIcon onClick={addChore}/>
        </IconButton>
            <h3>Current Chores</h3>
            <div>
            {listItems}
            </div>
    </div>
    </Container>
    );
}

export default Chores;

