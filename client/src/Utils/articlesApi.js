import axios from 'axios';

export default {
  getsavedArticle: function() {
    return axios.get("/api/articles");
  },

  postArticle: function(article) {
    return axios.post('/api/articles', article);
  },

  // deleteBook: function(id) {
  //   return axios.delete(`/api/books/${id}`);
  // }
};
