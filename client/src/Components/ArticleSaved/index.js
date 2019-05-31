import React, { Component } from 'react';
import './style.css';
import { Container, Row, Col } from 'react-grid-system';
import Comment from '../Comment';
//mport articlesApi from "../../Utils/articlesApi";


class ArticleSaved extends Component {
	constructor() {
		super();
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

onDeleteClick = function() {
		//console.log(this.props.article);
		this.props.delete(this.props.article._id);
	};

/*onCommentSubmit = function() {
	this.props.comment(this.comment);
}*/


render() {
	return (
<Container>
	<Row>
	<div className="row p-3 mb-2 bg-light rounded m-3" style={{position:'relative', width:'98%'}}>
		<div className="col-sm-3 col-xs-12 mt-3" >
		{this.props.article.image === '' ? (
			<div style={{backgroundColor: "grey"}}>
				<p>No Image available</p>
			</div>
		) : (
			<div className="img-wrapper" style = {{border:'solid #D3D3D3 1px', borderRadius:"4px"}}>
				<img className="h-120" src = {this.props.article.image} alt={this.props.title} />
			</div>
		)} 
		<p>good place for rating?</p>
		<hr />
				<button className="btn btn-small waves-effect waves-light hoverable black-text blue lighten-4" onClick={this.onDeleteClick}>
			Delete Article
				</button>
			</div>
		<div className="col-sm-9 col-xs-12" style={{border:'solid #D3D3D3 1px', borderRadius:"4px", backgroundColor:"white"}}>
			<h4>{this.props.article.title}</h4>
		<p>{this.props.article.summary}</p>
			<a className="mr-auto" href={this.props.article.url} rel="noopener noreferrer" target="_blank">
			Full Article
		</a>
	<hr />
		<Comment 
			comment = {this.props.comment} 
			article = {this.props.article} 
			commentSaved = {this.props.commentSaved} 
				/>
			</div>
		</div>
	</Row>
</Container>
		);
	}
}

export default ArticleSaved;
