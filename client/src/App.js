import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import './styles.css';
import Landing from './components/pages/Landing/Landing';
import Contact from './components/pages/Contact/Contact';
import SignIn from './components/pages/Auth/Signin';
import SignUp from './components/pages/Auth/Signup';
import Jobs from './components/pages/Jobs/Jobs';

function App() {
  return (
    <div className="wrapper">
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/SignIn' component={SignIn}/>
        <Route path='/ContactUs' component={Contact}/>
        <Route path='/Jobs' component={Jobs}/>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
