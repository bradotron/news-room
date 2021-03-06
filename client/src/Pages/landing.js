import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";

class Landing extends Component {
	render() {
		return (<div>
			<div style={{ height: '50vh' }} className="container-fluid valign-wrapper">
				<div className="row">
					<div className="col s12 center-align">
						<h3>
							<b style={{ color: 'red', fontSize: '54px' }}>News Room {'  '}</b>
							
							<span style={{ fontFamily: 'monospace', fontSize: '48px' }}>  The Peoples Choice for News</span>
						</h3>
						<br />

						{/*..................Register Button..................*/}
						<Link to="/register">
							<button
								style={{
									width: '150px',
									borderRadius: '3px',
									letterSpacing: '1.5px',
								}}
								className="btn btn-small waves-effect waves-light hoverable red accent-3"
							>
								{' '}
								Register
							</button>
						</Link>

						{/*..................Log in Button..................*/}
						<Link to="/Login">
							<button
								style={{
									marginLeft: '2rem',
									width: '150px',
									borderRadius: '3px',
									letterSpacing: '1.5px',
								}}
								className="btn btn-small waves-effect white hoverable black-text"
							>
								{' '}
								Log In
							</button>
						</Link>
					</div>
				</div>
			</div></div>
		);
	}
}

export default Landing;
