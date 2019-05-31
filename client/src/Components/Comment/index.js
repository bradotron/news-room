import React, { Component } from 'react';
import './style.css';
//import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import articlesApi from '../../Utils/articlesApi';



class Comment extends Component {
	state = {
    //author: '',
    comment: '',
    commentSaved: [],
    commentList: [],
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
    window.location.reload();
  };


	validateForm = () => {
		return this.state.comment !== '' ;
  };

  componentDidMount () {
    articlesApi.getComment(this.props.article._id).then(comments => {
      this.setState({commentSaved: comments.data});
      //this.state.commentSaved.map(data => data.comments)
      //console.log("test" ,this.state.commentSaved);
      console.log("test",this.state.commentSaved);
      console.log(this.state.commentList);
      
    });
  }

  render() {


		return (

      <Container>
      <form>
      <Row className = "container-fluid"><Col>
      <div style={{border:"solid grey 1px", minHeight:"35px", padding:"3px", width:"100%", backgroundColor:"#DDDDDD", borderRadius:"4px"}}>
      {this.state.commentSaved.map((data, index) => (
          <p style={{margin:"0 10px 0 10px"}} key={index}>{data.comment}</p>
      ))}
      </div>
      </Col></Row>
        <Row className="container-fluid" style={{display:"flex"}}>
          <Col xs={12} md={9} style={{margin:"8px 0 8px 0"}}>
              <textarea className="form-control"
                type="text"
                name="comment"
                placeholder="Make a Comment"
                rows="1"
                value={this.state.comment}
                onChange={this.onInputChange}
              />
          </Col>
          <Col xs={12} md={3} style={{margin:"8px 0 8px 0", justifySelf:"left"}}>
            <button
              className="btn btn-small waves-effect waves-light hoverable red accent-3"
              onClick={this.onFormSubmit}
              type="submit"
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
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