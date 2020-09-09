import React, {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// importing material UI components___________________________________
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.success.main,
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

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState ('')
    const [redirect, setRedirect] = useState(false)
    const classes = useStyles();
    
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password){
            const newUser = { name, email, password, phone }

            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
            .then(response => {
                console.log(response)
                setRedirect(true)
            })
            .catch(err => console.log("😲", err))
        }
    }
    
    if (redirect) return <Redirect to="/login" />

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              Sign Up
            </Typography>
            <Typography variant="body1">
              Create a new account.
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                    label="Name"
                    type="name"
                    name="name"
                    value={name}
                    onChange={handleName}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    color="secondary"
                />
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    color="secondary"
                />
                <TextField
                    label="Phone"
                    type="phone"
                    name="phone"
                    value={phone}
                    onChange={handlePhone}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    color="secondary"
                />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    color="secondary"
                />
            
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              </form>
              <Link href="http://localhost:3000/login" variant="body2">
                {"Already have an account? Login"}
              </Link>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
    }
    
    export default Register;

