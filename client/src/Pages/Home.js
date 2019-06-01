import React, { Component } from 'react';
import axios from 'axios';

// import the components
//import Logo from "../Components/Logo";
import Profile from "../Components/Profile";
import Search from "../Components/Search";
import SearchResults from "../Components/SearchResults";
import Category from "../Components/Category";
//import Comment from "../Components/Comment";
import Navbar from "../Components/Navbar";
//import NewsFeed from "../Components/Savednews";

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
			// console.log(res.data);
		this.setState({
				searchResults: res.data,
				searching: false,
		});
	})
	.catch(err => console.log(err));


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
		return (<div>
			<Navbar user={this.state.user} onLogout={this.props.onLogout}/>
			<div className="container-fluid">
			
				<Profile user={this.state.user} onLogout={this.props.onLogout} />

				<Search sendSearchUp={this.searchNews} />
				<SearchResults articles={this.state.searchResults} saveArticle={this.saveArticle} />
			</div></div>	
		);
	}
}

export default Home;
