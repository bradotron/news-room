import React, { Component } from 'react';
import Article from '../Article';
import { Container, Row, Col } from 'react-grid-system';

class SearchResults extends Component {
	state = {
		expanded: true,
	};

	onCollapseClick = () => {
		this.setState({
			expanded: !this.state.expanded,
		});
	};

	render() {
		return (
			<Container style={{ border: 'solid grey 1px', borderRadius: '0 0 10px 10px' }}>
				{this.props.articles.length > 0 && (
					<Row>
						<Col>
							<button
								className="btn btn-primary btn-sm ml-auto"
								name="collapse"
								onClick={this.onCollapseClick}
							>
								{this.state.expanded ? 'Hide Search Results' : 'Show Search Results'}
							</button>
						</Col>

						{this.state.expanded &&
							this.props.articles.map(article => {
								return <Article article={article} saveArticle={this.props.saveArticle} />;
							})}

						<Col>
							{this.state.expanded && (
								<button
									className="btn btn-small waves-effect waves-light hoverable light accent-3"
									name="collapse"
									onClick={this.onCollapseClick}
								>
									{this.state.expanded ? 'Hide Search Results' : 'Show Search Results'}
									<i className="format_list_bulleted">arrow_forward_ios</i>
								</button>
							)}
						</Col>
					</Row>
				)}
			</Container>
		);
	}
}

export default SearchResults;
