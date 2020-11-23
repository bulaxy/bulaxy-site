import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  buttonRoot: {
    paddingTop: 6,
    paddingBottom: 6,
  },
  cardActionRoot: {
    padding: 0
  },
  cardContentRoot: {
    paddingTop: 0,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  cardHeaderStyle:{
    textAlign:'center',
    paddingBottom:'8px'
  },
}));

export default function RecipeReviewCard({ content, img, children, title, subtitle }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          (img) ?
            <img
              width="80"
              height="40"
              src={img}
            />
            :
            null

        }
        title={title}
        subheader={subtitle}
        className={[classes.cardHeaderStyle]}
      />
      {
        (content) ?
          <>
            <CardActions className={classes.cardActionRoot} disableSpacing>
              <IconButton
                className={
                  clsx(
                    classes.buttonRoot,
                    classes.expand,
                    {
                      [classes.expandOpen]: expanded,
                    },
                  )
                }
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent className={classes.cardContentRoot}>
                {children}
              </CardContent>
            </Collapse>
          </>
          :
          null
      }

    </Card>
  );
}
