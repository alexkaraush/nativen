import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  illustration: {
    height: '10em',
    borderRadius: '5px',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    backgroundColor: "#7278C6",
    marginTop: '1em',
    overflow: 'hidden',
    [theme.breakpoints.down("xm")]: {

    },
    [theme.breakpoints.up("md")]: {
      marginTop: '4em',
      width: '30%',
      float: 'right',
    },
    [theme.breakpoints.up("lg")]: {

    },
  },
  image: {
    display: 'block',
    height: '7em',
    margin: '1.5em auto',
  },
}));


function Illustration() {
  const classes = useStyles();
  return (
    <div className={classes.illustration}>
      <img  className={classes.image} src="/images/002-chat.png" alt="img" />
    </div>
  );
}

export default Illustration;