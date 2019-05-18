import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NoMatch from './Pages/NoMatch';

function App() {
	return (
		<div className="container">
				<Router>
					<div>
						<Link to="/">Landing</Link>
						<Link to="/home">HOme</Link>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Route component={NoMatch} />
						</Switch>
					</div>
				</Router>
		</div>
	);
}

export default App;
