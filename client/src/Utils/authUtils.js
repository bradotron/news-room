import axios from 'axios';

export default {
  // user login
  login: function(loginInfo) {
    return axios.post('/api/users/login', loginInfo);
  },

  register: function(userInfo) {
    return axios.post('/api/users/register', userInfo);
  }

};
