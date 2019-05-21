import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NoMatch from './Pages/NoMatch';
import auth from './Utils/authUtils';

class App extends Component {
	state = {
		user: {},
	};

	onLogin = (user, cb) => {
		auth.login(user)
			.then(res => {
				// successful api call
				if (res.data.success) {
					auth.setToken(res.data.token);
					this.setState({
						user: {
							name: res.data.user.name,
							email: res.data.user.email,
						},
					});
					cb({
						login: true,
					});
				} else {
					cb({
						login: false,
						error: res.data.error,
					});
				}
			})
			.catch(err => {
				// failed login, reason is in err.data
				console.log(err);
			});
	};

	onRegister = (register, cb) => {
		auth.register(register)
			.then(res => {
				if (res.data.register) {
					cb({
						register: true,
						user: res.data.user,
					});
				} else {
					cb({
						register: false,
						error: res.data.error,
					});
				}
			})
			.catch(err =>
				cb({
					register: false,
					error: err,
				})
			);
	};

	onLogout = () => {
		auth.logout();
		window.location.reload();
	};

	render() {
		return (
			<div className="container">
				<Router>
					<div>
						<div className="row">
							<Link to="/">Landing</Link>
							<Link to="/login">Login</Link>
							<Link to="/register">Register</Link>
						</div>

						<Switch>
							{auth.loggedIn() ? (
								<Route
									exact
									path="/"
									render={props => (
										<Home {...props} user={this.state.user} onLogout={this.onLogout} />
									)}
								/>
							) : (
								<Route exact path="/" component={Landing} />
							)}
							<Route exact path="/login" render={props => <Login {...props} onLogin={this.onLogin} />} />
							<Route
								exact
								path="/register"
								render={props => <Register {...props} onRegister={this.onRegister} />}
							/>
							<Route component={NoMatch} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
