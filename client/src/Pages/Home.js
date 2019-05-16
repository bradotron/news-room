import React, { Component } from 'react';

// import the components
import Logo from '../Components/Logo';
import Profile from '../Components/Profile';
import Search from '../Components/Search';
import SearchResults from '../Components/SearchResults';
import Category from '../Components/Category';
import NewsFeed from '../Components/NewsFeed';

import searchApi from '../Utils/searchApi';
import articlesApi from '../Utils/articlesApi';

const testUser = {
	username: 'bob',
};

class Home extends Component {
	state = {
		user: {},
		articles: [],
		categorySelector: '',
		searching: false,
		searchResults: [],
	};

	searchNews = (search, category) => {
		this.setState({
			searching: true,
		});
		switch (category) {
			default:
				alert('Error: Unknown category.');
				break;

			case 'New York Times':
				searchApi.searchNYT(search).then(res => {
					this.setState({
						searchResults: res,
						searching: false,
					});
				});
				break;
			
			case 'NPR':
			alert('NPR search is under construction');
			break;
		}
	};

	saveArticle = article => {
		articlesApi.postArticle(article).then(res => {
			console.log(res.status);
		});
	}

	render() {
		return (
			<div>
				{/* Logo */}
				<Logo />

				{/* Profile ***will need to pass the user as a prop */}
				<Profile user={testUser} />

				{/* Search Bar */}
				<Search sendSearchUp={this.searchNews} />
				<SearchResults articles={this.state.searchResults} saveArticle={this.saveArticle} />
				{/* Category Drop-Down */}
				<Category />

				{/* News Feed */}
				<NewsFeed category={this.state.category} articles={this.state.articles} />
			</div>
		);
	}
}

export default Home;
