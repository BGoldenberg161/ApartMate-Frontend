import React, { useState, useEffect } from 'react';
import axios from 'axios';

// importing material UI components___
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Venmo = (props) => {
	const useStyles = makeStyles(theme => ({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		margin: {
			margin: theme.spacing(1),
		},
		withoutLabel: {
			marginTop: theme.spacing(3),
		},
		textField: {
			width: '25ch',
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
	);
};

export default Venmo;
