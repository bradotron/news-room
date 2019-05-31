import React, { Component } from "react";
//import axios from 'axios';

import Profile from "../Components/Profile";
import Savednews from "../Components/Savednews";
import Comment from "../Components/Comment";

import articlesApi from '../Utils/articlesApi';



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
  });
  //articlesApi.getComment().then(comments => {
     // this.setState({comments: comments.data});
  //});
  //console.log(this.props.commentSaved);
  this.setState({
    user: this.props.user,
    
    //commentSaved: this.props.commentSaved,
  });
  //console.log(this.props.commentSaved)
}

deleteSavedArt = id => {
  articlesApi
    .deleteSavedArt(id)
    .then( res => {
      alert("deleted an article");
    
    articlesApi.getsavedArticle().then(articles => {
      this.setState({articles: articles.data});
  });
})
}

makeComment = (commentVal, articleId) => {
  articlesApi
    .postComment({
      comment: commentVal,
      articleId: articleId
    })
    .then(res => {
      console.log(commentVal);
      console.log("article ID: ", articleId);
   });
  }


  render() {
    return (
    <div className="container-fluid" >
        {/* Profile ***will need to pass the user as a prop */}
        <Profile user={this.state.user} onLogout={this.props.onLogout} />
        <Savednews 
        articles = {this.state.articles} 
        delete = {this.deleteSavedArt} 
        comment = {this.makeComment}
        commentSaved = {this.state.comments}
        />
      </div>
    );
  }
}

export default Archive;