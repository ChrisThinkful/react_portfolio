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
      </Router>
    </>
  );
}

export default App;
