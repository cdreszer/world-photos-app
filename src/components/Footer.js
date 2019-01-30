import React, { Component } from 'react';

import './../css/index.css';
import './../css/Footer.css';

/**
    Footer for the site. Should display contact info, address, 'testimonials'.
*/
class Footer extends Component {
  render() {
    return (
      <footer className="panel-footer">
        <div className="container">
          <div className="row">
            <section id="contact-info" className="col-md-4">
              <p>
                <span>Phone:</span><br/>
                858-395-6663<br/></p>
              <p>
                <span>Email:</span><br/>
                chasedreszer@gmail.com
              </p>
              <hr className="d-sm-block d-md-none"/>
            </section>
            <section id="address" className="col-md-4">
              <span>Address:</span><br/>
              1002 S Pacific St.<br/>
              Oceanside CA, 92054
              <p>* Special Note.</p>
              <hr className="d-sm-block d-md-none"/>
            </section>
            <section id="testimonials" className="col-md-4">
              <p>Pictures from x amount of countries that I have travelled to over the past two years.</p>
              <p>Site made to display skills in <span>HTML, CSS, Javascript, React</span></p>
            </section>
          </div>
          <div className="text-center">&copy; Copyright Chase Dreszer 2019</div>
        </div>
      </footer>
    );
  }
}

export default Footer;