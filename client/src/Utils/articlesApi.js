import axios from 'axios';

export default {
  getsavedArticle: function() {
    return axios.get("/api/articles");
  },

  postArticle: function(article) {
    return axios.post('/api/articles', article);
  },

  deleteSavedArt: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },

  postComment: function(comment) {
    console.log("postComment: ", comment);
    return axios.post('/api/comments', comment);
  },

  getComment: function(id) {
    //console.log("get comments for : ", id);
    return axios.get("/api/comments/byArticleId/"+id);
  }

};
