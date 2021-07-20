import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path='/' component={Home}/>
        </Switch>
        <Switch>
          <Route path='/projects' component={Projects} />
        </Switch>
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
        <Switch>
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <footer className='footer'>
          <i class="far fa-copyright">&nbsp;Chris Clark | All Rights Reserved</i>
      </footer>
    </>
  );
}

export default App;
