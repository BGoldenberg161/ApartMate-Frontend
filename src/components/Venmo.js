import React from 'react';

// importing material UI components___
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';
import LinkIcon from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const Venmo = () => {

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

      

    return (
        <div>
            <form onSubmit="handleSubmitVenmo" className={classes.form} noValidate autoComplete="off">
          <TextField
            onChange="{setValue}"
            value="{venmoHandle}"
            id="outlined-basic"
            label="$"
            variant="outlined"
          />
          <Button type="submit" className={classes.submit}>
            Submit
          </Button>
        </form>
        </div>
    )
}

export default Venmo;
