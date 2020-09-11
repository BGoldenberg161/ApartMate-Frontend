import React from 'react';
import { Link } from 'react-router-dom';
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

const useStyles = makeStyles({
	root: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
	},
});

const BottomNav = props => {
	const classes = useStyles();
	const [value, setValue] = React.useState('home');

	return (
		<>
			{props.isAuth ? (
				<>
					<BottomNavigation
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						showLabels
						className={classes.root}
					>
						<BottomNavigationAction
							value='profile'
							component={Link}
							to='/profile'
							label='Profile'
							icon={<AccountCircleOutlinedIcon />}
						/>
						<BottomNavigationAction
							value='groups'
							component={Link}
							to='/groups'
							label='Groups'
							icon={<PeopleAltIcon />}
						/>
						<BottomNavigationAction
							value='venmo'
							component={Link}
							to='/venmo'
							label='Venmo'
							icon={<MonetizationOnOutlinedIcon />}
						/>
						<BottomNavigationAction
							value='logout'
							onClick={props.handleLogout}
							component={Link}
							to='/'
							label='Logout'
							icon={<ExitToAppOutlinedIcon />}
						/>
					</BottomNavigation>
				</>
			) : (
				<>
					<BottomNavigation
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						showLabels
						className={classes.root}
					>
						<BottomNavigationAction
							value='home'
							component={Link}
							to='/'
							label='Home'
							icon={<HomeOutlinedIcon />}
						/>
						<BottomNavigationAction
							value='about'
							component={Link}
							to='/about'
							label='About'
							icon={<RecentActorsOutlinedIcon />}
						/>
						<BottomNavigationAction
							value='register'
							component={Link}
							to='/register'
							label='Signup'
							icon={<CreateOutlinedIcon />}
						/>
						<BottomNavigationAction
							value='login'
							component={Link}
							to='/login'
							label='Login'
							icon={<VpnKeyOutlinedIcon />}
						/>
					</BottomNavigation>
				</>
			)}
		</>
	);
};

export default BottomNav;
