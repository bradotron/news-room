import React from 'react';
import './style.css';

function Article(props) {
	return (
		<div className="row p-3 mb-2 bg-light rounded">
			<div className="col-sm-3">
				{props.article.image === '' ? (
					<p>No Image available</p>
				) : (
					<div className="img-wrapper">
						<img className="h-100" src={props.article.image} alt={props.title} />
					</div>
				)}
			</div>
			<div className="col-sm-9">
				<h4>{props.article.title}</h4>
				<p>{props.article.summary}</p>
				<div className="row">
					<a className="mr-auto" href={props.article.url} rel="noopener noreferrer" target="_blank">
						Full Article
					</a>
					<button className="btn btn-primary" id={props.article.id} onClick={props.handleSaveBook}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}

export default Article;
