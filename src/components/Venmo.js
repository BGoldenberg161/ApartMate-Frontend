import React, { useState, useEffect } from 'react';
import axios from 'axios';

// importing material UI components___
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Venmo = (props) => {
	const useStyles = makeStyles(theme => ({
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


	const groupId = props.location.pathname.slice(7);
	const classes = useStyles();
	const [values, setValues] = useState({
		amount: '',
	});

	const handleChange = prop => event => {
		setValues({ ...values, [prop]: event.target.value });
	};
	console.log(props)
	const createRequest = () => {
		axios.post(`${REACT_APP_SERVER_URL}/venmo/create`, { props, values, groupId })
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log('Venmo stole our money: ', err);
			});
	};

	return (
		<div>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
				<Typography variant="h2" style={{paddingBottom: 20}}>
            		Venmo
          		</Typography>
				<FormControl className={classes.margin} variant='outlined'>
					<InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
					<OutlinedInput
						id='outlined-adornment-amount'
						value={values.amount}
						onChange={handleChange('amount')}
						startAdornment={<InputAdornment position='start'>$</InputAdornment>}
						labelWidth={60}
					/>
					<Button onClick={createRequest} variant='outlined' color='primary'>
						Send me $$$
					</Button>
				</FormControl>
				</div>
			</Container>
		</div>
	);
};

export default Venmo;
