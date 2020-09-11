import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Profile = (props) => {

    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(0),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.main,
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(0),
        borderRadius: 4,
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    const classes = useStyles();

    const userData = props.user ?
    (<div>
            <p><strong>Name:</strong> {props.user.name}</p>
            <p><strong>Email:</strong> {props.user.email}</p>
            <p><strong>Venmo:</strong> {props.user.venmo}</p>
    </div>) : <h4>Loading...</h4>
    // console.log("THIS IS MY VENMO:" + props.user._id)
    const [venmoHandle, setVenmoHandle] = useState(props.user.venmo)

    const setUpVenmo = e => {
        setVenmoHandle(e.target.value)
    }

    const handleSubmitVenmo = (e) => {
        e.preventDefault()
        axios.post(`${REACT_APP_SERVER_URL}/api/users/addVenmo`, {userId: props.user.id, venmoHandle})
        .then(response => {
            props.setUser(response.data)
        })
        .catch(err => {
            console.log('There was an error: ', err)
        })
    }

    const errorDiv = () => {
        return(
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">Login</Link> to view this page</h3>
            </div>
        )
    }

    return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h2">
            Profile
          </Typography>
          <img src={require('../assets/images/profilePage.gif')} alt="profile" style={{maxWidth: 250}}/>
        <div>
        {props.user ? userData : errorDiv()}
        <form onSubmit={handleSubmitVenmo} className={classes.form} noValidate autoComplete="off">
          <TextField
            onChange={setUpVenmo}
            value={venmoHandle}
            id="outlined-basic"
            label="you new venmo name"
            variant="outlined"
            margin="normal"
            fullWidth
            color="secondary"
          />
          <Button 
            type="submit" 
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Submit
          </Button>
        </form>
      </div>
      </div>
    </Container>
    );
}

export default Profile
