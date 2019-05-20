import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NoMatch from './Pages/NoMatch';
import auth from './Utils/authUtils';

<<<<<<< HEAD
function App() {
	return (
		<div className="container">
			<Router>
				<div>
					<Link to="/">Landing</Link>
					<Link to="/home">Home</Link>
					<Link to="/archive">Archive</Link>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/archive" component={Archive} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</div>
	);
=======
class App extends Component {
	state = {
		user: {
			email: "",
		},
		
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
								<Route exact path="/" render={props => <Home {...props} user={this.state.user} onLogout={this.onLogout} />} />
							) : (
								<Route exact path="/" component={Landing} />
							)}
							<Route exact path="/login" render={props => <Login {...props} onLogin={this.onLogin} />} />
							<Route exact path="/register" component={Register} />
							<Route component={NoMatch} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
>>>>>>> origin
}

export default App;
