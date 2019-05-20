import React, { Component } from 'react';
import Article from '../Article';
import { Container, Row, Col } from 'react-grid-system';

class Savednews extends Component {

	render() {
		return (
			<Container style={{ border: 'solid grey 1px', borderRadius: '0 0 10px 10px' }}>
			<Row>
			<div className="row p-3 m-2 bg-light rounded">
			<Col xs={12} md={3} style={{ border: 'solid grey 1px' }}>
				{this.props.articles.image === '' ? (
					<p>No Image available</p>
					) : (
						<div className="img-wrapper">
							<img className="h-100" src={this.props.articles.image} alt={this.props.title} />
						</div>
					)}
			</Col>
				<div className="col-sm-9">
					<h4>{this.props.articles.title}</h4>
					<p>{this.props.articles.summary}</p>
					<a className="mr-auto" href={this.props.articles.url} rel="noopener noreferrer" target="_blank">
							Full Article
						</a>
					
					<div class="row" style={{ border: 'solid grey 1px' }}>
					<form>
          			<div class="input-field col s12" style={{ border: 'solid grey 1px', }}>
            			<textarea id="textarea" class="materialize-textarea" data-length="500"></textarea>
            			<label for="textarea">Comment</label>
						</div>
						<button className="btn btn-primary" style={{ float: 'right'}}>
						comment
						</button>
					</form>
        		</div>
				</div>
				</div>
				</Row>
			
		
			</Container>
		);
	}
}
export default Savednews;

