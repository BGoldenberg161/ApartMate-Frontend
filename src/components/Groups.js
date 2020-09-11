import React, { useState, useEffect, BrowserRouter as Router } from 'react';
import axios from 'axios';
// import NotFoundPage from './NotFoundPage';

// importing material UI components___________________________________
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

    const [groupNames, setGroupNames] = useState([])
    const [groupId, setGroupId] = useState('')
    const userId = props.user.id
    const [noGroups, setNoGroups] = useState(true)

    const classes = useStyles();

    const getGroups = () => {
      axios.get(`${REACT_APP_SERVER_URL}/groups?userId=${props.user.id}`)
      .then(groups => {
        setGroupNames(groups.data)
        setNoGroups(false)
      })
      .catch(err => console.log(`Get groups error:`, err))
    }

    useEffect(() => {
      getGroups()
    }, [groupNames])

    const handleSubmit = (e) => {
      e.preventDefault()

      axios.put(`${REACT_APP_SERVER_URL}/groups/add/${groupId}`, {userId})
        .then(response => {
          console.log(response)
        })
        .catch(err => console.log(`Error for adding Group ID`, err))
      
    }

    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography variant="h2" id="groupTitle">
        Welcome Back, <div className="username">{props.user.name}</div>
      </Typography>
      <Typography id="groups">View your groups below</Typography>
      <div id="gNames" className={classes.paper}>
          {groupNames.map((g,i) => {
              return <Link key={i} href={`/chores/${g._id}`} group={g}> 
              <Typography variant="body1" className="groupNames">
              {g.name} 
              </Typography>
              </Link> 
          })}
      </div>
        <Link href="/creategroup" variant="body2">
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            👫 Create a new group!
          </Button>
          </Link><br /><br />
          <p id="invite">Have a group invite?</p>
          <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="Input Group Invitation here 🤗"
            type="inviteId"
            name="inviteId"
            onChange={e => {setGroupId(e.target.value)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            color="secondary"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // onClick={refreshPage}
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Groups;