import Lesson from './lessonCard.js';
import Illustration from './illustration.js';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  lessonsHeader: {
    margin: '0 auto 3em auto',
    overflow: 'hidden',
    padding: '0 2em 2em 2em',
    backgroundColor: "#E3E5FF",
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    [theme.breakpoints.down("xm")]: {
    },
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lg")]: {
    },
  },
  description: {
    overflow: 'visible',

    [theme.breakpoints.down("xm")]: {
    },
    [theme.breakpoints.up("md")]: {
      width: '60%',
      padding: '0 0 2em 0',
      float: 'left',
    },
    [theme.breakpoints.up("lg")]: {

    },
  },
  meta: {
    paddingTop: '1em',
    //backgroundColor: "#eee",
    float: 'right',
    [theme.breakpoints.down("xm")]: {
      //backgroundColor: "#ff0000",
    },
    [theme.breakpoints.up("md")]: {
      //backgroundColor: "#00ff00",
    },
    [theme.breakpoints.up("lg")]: {
      //backgroundColor: "#0000ff",
    },
  },
  paddingRight: {
    marginRight: '2em',
  },
  descText: {
    color: '#333',
    lineHeight: '1.4em',
    paddingBottom: '1em',
  },
  lessonsCount: {
    fontWeight: '600',
    float: 'left',
    display: 'block',
    marginTop: '1.5em',
  },
}));


function LessonsHeader() {
  const classes = useStyles();
  return (
    <div className={classes.lessonsHeader}>
      <Illustration />
      <h2>COURSE NUMBER ONE</h2>
      <div className={classes.description}>
        <p className={classes.descText}>Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <LinearProgress variant="determinate" value="30" />
        <span className={classes.lessonsCount}>3 / 12</span>  
        <div className={classes.meta}> 
          <Button variant="outlined" className={classes.paddingRight} >Restart</Button>
          <Button variant="contained" color="primary" href="#contained-buttons">Resume</Button>
        </div>
      </div>
      
    </div>
  );
}

export default LessonsHeader;