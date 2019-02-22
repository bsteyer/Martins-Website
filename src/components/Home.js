import React, { Component } from 'react';
import {Image, Jumbotron} from 'react-bootstrap';
  class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Jumbotron>
              <h3 className="PageTitle"> "I found the story compelling and brilliantly told, with the rich texture of the world and its technologies adding entertaining mind-candy" </h3>
            </Jumbotron>
          </div>
          <div className="col-md-6">
            <p>
              <Image className="nav-style" src="../images/cover.jpg" responsive />
            </p>
          </div>
        </div>
      </div>
      );
    }
}
export default Home;
