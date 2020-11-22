import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineNode from '../../components/Timeline/TimelineNode'
import { infinitee, serenity, ricepaperroll } from '../../constants/images'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineNode img={serenity} oppositeText="Oct 2019 - Present">
        <Typography variant="h5" component="h1">
          IT Business Support
        </Typography>
        <Typography variant="h6" component="h2">
          Serenity Life Balance
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Key Duties/Tasks
        </Typography>
        <Typography display="block" align='left' variant="body1" component="body1">
          <List>
            <ListItem dense>
              <ListItemText primary="Provide IT advice and consultation for Serenity Life Balance" />
            </ListItem>
            <ListItem dense>
              <ListItemText primary="Provide Individual IT support for external customers" />
            </ListItem>
            <ListItem dense>
              <ListItemText primary="Organisze computer lessons for customers" />
            </ListItem>
          </List>
        </Typography>
      </TimelineNode>

      <TimelineNode img={infinitee} oppositeText="Oct 2019 - Nov 2020">
        <Typography variant="h5" component="h1">
          Software and Applications Developer
        </Typography>
        <Typography variant="h6" component="h2">
          Infinitee Software
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Key Duties/Tasks
        </Typography>
        <Typography display="block" align='left' variant="body1" component="body1">
          <List>
            <ListItem dense>
              <ListItemText primary="Design and develop Mobile Applications for both phone and tablet apps using React-Native" />
            </ListItem>
            <ListItem dense>
              <ListItemText primary="Conducting research into new SDKs, Modules and library for in-house platform" />
            </ListItem>
            <ListItem dense>
              <ListItemText primary="Design and develop server side code on NodeJs and SQL database" />
            </ListItem>
          </List>
        </Typography>
      </TimelineNode>

      <TimelineNode img={ricepaperroll} oppositeText="Sep 2019 - July 2020">
        <Typography variant="h5" component="h1">
          Web Developer (Contractor)
        </Typography>
        <Typography variant="h6" component="h2">
          TindoLand
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Key Duties/Tasks
        </Typography>
        <Typography display="block" align='left' variant="body1" component="body1">
          <List>
            <ListItem dense>
              <ListItemText primary="Develop and enchant RicePaperRoll website" />
            </ListItem>
          </List>
        </Typography>
      </TimelineNode>
      <TimelineNode oppositeText="Nov 2020">
        <Typography variant="h5" component="h1">
          IT Tutor for Senior (Volunteer)
        </Typography>
        <Typography variant="h6" component="h2">
          Mount Street Neighborhood House
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Key Duties/Tasks
        </Typography>
        <Typography display="block" align='left' variant="body1" component="body1">
          <List>
            <ListItem dense>
              <ListItemText primary="Prepare material for Senior IT Lessons" />
            </ListItem>
            <ListItem dense>
              <ListItemText primary="Provide face-to-face basic IT tutorial/teaching sessions to seniors" />
            </ListItem>
          </List>
        </Typography>
      </TimelineNode>

      <TimelineNode oppositeText="Nov 2020">
        <Typography variant="h5" component="h1">
          IT Tutor for Senior (Volunteer)
        </Typography>
        <Typography variant="h6" component="h2">
          Mount Street Neighborhood House
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Key Duties/Tasks
        </Typography>
        <Typography display="block" align='left' variant="body1" component="body1">
          <List>
            <ListItem dense>
              <ListItemText primary="Prepare material for Senior IT Lessons" />
            </ListItem>
            <ListItem dense>
              <ListItemText primary="Provide face-to-face basic IT tutorial/teaching sessions to seniors" />
            </ListItem>
          </List>
        </Typography>
      </TimelineNode>

      <TimelineNode oppositeText="Dec 2013 - Jan 2014">
        <Typography variant="h5" component="h1">
          Pick and Packer
        </Typography>
        <Typography variant="h6" component="h2">
          Campion Eduication
        </Typography>
      </TimelineNode>

      <TimelineNode oppositeText="Dec 2012 - Jan 2013">
        <Typography variant="h5" component="h1">
          Waiter
        </Typography>
        <Typography variant="h6" component="h2">
          China Bar Signature (Burwood)
        </Typography>
      </TimelineNode>

      <TimelineNode oppositeText="June 2012">
        <Typography variant="h5" component="h1">
          Office Helper (Work Experience Program)
        </Typography>
        <Typography variant="h6" component="h2">
          Migrant Information Center (Box Hill)
        </Typography>
      </TimelineNode>
    </Timeline>
  );
}