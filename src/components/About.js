import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import './About.css';



class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="PageTitle"> About Martin Garthwaite </h1>

            <p>Martin Garthwaite lives and works in the Pacific Northwest. The ideas expressed in this book are the distillation of many decades of thought and work. </p>
          </div>
          <div className="col-md-6">
            <Image src="../images/martin.jpg" responsive />
          </div>
        </div>
      </div>
      );
    }
}
export default About;
