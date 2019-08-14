import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import Header from './Header';
import './styles.css';

class Layout extends Component {
  render() {
    return (
      <Row>
        <Header />
        {this.props.children}
      </Row>
    );
  }
}

export default Layout;
