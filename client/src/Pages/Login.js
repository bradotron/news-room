import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";
class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {},
		};
		this.loginCallback = this.loginCallback.bind(this);
	}
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onSubmit = e => {
    e.preventDefault();
    this.props.onLogin({
      email: this.state.email,
			password: this.state.password,
    }, this.loginCallback);
	};

	loginCallback = function(res) {
		if(res.login) {
			// redirect to home page
			this.props.history.push('/');
		} else {
			alert(res.error);
		}
	}

	render() {
		const { errors } = this.state;
		return (<div>
			<div className="container">
				<div style={{ marginTop: '4rem' }} className="row">
					<div className="col s8 offset-s2" style={{ border: 'solid 0.5px grey', borderRadius: '5px' }}>
						<Link to="/" className="btn-flat waves-effect">
							<i className="material-icons left">keyboard_backspace</i> Back to home
						</Link>
						<br />
						<div className="col s12" style={{ paddingLeft: '11.250px' }}>
							<h4 style={{ color: 'grey' }}>
								<b style={{ color: 'red', fontSize: '40px' }}>Login</b>
								<span style={{ fontSize: '35px' }}> below</span>
							</h4>
							<p className="grey-text text-darken-1">
								Don't have an account?{' '}
								<Link to="/register" style={{ color: 'red' }}>
									Register
								</Link>
							</p>
						</div>
						{/*.............Login form and validation...............*/}
						{/*.............Login form email input..................*/}
						<form noValidate onSubmit={this.onSubmit}>
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id="email"
									type="email"
								/>
								<label htmlFor="email">Email</label>
							</div>
							{/*.............Login form password input...............*/}
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									type="password"
								/>
								<label htmlFor="password">Password</label>
							</div>
							{/*.............login form form submit button...............*/}
							<div className="col s12" style={{ paddingLeft: '11.250px' }}>
								<button
									style={{
										width: '150px',
										borderRadius: '3px',
										letterSpacing: '1.5px',
										marginTop: '1rem',
									}}
									type="submit"
									className="btn btn-large waves-effect waves-light hoverable red accent-3"
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div></div>
		);
	}
}
export default Login;
