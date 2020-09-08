import React from 'react';
import { Link } from 'react-router-dom';
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';

const useStyles = makeStyles({
	root: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
	},
});

const BottomNav = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState('home');

	return (
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
				value='profile'
				component={Link}
				to='/profile'
				label='Profile'
				icon={<AccountCircleOutlinedIcon />}
			/>
			<BottomNavigationAction
				value='create'
				component={Link}
				to='/creategroup'
				label='Create Group'
				icon={<AddCircleOutlineOutlinedIcon />}
			/>
			<BottomNavigationAction
				value='invite'
				component={Link}
				to='/groupurl'
				label='Invite'
				icon={<GroupAddOutlinedIcon />}
			/>
			<BottomNavigationAction
				value='accept'
				component={Link}
				to='/accept'
				label='Accept Invite'
				icon={<HowToRegOutlinedIcon />}
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
			<BottomNavigationAction
				value='chores'
				component={Link}
				to='/chores'
				label='Chores'
				icon={<PostAddOutlinedIcon />}
			/>
		</BottomNavigation>
	);
};

export default BottomNav;
