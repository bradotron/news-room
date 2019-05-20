import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

function Profile(props) {
	return (
		<Container style={{ width: '100%' }}>
			<Row style={{ marginTop: '30px' }}>
				<Col xs={12} md={7}>
					<Link to="/" className="btn-flat waves-effect">
						<i className="material-icons left">arrow_back_ios</i> Back to home
					</Link>
					<h4 style={{ color: 'grey' }}>
						<b style={{ color: 'red', fontSize: '40px' }}>Search</b>
						<span style={{ fontSize: '35px' }}> the News</span>
					</h4>
				</Col>

				<Col xs={12} md={3} />
				<Col xs={12} md={2} style={{ justifyItems: 'right' }}>
					<img src="https://via.placeholder.com/100" alt="" style={{ borderRadius: '80px' }} />
					<hr />
					Username {props.user.email}
					<button
						onClick={props.onLogout}
						style={{
							width: '125px',
							borderRadius: '3px',
							letterSpacing: '1.5px',
							marginTop: '1rem',
						}}
						type="logout"
						className="btn btn-small waves-effect waves-light hoverable light accent-3"
					>
						Log out
					</button>
				</Col>
			</Row>
		</Container>
	);
}

export default Profile;
