import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Landing from './Pages/landing';
import Home from './Pages/Home';
import NoMatch from './Pages/NoMatch';

function App() {
	return (
		<div className="container">
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/home" component={Home} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
