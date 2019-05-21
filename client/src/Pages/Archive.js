import React, { Component } from "react";
import axios from 'axios';

import Profile from "../Components/Profile";
import Search from "../Components/Search";
import Savednews from "../Components/Savednews";
//import SearchResults from "../Components/SearchResults";
import Category from "../Components/Category";
import NewsFeed from "../Components/Savednews";

import articlesApi from '../Utils/articlesApi';

//import archiveApi from "../Utils/archiveApi";

const testUser = {
  username: "bob"
};
const testArticle = {
  image: 'https://via.placeholder.com/250',
  title: 'This is a placeholder Article Title',
  summary: 'This is an even longer placeholder text string to represent an article summary. I have to make it longer than the title so the box doesnt shrink.',
  url: "https://www.apple.com"
  };

class Archive extends Component {
  state = {
    user: {},
    articles: [],
    categorySelector: "",
    searching: false,
    searchResults: []
  };

componentDidMount() {
  articlesApi.getsavedArticle().then(articles => {
      this.setState({articles: articles.data});

  })
  console.log('testing');
}


  render() {
    return (
    <div className="container-fluid" >
 
        {/* Profile ***will need to pass the user as a prop */}
        <Profile user={testUser} onLogout={this.props.onLogout} />
 
        {/* Search Bar 
        <Search sendSearchUp={this.searchNews} />*/}
        <Savednews
          articles={this.state.articles}
        />
      
      </div>
    );
  }
}

export default Archive;