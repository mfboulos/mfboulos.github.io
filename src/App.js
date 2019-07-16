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
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <Link className="navbar-brand" to="/">Michael Boulos</Link>
          <ul className="navbar-nav nav-fill w-100 ml-auto">
            <li className="nav-item">
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/daily-coding-problem">Daily Coding Problem</NavLink>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="html/contact.html">Contact</a>
            </li> */}
          </ul>
        </nav>
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
