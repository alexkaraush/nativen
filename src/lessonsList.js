import Lesson from './lessonCard.js';
import LessonsHeader from './lessonsHeader.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  lessons: {
    width: '92vw',
    maxWidth: '1200px',
    margin: '30px auto 0 auto',
    overflow: 'hidden',
    [theme.breakpoints.down("xm")]: {
    },
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lg")]: {
    },
  },
}));

function LessonsList() {
  const classes = useStyles();
  return (
    <div>
      <LessonsHeader />
      <div className={classes.lessons}>
        <Lesson done="0" image="/images/003-chat-1.png" title="LESSON VUE" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  />
        <Lesson done="45" image="/images/003-chat-1.png" title="LESSON ANGULAR" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Lesson done="80" image="/images/008-browser.png" title="LESSON REACT" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Lesson done="50" image="/images/007-video-chat.png" title="LESSON VUE" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Lesson done="95" image="/images/008-browser.png" title="LESSON REACT" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Lesson done="95" image="/images/007-video-chat.png" title="LESSON ANGULAR MASTER" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident" />
        <Lesson done="65" image="/images/003-chat-1.png" title="LESSON VUE" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Lesson done="10" image="/images/003-chat-1.png" title="LESSON REACT" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
    </div>
  );
}

export default LessonsList;