import React, { Component } from 'react';
import axios from 'axios';

// import the components
//import Logo from "../Components/Logo";
import Profile from "../Components/Profile";
import Search from "../Components/Search";
import SearchResults from "../Components/SearchResults";
import Category from "../Components/Category";
import NewsFeed from "../Components/Savednews";

import articlesApi from '../Utils/articlesApi';

class Home extends Component {
	state = {
		user: {},
		articles: [],
		categorySelector: '',
		searching: false,
		searchResults: [],
	};

	componentDidMount() {
		this.setState({
			user: this.props.user,
		});
	}

	searchNews = (search, category) => {
		this.setState({
			searching: true,
		});

		axios
			.get(`/api/scrape/${category}/${search}`)
			.then(res => {
				console.log(res.status);
				console.log(res.data);
				this.setState({
					searchResults: res.data,
					searching: false,
				});
			})
			.catch(err => console.log(err));
	};

	saveArticle = article => {
		articlesApi
			.postArticle(article)
			.then(res => {
				alert('Article saved to the news feed.');
			})
			.catch(err => {
				alert('Error: Article is already in the news feed...NO REPOSTS');
			});
	};

	render() {
		return (
			<div className="container-fluid">
				{/* Logo  <Logo />*/}

				{/* Profile ***will need to pass the user as a prop */}
				<Profile user={this.props.user} onLogout={this.props.onLogout} />

				{/* Search Bar */}
				<Search sendSearchUp={this.searchNews} />
				<SearchResults articles={this.state.searchResults} saveArticle={this.saveArticle} />
				{/* Category Drop-Down */}
				<Category />

				{/* News Feed 
				<NewsFeed category={this.state.category} articles={this.state.articles} />*/}
			</div>
		);
	}
}

export default Home;
