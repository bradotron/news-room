import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NoMatch from './Pages/NoMatch';

class App extends Component {
  state = {
    user: {
      isAuthenticated: true,
      authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
      },
      signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
      }
    }
  }

  onLogin = user => {
    this.setState({
      user: user,
    });
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <div className='row'>
              <Link to='/'>Landing</Link>
              <Link to='/home'>Home</Link>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
            <div className='row'>
              <Link to='/public'>Public</Link>
              <Link to='/protected'>Protected</Link>
            </div>

            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
