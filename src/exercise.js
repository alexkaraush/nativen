import { makeStyles } from '@material-ui/core/styles';
import Dialog  from './dialog.js';

const useStyles = makeStyles((theme) => ({
  exercise: {
    width: '92vw',
    maxWidth: '1200px',
    margin: '30px auto 0 auto',
    overflow: 'hidden',
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      margin: '10px auto 0 auto',
    },
  },
  illustration: {
    float: 'left',
    height: '40vh',
    width: '50%',
    backgroundColor: '#eee',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      height: '20vh',
    },
  },
  exerciseZone: {
    float: 'left',
    height: 'calc(40vh - 2em)',
    paddingBottom: '2em',
    width: '50%',
    overflowY: 'auto',
    backgroundColor: '#E3E5FF',
    transform: 'rotate(180deg)',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      height: 'calc(30vh - 2em)',
    },
  },
  actionZone: {
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: '12em',
    float: 'left',
    width: '100%',
    backgroundColor: '#eef',
    [theme.breakpoints.down("sm")]: {
      paddingBottom: '4em',
    },
    [theme.breakpoints.down("xm")]: {
      paddingBottom: '5em',
    },
  },
  time: {
    position: 'relative',
    float: 'left',
    height: '30px',
    width: '100%',
    backgroundColor: '#4A5176',
    [theme.breakpoints.down("sm")]: {
      height: '15px',
    }
  },
  timeBar: {
    float: 'left',
    height: '30px',
    width: '0%',
    backgroundColor: '#3f51b5',
    borderRight: '1px solid #566BDD',
    [theme.breakpoints.down("sm")]: {
      height: '15px',
    }
  },
  point: {
    position: 'absolute',
    left: '0%',
    top: '12px',
    borderRadius: '30px',
    height: '7px',
    width: '7px',
    marginLeft: '-3px',
    [theme.breakpoints.down("sm")]: {
      top: '6px',
      height: '3px',
      width: '3px',
      marginLeft: '-1.5px',
    },
    backgroundColor: 'rgba(255, 255, 255, 1.00)',
    transition: 'width .5s, height .5s, top .5s, margin-left .5s',
  },
  pointBig: {
    top: '8px',
    height: '15px',
    width: '15px',
    marginLeft: '-7px',
    [theme.breakpoints.down("sm")]: {
      top: '3px',
      height: '9px',
      width: '9px',
      marginLeft: '-4.5px',
    },
    transition: 'width .5s, height .5s, top .5s, margin-left .5s',
  },
  words: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#ee9999',
    margin: '3em auto 1em',
    width: '60%',
    [theme.breakpoints.down("sm")]: {
      margin: '1em auto 1em',
      width: '100%',
    },
    [theme.breakpoints.up("md")]: {
      margin: '1em auto 1em',
      width: '80%',
    }
  },
  word: {
    color: '#3f51b5',
    cursor: 'pointer',
    fontSize: '1.2em',
    fontWeight: 400,
    borderRadius: '6px',
    padding: '.3em .5em .5em',
    margin: '.3em .35em',
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,0.6)',
    backgroundColor: '#c6c9f0',
    transition: 'background-color .5s',
    [theme.breakpoints.down("sm")]: {
      fontSize: '1em',
    },
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.001),0px 4px 5px 0px rgba(0,0,0,0.01),0px 1px 10px 0px rgba(0,0,0,0.1)',
    "&:hover": {
      backgroundColor: '#DBDEFF',
      transition: 'background-color .5s',
    }
  },
  disable: {
    color: '#999',
    cursor: 'default',
    backgroundColor: '#eee',
    border: '1px solid rgba(255,255,255,0.7)',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.001),0px 4px 5px 0px rgba(0,0,0,0.01),0px 1px 10px 0px rgba(0,0,0,0.1)',
    "&:hover": {
      backgroundColor: '#eee',
    }
  },
  actionButtons: {
    position: 'absolute',
    bottom: '1em',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#ee9999',
    width: '100%',
  },
  prmr: {
    userSelect: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.2em',
    fontWeight: 400,
    borderRadius: '6px',
    padding: '.7em 1em .7em',
    margin: '.3em .35em',
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,0.9)',
    backgroundColor: '#3f51b5',
    transition: 'background-color .5s',
    [theme.breakpoints.down("sm")]: {
      fontSize: '1em',
    },
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.01),0px 4px 5px 0px rgba(0,0,0,0.1),0px 1px 10px 0px rgba(0,0,0,0.1)',
    "&:hover": {
      backgroundColor: '#586BCF',
      transition: 'background-color .5s',
    }
  },
  scnd: {
    userSelect: 'none',
    color: '#3f51b5',
    cursor: 'pointer',
    fontSize: '1.2em',
    fontWeight: 400,
    borderRadius: '6px',
    padding: '.7em 1em .7em',
    margin: '.3em .35em',
    display: 'inline-block',
    border: '1px solid #3f51b5',
    transition: 'background-color .5s',
    [theme.breakpoints.down("sm")]: {
      fontSize: '1em',
    },
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.01),0px 4px 5px 0px rgba(0,0,0,0.1),0px 1px 10px 0px rgba(0,0,0,0.1)',
    "&:hover": {
      backgroundColor: '#F5F5FF',
      transition: 'background-color .5s',
    }
  },


}));

function Exercise() {
  const classes = useStyles();

  return (
    <div className={classes.exercise}>
      <div className={classes.illustration}>
        <img src="/images/exercise2.jpg" alt="exercise illustration" />
      </div>
      <div className={classes.exerciseZone}>
      <Dialog />
      <Dialog />
      </div>
      <div className={classes.time}>
        <div className={classes.timeBar} style={{width:"20%"}}></div>
        <span className={[classes.point, classes.pointBig].join(' ')} style={{left:"10%"}} ></span>
        <span className={classes.point} style={{left:"40%"}}></span>
        <span className={classes.point} style={{left:"90%"}}></span>


      </div>
      <div className={classes.actionZone}>
        <div className={classes.words}>
          <div className={classes.word}>occaecat</div>
          <div className={classes.word}>excepteur</div>
          <div className={[classes.word, classes.disable].join(' ')}>proident</div>
          <div className={classes.word}>reprehenderit</div>
          <div className={classes.word}>occaecat</div>
          <div className={[classes.word, classes.disable].join(' ')}>excepteur</div>
          <div className={classes.word}>proident</div>
          <div className={classes.word}>reprehenderit</div>
          <div className={classes.word}>proident</div>
          <div className={classes.word}>reprehenderit</div>
        </div>
        
        <div className={classes.actionButtons}>
          <div className={classes.scnd} >SKIP</div>
          <div className={classes.prmr} >ANSWER</div>
        </div>

      </div>
    </div>
  );
}

export default Exercise;