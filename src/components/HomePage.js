import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/apartMate.png';
// Material UI Imports
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
// Carousel React StandAlone Package w/ Material UI Imports
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'apartMate © '} {new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

const HomePage = () => {
	const classes = useStyles();
	return (
		<>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<Grid
						container
						direction='column'
						justify='center'
						alignItems='center'
					>
						<Grid item xs={12}>
							<Typography variant='h4'>
								<img src={logo} alt='Logo' width='35' height='35' />
								apartMate
							</Typography>
							<Typography variant='h5'>
								Make living with your rommates alot simplier.
							</Typography>
							<Typography variant='body1'>
								Easy Venmo splits, automatic chore schedules and alot more!
							</Typography>
						</Grid>
						<br></br>
						<Button
							variant='contained'
							color='primary'
							component={Link}
							to='/register'
						>
							Get Started
						</Button>
						<Button
							href='#text-buttons'
							color='primary'
							component={Link}
							to='/login'
						>
							Login
						</Button>
						<Carousel
							showStatus={false}
							showIndicators={false}
							showArrows={false}
							showThumbs={false} // thumbs are tacky #shoveEmWhereTheSunDontRise
							swipeable // will make swipeable for mobile
							autoPlay
							infiniteLoop
							width='500px'
						>
							<div>
								<img
									alt=''
									src='/https://www.triplemint.com/blog/wp-content/uploads/2018/01/Happy-roommates-feature-pixabay.com_-759x500.jpg'
								/>
								<p className='legend'>apartMate roommates</p>
							</div>
							<div>
								<img
									alt=''
									src='https://cdn.crediful.com/app/uploads/2019/12/venmo.jpg'
								/>
								<p className='legend'>Easy Venmo Splits!</p>
							</div>
							<div>
								<img
									alt=''
									src='https://i5.walmartimages.com/asr/7278a7ff-0745-4d10-8bf5-92732d9671ce_1.b44207fefb4058f747fd297abdd63d70.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'
								/>
								<p className='legend'>No more Chore Lists!</p>
							</div>
						</Carousel>
						<Copyright />
					</Grid>
				</div>
			</Container>
		</>
	);
};

export default HomePage;
