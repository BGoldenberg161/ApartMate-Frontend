import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		backgroundSize: 'contain',
	},
	cardContent: {
		flexGrow: 1,
	},
}));

const creatorCards = [
	{
		img:
			'https://media-exp1.licdn.com/dms/image/C4E03AQG23_BLFynzgA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=pQAQ1yMvMYENiYKIsIaJ1Xb7Su6slfHiT5pt4CHeh0o',
		name: 'Yoel Morad',
		description: 'FrontEnd/BackEnd, Design Goldmine and Material-UI Butterfly',
		githublink: 'https://github.com/yoel0',
		linkedin: 'https://www.linkedin.com/in/yoelmorad/',
	},
	{
		img:
			'https://media-exp1.licdn.com/dms/image/C4E03AQFKfax6D4T9-A/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=4W6r5Q5DaRDj5bmY0MunpKCLHGBlKAxLtoGVjIfjdk4',
		name: 'Cristina Nguyen',
		description:
			'FrontEnd/BackEnd Features Specialist and our Chore Commodore!',
		githublink: 'https://github.com/crnguyen',
		linkedin: 'https://www.linkedin.com/in/cristinanguyen/',
	},
	{
		img:
			'https://media-exp1.licdn.com/dms/image/C5603AQEpQ6X5uER9gQ/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=XQvItOF6hI2YK6ORpkW1mbgxVlo9ICt5S1m7NJNBkdM',
		name: 'Branden Goldenberg',
		description: 'FrontEnd/BackEnd Guardian, Gitmaster & Tech Lead',
		githublink: 'https://github.com/BGoldenberg161',
		linkedin: 'https://www.linkedin.com/in/bgoldenberg161/',
	},
	{
		img:
			'https://media-exp1.licdn.com/dms/image/C5603AQFfyoX1lTLNgA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=ljLB3gNOrXm0vjcGAvPKLY_zMjKT9STXRHHg-DE1uNo',
		name: 'Rohun Vora',
		description: 'The BackEnd Blender, and Think Tank.',
		githublink: 'https://github.com/rohunvora',
		linkedin: 'https://www.linkedin.com/in/rohunvora/',
	},
	{
		img:
			'https://media-exp1.licdn.com/dms/image/C4D03AQEQqyWlyTzpaQ/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=JVr7AnIYvgcAWgzdZVpLXktJoEtwON7zjy2v3o05FR4',
		name: 'Alpha Martinez',
		description: 'FrontEnd/BackEnd, Group Guru.',
		githublink: 'https://github.com/alpha-martinez',
		linkedin: 'https://www.linkedin.com/in/alpha-martinez/',
	},
	{
		img:
			'https://www.talentunleashedawards.com/wp-content/uploads/2016/03/General-Assembly-logo.jpg',
		name: 'We 💙 our Mentors',
		description:
			'Taylor Darneille, Rome Bell, Adam Honoré, Pete Fitton, Erik Heikkila, David Schawell, Mac Jankowski, Seanny Phoenix, Sarah King',
		githublink: 'https://github.com/WDI-SEA',
		linkedin: 'https://www.linkedin.com/school/general-assemb-ly/',
	},
];

const About = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth='sm'>
						<Typography
							component='h1'
							variant='h2'
							align='center'
							color='textPrimary'
							gutterBottom
						>
							About us
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='textSecondary'
							paragraph
						>
							creative, friendly Software Engineers dedicated to producing ideas
							that work damn hard for our clients.. (Slide in to the DMs for
							Venmo Link)
						</Typography>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth='md'>
					{/* End hero unit */}
					<Grid container spacing={4}>
						{creatorCards.map(creator => (
							<Grid item key={creator.name} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image={creator.img}
										title='Creator Image'
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant='h5' component='h2'>
											{creator.name}
										</Typography>
										<Typography>{creator.description}</Typography>
									</CardContent>

									<CardActions>
										<Button size='small' color='primary'>
											<a href={creator.githublink} target='_blank'>
												Github
											</a>
										</Button>
										<Button size='small' color='primary'>
											<a href={creator.linkedin} target='_blank'>
												LinkedIn
											</a>
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</React.Fragment>
	);
};

export default About;
