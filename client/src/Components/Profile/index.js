import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import './style.css';

function Profile(props) {
	return (
		<Container className="profile" >
			<Row className="profile-row">
				<Col xs={12} md={7} className="back">
				<div className="back-button">
					<Link to="/" className="btn-flat waves-effect light-blue-text">
						<i className="material-icons left">arrow_back_ios</i> Back to home
					</Link>
				</div>
				<div className="headline">
					<h4>
						<b style={{ color: 'red', fontSize: '55px' }}>Search</b>
						<span style={{ fontSize: '50px' }}> the News</span>
					</h4>
				</div>
				</Col>

				<Col xs={12} md={3} className="user-info">
				<p className="user-name">{props.user.name}</p>
					<p className="user-email">{props.user.email}</p>
					<button id="logout-btn"
						onClick={props.onLogout}
						type="logout"
						className="btn btn-small waves-effect waves-light hoverable black-text blue lighten-4"
					>
						Log out
					</button>

				</Col>
				<Col xs={12} md={2} style={{ justifyItems: 'center' }}>
				<hr />
			
					<img src="https://via.placeholder.com/100" alt="" style={{ borderRadius: '80px' }} />
					

				</Col>
			</Row>
		</Container>
	);
}

export default Profile;
