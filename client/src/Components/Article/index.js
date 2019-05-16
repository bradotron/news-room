import React, { Component } from 'react';
import './style.css';

class Article extends Component {
	constructor() {
		super();
		this.onSaveClick = this.onSaveClick.bind(this);
	}

	onSaveClick = function() {
		// console.log(this.props.article);
		this.props.saveArticle(this.props.article);
	};

	render() {
		return (
			<div className="row p-3 mb-2 bg-light rounded">
				<div className="col-sm-3">
					{this.props.article.image === '' ? (
						<p>No Image available</p>
					) : (
						<div className="img-wrapper">
							<img className="h-100" src={this.props.article.image} alt={this.props.title} />
						</div>
					)}
				</div>
				<div className="col-sm-9">
					<h4>{this.props.article.title}</h4>
					<p>{this.props.article.summary}</p>
					<div className="row">
						<a className="mr-auto" href={this.props.article.url} rel="noopener noreferrer" target="_blank">
							Full Article
						</a>
						<button className="btn btn-primary" onClick={this.onSaveClick}>
							Save
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Article;
