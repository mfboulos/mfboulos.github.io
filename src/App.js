import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Daily from './components/Daily';
import Resume from './components/Resume';
import Projects from './components/Projects';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <h1>Me IRL</h1>
        <ul role="nav">
          <li><Link to="/daily-coding-problem">Daily Coding Problem</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
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
