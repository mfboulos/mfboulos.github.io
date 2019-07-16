import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import NavLink from './components/NavLink';
import Daily from './components/Daily';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar variant="dark" bg="dark" expand="sm" sticky="top" style={{ "maxHeight": "50px" }}>
          <Navbar.Brand>
            <Link className="navbar-brand" style={{'color': '#ddfcfe'}} to="/">Michael Boulos</Link>
          </Navbar.Brand>
          <Nav fill className="w-100 ml-auto">
            <NavItem style={{'margin': 'auto'}}>
              <NavLink to="/resume">Resume</NavLink>
            </NavItem>
            <NavItem style={{'margin': 'auto'}}>
              <NavLink to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem style={{'margin': 'auto'}}>
              <NavLink to="/daily-coding-problem">Daily Coding Problem</NavLink>
            </NavItem>
            {/* <li class="nav-item">
              <a class="nav-link" href="html/contact.html">Contact</a>
            </li> */}
          </Nav>
        </Navbar>
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
