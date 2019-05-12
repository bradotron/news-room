import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import NoMatch from './Pages/NoMatch';

function App() {
	return (
		<div className="container">
			<Router>
				<div>
					<hr />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
