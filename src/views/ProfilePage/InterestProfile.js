import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

function InterestProfile() {
	const classes = useStyles();
	return (
		<div style={{ overflow: 'hidden' }} className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<b>Rubiks Cube </b>
				</Grid>
				<Grid item xs={10} style={{ textAlign: 'justify' }}>
					Rubiks cube might be a toy for some, might be an impossible task for some, is something I enjoy doing the most. I love
					both speed solving and also inturtively attempting all sort of cubes. Speedsolving require quick thinking and a lot of practics in order to be good at it. 
					I am not <a href="https://en.wikipedia.org/wiki/Feliks_Zemdegs">Feliks Zemdegs</a> or <a href="https://en.wikipedia.org/wiki/Max_Park">Max Park</a>, just someone trying to get better 
					and faster. Intutive solving on the other hand, require problem solving, some puzze like gear cube extreme, Latch Cube, takes me days if not weeks to solve, there are solution online,
					but what's the fun in it when you are just melee following steps? (Side Note - Current 3x3 Personal Best: 10.31s)
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<b>Boardgames</b>
				</Grid>
				<Grid item xs={10} style={{ textAlign: 'justify' }}>
					Most people have played some boardgames sometime in their live. Ranging from games like Catan,
					 Ticket to Ride to Card Against Humanity, Werewolf. Personally, I engoy games that are streagy 
					 based and/or 2 players games. Currently, my favorites are <a href='https://boardgamegeek.com/boardgame/108745/seasons'>Seasons</a>, 
					  <a href='https://boardgamegeek.com/boardgame/98778/hanabi'> Hanabi</a>, <a href='https://boardgamegeek.com/boardgame/167791/terraforming-mars'>
					Terraforming Mars</a>. I am no expert in any of them and every games, I always found room to improve! 
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<b>Hiking</b>
				</Grid>
				<Grid item xs={10} style={{ textAlign: 'justify' }}>
					Before Covid-19, I go hiking once every fortnight, either doing a few laps in Glasgow track in Dandenong Ranges
					or other day hikes like in Wilsons Promontory Nation Park, Lerderderg State Park. I am not a very experienced hiker, but 
					I am expending my trails and exploring more tracks as days goes! Welcome to drop me a message or any trail you would like to 
					recommends!
				</Grid>
			</Grid>
		</div>
	);
}

export default InterestProfile

