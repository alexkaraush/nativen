import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'block',
    margin: '0 auto',
    padding: '0 1em',
    width: 'calc(100% - 2em)',
    marginTop: 20,
    overflow: 'hidden',
    transform: 'rotate(180deg)',
    [theme.breakpoints.down("sm")]: {
      padding: '0 1em',
    },
  },
  icon: {
    textAlign: 'center',
    width: '3em',
    height: '2.1em',
    paddingTop: '.9em',
    float: 'left',
    overflow: 'hidden',
    fontWeight: '800',
    color: '#fff',
    backgroundColor: "#3f51b5",
    borderRadius: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: '.1em',
    },
  },
  text: {
    float: 'right',
    lineHeight: '1.35em',
    padding: '1em',
    width: 'calc(100% - 6em)',
    overflow: 'hidden',
    backgroundColor: "#C6C9F0",
    borderRadius: 5,
    marginBottom: '1em',
    [theme.breakpoints.down("sm")]: {
      width: 'calc(100% - 5em)',
      fontSize: '.8em',
      lineHeight: '1.45em',
    },
  },
  words: {
    display: 'inline-block',
    borderRadius: 3,
    border: '1px solid rgba(255, 255, 255, 0.9)',
    padding: '0 .9em 0 .9em',
    [theme.breakpoints.down("sm")]: {
      padding: '0 .9em 0 .9em',
      lineHeight: '1em',
    },
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
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

export default function Dialog(props) {
  const classes = useStyles();
  return (
    <div className={classes.message}>
      <div className={classes.icon}>ME</div>
      <div className={classes.text}>Lorem ipsume <span className={classes.words}>...</span> amen Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt <span className={classes.words}>in culpa</span> qui officia deserunt mollit anim id est laborum.</div>
      <div className={classes.text}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </div>    
    </div>
  );
}
