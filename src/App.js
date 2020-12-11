import './App.css';
import Home from './home.js';
import LessonsList from './lessonsList.js';
import Header from './header.js';
import Exercise from './exercise.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const IndexPage = () => {
  return (
    <Home />
  );
};


function App() {
  return (
    <section >
    <Router>
      <Header />
      <div>   
       <Route exact path="/" component={IndexPage} />    
       <Route exact  path="/lessons" component={LessonsList} />  
       <Route exact  path="/exercise" component={Exercise} />       
      
      </div>  
      </Router>  
    </section>
  );
}

export default App;
