import axios from 'axios';
import decode from 'jwt-decode';

export default {
	// user login
	login(loginInfo) {
		return axios.post('/api/users/login', loginInfo);
	},

	register(userInfo) {
		return axios.post('/api/users/register', userInfo);
	},

	loggedIn() {
		// check local storage for a token
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token);
	},

	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				return true;
			} else {
				return false;
			}
		} catch (err) {
			return false;
		}
  },
  
  setToken(token) {
    localStorage.setItem('id_token', token);
  },

  getToken() {
    return localStorage.getItem('id_token');
  },

  logout() {
		
    localStorage.removeItem('id_token');
  },

  getProfile() {
    return decode(this.getToken());
  }
};
