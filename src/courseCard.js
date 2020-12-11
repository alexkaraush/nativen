import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    
    [theme.breakpoints.down("xs")]: {
      maxWidth: '96%',
      margin: '2%',
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: '46%',
      margin: '2%',
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: '23%',
      margin: '1%',
    },
    float: 'left',
    
  },
  illustration: {
    overflow: 'hidden',
    backgroundColor: "#E3E5FF",
    height: 140,
  },
  image: {
    display: 'block',
    backgroundColor: "#E3E5FF",
    margin: '0 auto',
    height: 100,
    marginTop: 20,
  },
  content: {
    height: 140,
    overflow: 'hidden',
    [theme.breakpoints.down("xs")]: {
      height: 100,
    },
  },
  paddingR: {
    justifyContent: 'space-between',
  },
  lessonsCount: {
    color: '#888',
    paddingLeft: '1em',
  },
  media: {
    height: 140,
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { image, color, title, description, done } = props;
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/lessons'), [history]);

  return (
    <Card className={classes.root}>

      <CardActionArea onClick={handleOnClick} >
        <div className={classes.illustration} >
          <img className={classes.image} src={image} alt="alt" />
        </div> 
        <CardContent className={classes.content} >
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <LinearProgress variant="determinate" value={done} />
      <CardActions className={classes.paddingR} >
        <span className={classes.lessonsCount}>3 / 12</span> 
        <Button size="small" color="primary"  >
          START
        </Button>
      </CardActions>
    </Card>
  );
}
