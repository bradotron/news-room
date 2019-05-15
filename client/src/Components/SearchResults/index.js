import React from 'react';
import Article from '../Article';

function SearchResults(props) {
	return (
		<div>
			{props.articles &&
				props.articles.map(article => {
					return <Article article={article} />;
				})}
		</div>
	);
}

export default SearchResults;
