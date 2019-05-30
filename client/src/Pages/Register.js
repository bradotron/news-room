import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {},
		};
		this.registerCallback = this.registerCallback.bind(this);
	}
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};

		//console.log(newUser);
		this.props.onRegister(newUser, this.registerCallback);
	};

	registerCallback = function(res) {
		if(res.register) {
			alert(`Thank you for registering ${res.user.name}. Please login.`)
			this.props.history.push('/login');
		} else {
			alert(res.error);
		}
	}

	render() {
		const { errors } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col s8 offset-s2" style={{ border: 'solid 0.5px grey', borderRadius: '5px' }}>
						<Link to="/" className="btn-flat waves-effect">
							<i className="material-icons left">keyboard_backspace</i> Back to home
						</Link>
						<div className="col s12" style={{ paddingLeft: '11.250px' }}>
							<h4 style={{ color: 'grey' }}>
								<b style={{ color: 'red', fontSize: '40px' }}>Register</b>
								<span style={{ fontSize: '35px' }}> below</span>
							</h4>
						</div>
						<p className="grey-text text-darken-1">
							Already have an account?{' '}
							<Link to="/login" style={{ color: 'red' }}>
								Log in
							</Link>
						</p>
					</div>

					{/*.............Registration form and validation...............*/}
					{/*.............Registration form name input...................*/}
					<form noValidate onSubmit={this.onSubmit}>
						<div className="input-field col s12">
							<input
								onChange={this.onChange}
								value={this.state.name}
								error={errors.name}
								id="name"
								type="text"
							/>
							<label htmlFor="name">Name</label>
						</div>

						{/*.............Registration form email input...................*/}
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

						{/*.............Registration form Password input.................*/}
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

						{/*..........Registration form password validation input..........*/}
						<div className="input-field col s12">
							<input
								onChange={this.onChange}
								value={this.state.password2}
								error={errors.password2}
								id="password2"
								type="password"
							/>
							<label htmlFor="password2">Confirm Password</label>
						</div>

						{/*.............Registration form submit button...................*/}
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
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default Register;
