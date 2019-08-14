import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';
import logo from './logo192.png';

export default class Header extends React.Component {
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12}>
        <nav className="Navbar">
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col xs={8} sm={8} md={8} lg={8}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </nav>
      </Col>
    );
  }
}
