import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, NavLink} from 'react-router-dom';
//Pages
import Home from './components/Home';
import About from './components/About';
import Testimonials from './components/Testimonials';
// 3rd party bootstrap components
import { Navbar,
            Nav,
        NavItem,
    NavDropdown,
       MenuItem,
         Images,
          Image,
           Grid,
            Row,
            Col,
          Table,
          Button,
     Jumbotron} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faIgloo)
// library.add(faTwitter)

class App extends Component {
  // handleSelect() {
  //   console.log('test');
  // }
  render() {
    return (
      <div>
        <Jumbotron>
          <div className="socialMedia">
            <i className="fab fa-twitter"></i>
          </div>
          <h1 className="centerText"> Martin Garthwaite</h1>
        </Jumbotron>
        <div className="container">
        <Nav className="Nav" bsStyle="tabs" activeKey="1">
          <NavItem  eventKey="1" href="/" className="home-nav-item">
            Home
          </NavItem>
          <NavItem  eventKey="2" href="/About">
            About
          </NavItem>
          <NavItem eventKey="3" href="/Testimonials">
            Testimonials
          </NavItem>
          <NavItem eventKey="4">
            Science / Philosophy
          </NavItem>
          <NavItem eventKey="5">
              Store
          </NavItem>
          <NavItem eventKey="6" >
              Blog
          </NavItem>
          <NavItem eventKey="7" >
              Take Action
          </NavItem>
          <NavItem eventKey="8" >
              Contact
          </NavItem>

        <NavDropdown eventKey="4" title="Learn More" id="nav-dropdown">
          <MenuItem eventKey="4.1">Facebook</MenuItem>
          <MenuItem eventKey="4.2">Twitter</MenuItem>
          <MenuItem eventKey="4.3">LinkedIn</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
        </Nav>
        </div>
        <div className="image-style">
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Testimonials" component={Testimonials} />
        </div>
        <div>
          <p className ="footer-style">
            Copyright © 2019 Martin Garthwaite. Site by Brian Steyer
          </p>
        </div>
      </div>
    );
  }
}




export default App;
