import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NavLink from './components/NavLink';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Landing from './components/Landing';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInbox, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  render() {
    library.add(fab, faInbox, faMobileAlt)
    
    return (
      <div style={{display: 'flex', flexFlow: 'column', height: '100%'}}>
        <HashRouter>
          <Navbar variant="dark" bg="dark" expand="sm" sticky="top" style={{ "maxHeight": "50px" }}>
            <Navbar.Brand>
              <Link style={{'textDecoration': 'none', 'color': '#ddfcfe'}} to="/">Michael Boulos</Link>
            </Navbar.Brand>
            <Nav fill style={{width: '100%', marginLeft: 'auto'}} >
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/resume">Qualifications</NavLink>
              </NavItem>
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/projects">Projects</NavLink>
              </NavItem>
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <div style={{flexGrow: 1, marginBottom: '70px', backgroundColor: '#1a1a1a'}}>
            <div style={{margin: '30px'}}>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/" component={Landing}/>
              </Switch>
            </div>
          </div>
          <Footer />
        </HashRouter>
      </div>
    )
  }
}

export default App;
