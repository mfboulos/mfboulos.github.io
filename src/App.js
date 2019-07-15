import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import NavLink from './components/NavLink';
import Daily from './components/Daily';
import Resume from './components/Resume';
import Projects from './components/Projects';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <h1>Me IRL</h1>
        <ul role="nav">
          <li><NavLink to="/daily-coding-problem">Daily Coding Problem</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
        </ul>
        <div>
          <Route path="/daily-coding-problem" component={Daily}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    )
  }
}

export default App;
