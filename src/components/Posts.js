import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import { fetchPage1 } from '../action/Page1';

class ListPost extends Component {
  componentDidMount() {
    this.props.fetchPage1();
  }

  render() {
    const list = this.props.posts.page1.map(item => {
      return (
        <h3 key={item.id} className="Text-left List">
          <span>{item.id}. </span>
          <Link to={`/posts/${item.id}`}>{item.title}</Link>
        </h3>
      );
    });
    return (
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row center="lg" className="Content">
          <Col lg={6}>
            <h2>Posts</h2>
            {list}
          </Col>
        </Row>
      </Col>
    );
  }
}

export default connect(
  state => ({
    posts: state.page1
  }),
  {
    fetchPage1
  }
)(ListPost);
