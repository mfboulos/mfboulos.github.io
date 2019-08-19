import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import NavLink from './components/NavLink';
import Daily from './components/Daily';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexFlow: 'column', height: '100%'}}>
        <HashRouter>
          <Navbar variant="dark" bg="dark" expand="sm" sticky="top" style={{ "maxHeight": "50px" }}>
            <Navbar.Brand>
              <Link className="navbar-brand" style={{'color': '#ddfcfe'}} to="/">Michael Boulos</Link>
            </Navbar.Brand>
            <Nav fill className="w-100 ml-auto">
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/resume">Qualifications</NavLink>
              </NavItem>
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/projects">Projects</NavLink>
              </NavItem>
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/daily-coding-problem">Other Fun Stuff</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <div style={{flexGrow: 1, backgroundColor: '#1a1a1a'}}>
            <div style={{margin: '1%'}}>
              <Route path="/daily-coding-problem" component={Daily}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/resume" component={Resume}/>
            </div>
          </div>
          <Footer />
        </HashRouter>
      </div>
    )
  }
}

export default App;
