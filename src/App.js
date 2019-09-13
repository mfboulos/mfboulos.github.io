import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NavLink from './components/NavLink';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Landing from './components/Landing';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInbox, faMobileAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {isNavBurgered: window.innerWidth < 576, isNavExpanded: false}
    this.toggleNavbarExpanded = this.toggleNavbarExpanded.bind(this)
    this.collapseNavbar = this.collapseNavbar.bind(this)
  }

  updateDimensions() {
    let isNavBurgered = window.innerWidth < 576
    this.setState({isNavBurgered: isNavBurgered, isNavExpanded: this.state.isNavExpanded && isNavBurgered})
  }

  toggleNavbarExpanded() {
    this.setState({isNavExpanded: !this.state.isNavExpanded})
  }

  collapseNavbar() {
    this.setState({isNavExpanded: false})
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    library.add(fab, faInbox, faMobileAlt, faBars)
    
    return (
      <div style={{display: 'flex', flexFlow: 'column', height: '100%'}}>
        <HashRouter>
          { this.state.isNavBurgered
          ? <Navbar tabIndex="0" onBlur={this.collapseNavbar} variant="dark" bg="dark" expand="sm" fixed="top" expanded={this.state.isNavExpanded}>
            <Navbar.Brand>
              <Link style={{'textDecoration': 'none', 'color': '#ddfcfe'}} to="/">Michael Boulos</Link>
            </Navbar.Brand>
            <FontAwesomeIcon id='burger' color='#ddfcfe' icon='bars' onClick={this.toggleNavbarExpanded} />
            <Navbar.Collapse>
              <NavItem style={{'margin': '10px'}}>
                <NavLink onClick={this.collapseNavbar} to="/about">About</NavLink>
              </NavItem>
              <NavItem style={{'margin': '10px'}}>
                <NavLink onClick={this.collapseNavbar} to="/experience">Experience</NavLink>
              </NavItem>
              <NavItem style={{'margin': '10px'}}>
                <NavLink onClick={this.collapseNavbar} to="/skills">Skills</NavLink>
              </NavItem>
              <NavItem style={{'margin': '10px'}}>
                <NavLink onClick={this.collapseNavbar} to="/projects">Projects</NavLink>
              </NavItem>
            </Navbar.Collapse>
          </Navbar>
          : <Navbar variant="dark" bg="dark" expand="sm" fixed="top">
            <Navbar.Brand>
              <Link style={{'textDecoration': 'none', 'color': '#ddfcfe'}} to="/">Michael Boulos</Link>
            </Navbar.Brand>
            <Nav fill style={{width: '100%', marginLeft: 'auto'}} >
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/experience">Experience</NavLink>
              </NavItem>
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/skills">Skills</NavLink>
              </NavItem>
              <NavItem style={{'margin': 'auto'}}>
                <NavLink to="/projects">Projects</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          }
          <div style={{flexGrow: 1, marginTop: '56px', marginBottom: '54px', backgroundColor: '#1a1a1a'}}>
            <div style={{padding: Math.min(window.innerWidth / 20, 30) + 'px'}}>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/experience" component={Resume}/>
                <Route path="/skills" component={Skills}/>
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
