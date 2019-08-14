import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

export default class About extends React.Component {
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row center="lg" className="Content">
          <h1>About page</h1>
        </Row>
      </Col>
    );
  }
}
