import axios from 'axios';

export default {
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },

  postArticle: function(article) {
    return axios.post('/api/articles', article);
  },

  // deleteBook: function(id) {
  //   return axios.delete(`/api/books/${id}`);
  // }
};
