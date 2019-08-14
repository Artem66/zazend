import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import { fetchPagePostDetailComment } from '../action/Page1';

class DetailPost extends Component {
  componentDidMount() {
    this.props.fetchPagePostDetailComment(this.props.match.params.postId);
  }

  render() {
    const { dataPost, dataComments } = this.props.posts;

    const listComments = dataComments.map(item => {
      return (
        <Col xs={12} sm={12} md={12} lg={12} key={item.id}>
          <h4>Email: {item.email}</h4>
          <em>
            <b>Name: </b>
            {item.name}.
          </em>
          <p>Comment: {item.body}.</p>
        </Col>
      );
    });

    return (
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row className="Content">
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2 className="Post-title">{dataPost.title} </h2>
            <div>
              <p className="Text-center">{dataPost.body}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <hr />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h3>Comments</h3>
            {listComments}
          </Col>
        </Row>
      </Col>
    );
  }
}
export default connect(
  state => ({ posts: state.postDetail }),
  { fetchPagePostDetailComment }
)(DetailPost);
