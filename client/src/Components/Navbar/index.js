import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo/img/Newsroom-logo.png';


class Navbar extends Component {
  
  render() {    
    const authLinks = (
      <ul className="navbar-nav ml-auto">
      <li >  
    

      </li>
      {(this.props.onLogout==='')?'': <Link  className="nav-link" onClick={this.props.onLogout} className="nav-item">Logout</Link>}
       
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
          <Link className="nav-link" to="/login">
            {this.props.user.name?'Logged in as ' + this.props.user.name:''}
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              style={{ width: '150px', margin: 'auto', display: 'block' }}
              alt="Loading..."
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                   Landing
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link"to="/archive">Archive</Link>

              </li>
            </ul>
            {authLinks}
            {guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}



export default Navbar;
