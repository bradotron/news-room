import React, { Component } from 'react';
import './style.css';
//import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import articlesApi from '../../Utils/articlesApi';



class Comment extends Component {
	state = {
    //author: '',
    comment: '',
		testComment: [],
  };
  
	onInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onFormSubmit = e => {
		e.preventDefault();
    //console.log(this.state.comment);
	if (this.validateForm()) {
			//console.log(this.state.comment);
      this.props.comment(this.state.comment, this.props.article._id);
		} else {
			//console.log('bad form');
			alert('A comment requires text.');
		}
	};

	validateForm = () => {
		return this.state.comment !== '' ;
  };

  componentDidMount () {
    articlesApi.getComment(this.props.article._id).then(comments => {
      this.setState({commentSaved: comments.data});
      console.log(this.state.commentSaved);
    });
  }


  
  render() {
		return (

      <Container>
      <form>
      <Row className="container-fluid"><Col><p>{this.props.commentSaved}</p></Col></Row>
        <Row className="container-fluid">
          <Col xs={12} md={10}>
              <textarea className="form-control"
                type="text"
                name="comment"
                placeholder="Make a Comment"
                rows="1"
                value={this.state.comment}
                onChange={this.onInputChange}
              />
          </Col>
          <Col xs={12} md={2}>
            <button
              className="btn btn-small waves-effect waves-light hoverable red accent-3"
              onClick={this.onFormSubmit}
              type="submit"
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }}
            >
              Comment
            </button>
          </Col>
        </Row>
      </form>
    </Container>
    );
}
}
export default Comment;