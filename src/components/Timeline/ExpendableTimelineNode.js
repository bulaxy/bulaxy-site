
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Typography from '@material-ui/core/Typography';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SimpleList from '../List/SimpleList'
import CardExpendable from '../Card/CardExpendable'
const useStyles = makeStyles((theme) => ({
    contentTitle: {
        textAlign: 'center'
    },
}));
export default function TimelineNode(props) {
    const classes = useStyles();
    const { last, date, content = {} } = props;
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {date}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator >
                <TimelineDot />
                {(!last) ?
                    <TimelineConnector />
                    :
                    null
                }
            </TimelineSeparator>
            <TimelineContent>
                <CardExpendable {...props}>
                    <Typography className={classes.contentTitle} variant="body1" color="textSecondary">
                        {content.title}
                    </Typography>
                    <SimpleList content={content.items} />
                </CardExpendable>
            </TimelineContent>
        </TimelineItem>
    );
}

