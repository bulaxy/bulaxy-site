
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function TimelineNode({ oppositeText, last = false, title, children, img }) {
    const classes = useStyles();
    return (
        <TimelineItem>
            {(oppositeText) ?
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        {oppositeText}
                    </Typography>
                </TimelineOppositeContent>
                :
                null
            }
            <TimelineSeparator>
                <TimelineDot>
                    {(img) ?
                        <img
                            style={{ width: '25px', height: '25px' }}
                            src={img}
                        />
                        :
                        null
                    }
                </TimelineDot>
                {(!last) ?
                    <TimelineConnector />
                    :
                    null
                }
            </TimelineSeparator>

            <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    {children}
                </Paper>
            </TimelineContent>
        </TimelineItem>
    );
}

