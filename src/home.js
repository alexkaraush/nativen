import Course  from './courseCard.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  App: {
    width: '92vw',
    maxWidth: '1200px',
    margin: '30px auto 0 auto',
    overflow: 'hidden',
  },
}));


function Home() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <header className="App-header">
        <Course done="95" image="/images/002-chat.png" title="COURSE REACT" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Course done="95" image="/images/008-browser.png" title="COURSE ANGULAR MASTER" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident" />
        <Course done="65" image="/images/004-chat-2.png" title="COURSE VUE" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Course done="10" image="/images/007-video-chat.png" title="COURSE REACT" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Course done="0" image="/images/004-chat-2.png" title="COURSE VUE" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  />
        <Course done="45" image="/images/005-chat-3.png" title="COURSE ANGULAR" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Course done="80" image="/images/003-chat-1.png" title="COURSE REACT" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Course done="50" image="/images/chat.png" title="COURSE VUE" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </header>
    </div>
  );
}

export default Home;