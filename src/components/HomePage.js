import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/apartMate.png';
// Material UI Imports
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
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

const HomePage = () => {
	return (
		<>
			<Grid container direction='column' justify='center' alignItems='center'>
				<Grid item xs={12}>
					<Typography variant='h4'>
						<img src={logo} alt='Logo' width='35' height='35' />
						apartMate
					</Typography>
					<Typography variant='h5'>
						Make living with your rommates alot simplier.
					</Typography>
					<Typography variant='p'>
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
					width='200px'
				>
					<div>
						<img
							alt=''
							src='https://media-exp1.licdn.com/dms/image/C5603AQEpQ6X5uER9gQ/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=XQvItOF6hI2YK6ORpkW1mbgxVlo9ICt5S1m7NJNBkdM'
						/>
						<p className='legend'>Branden Goldenberg</p>
					</div>
					<div>
						<img
							alt=''
							src='https://media-exp1.licdn.com/dms/image/C4E03AQFKfax6D4T9-A/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=4W6r5Q5DaRDj5bmY0MunpKCLHGBlKAxLtoGVjIfjdk4'
						/>
						<p className='legend'>Cristina Nguyen</p>
					</div>
					<div>
						<img
							alt=''
							src='https://media-exp1.licdn.com/dms/image/C5603AQFfyoX1lTLNgA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=ljLB3gNOrXm0vjcGAvPKLY_zMjKT9STXRHHg-DE1uNo'
						/>
						<p className='legend'>Rohun Vora</p>
					</div>
					<div>
						<img
							alt=''
							src='https://media-exp1.licdn.com/dms/image/C4D03AQEQqyWlyTzpaQ/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=JVr7AnIYvgcAWgzdZVpLXktJoEtwON7zjy2v3o05FR4'
						/>
						<p className='legend'>Alpha Martinez</p>
					</div>
					<div>
						<img
							alt=''
							src='https://media1.tenor.com/images/1cca9d587b8f2cf22116036b2523ed53/tenor.gif'
						/>
						<p className='legend'>Yoel Morad</p>
					</div>
				</Carousel>
				<Copyright />
			</Grid>
		</>
	);
};

export default HomePage;
