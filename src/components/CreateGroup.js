// No wammies, no wammies, no wammies!
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// importing material UI components___________________________________
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// _______________________________________________________________________

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'apartmate © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-90px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  margin: {
    marginTop: '-80px'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
    borderRadius: 4
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CreateGroup = (props) => {
    const groupUser = props.user

    const [groupName, setGroupName] = useState('')
    const [newGroup, setNewGroup] = useState(false)
    // const [groupUser, setGroupUser] = useState(props.user) 
    //state that holds in the group id 
    
    const classes = useStyles();

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(groupName)

      // const data = { groupName }

      axios.post(`${REACT_APP_SERVER_URL}/groups/create`, {groupName, groupUser})
        .then(response => {
          console.log(response)
          setNewGroup(true)
        })
        .catch(err => console.log(`Create group Error Branden`, err))
      
    }

    const handleGroupName = (e) => {
        setGroupName(e.target.value)
    }

      if (newGroup) return <Redirect to='/groups' user={props.user} />

    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Avatar id="icon" alt="people icon" src="https://raw.githubusercontent.com/CeamKrier/react-native-peeps/HEAD/example.png" />
          <Avatar id="icon2" alt="Remy Sharp" src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53534d67293a6fe95a9616_peep-22.svg" />
          <Avatar id="icon3" alt="Remy Sharp" src="https://blush.ly/WdB5j5nah/p" className={classes.large} /> 
          <Avatar id="icon4" alt="Remy Sharp" src="https://blush.ly/o0Z0Q4CgA/p" />
          <Avatar id="icon5" alt="Remy Sharp" src="https://blush.ly/gSkbM8vcD/p" />       
          <Typography component="h1" variant="h3" className={classes.margin} id="welcome">
           Welcome, <div className="username">{props.user.name}</div>
          <br />
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="Group Name"
            type="groupName"
            name="groupName"
            value={groupName}
            onChange={handleGroupName}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            color="secondary"
          />
          {/* add a design to button  */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ♥️ Create your group!
          </Button>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default CreateGroup;