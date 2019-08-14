import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

export default class Contact extends React.Component {
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row center="lg" className="Content">
          <h1>Contacts page</h1>
        </Row>
      </Col>
    );
  }
}
