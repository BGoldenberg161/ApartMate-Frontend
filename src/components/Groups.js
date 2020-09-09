import React, { useState, useEffect, BrowserRouter as Router } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Details from './Details';


// importing material UI components___________________________________
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

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

const Groups = (props) => {
    console.log(props.user)

    const [userId, setuserId] = useState(props.user.id)
    const [groupNames, setGroupNames] = useState([])

    const classes = useStyles();

    useEffect((userId) => {
      axios.get(`${REACT_APP_SERVER_URL}/groups`, {userId})
        .then(groups => {
          console.log(groups.data)
          setGroupNames(groups.data)
        })
        .catch(err => console.log(`Get groups error:`, err))
    }, [])
    console.log(groupNames)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          {groupNames.map((g,i) => {
              return <Link href={`/chores/${g._id}`} group={g}> {g.name} </Link> 
          })}
      </div>
        <Link href="/creategroup" variant="body2">
          {"Create a new group!"}
        </Link>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Groups;
