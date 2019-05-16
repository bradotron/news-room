import React, { Component } from 'react';
import Article from '../Article';

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
			<div>
				{this.props.articles.length > 0 && (
					<div>
						<div className="row">
							<button
								className="btn btn-primary btn-sm ml-auto"
								name="collapse"
								onClick={this.onCollapseClick}
							>
								{this.state.expanded ? 'Hide Search Results' : 'Show Search Results'}
							</button>
						</div>
						{this.state.expanded &&
							this.props.articles.map(article => {
								return <Article article={article} saveArticle={this.props.saveArticle}/>;
							})}
						<div className="row">
							{this.state.expanded && (
								<button
									className="btn btn-primary btn-sm"
									name="collapse"
									onClick={this.onCollapseClick}
								>
									{this.state.expanded ? 'Hide Search Results' : 'Show Search Results'}
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default SearchResults;
