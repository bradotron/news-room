import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import './style.css';

function Profile(props) {
	return (
		<Container className="profile" style={{ width: '100%' }}>
			<Row style={{ marginTop: '30px' }}>
				<Col xs={12} md={7} className="back-button" style={{border:"solid black"}}>
					<Link to="/" className="btn-flat waves-effect light-blue-text">
						<i className="material-icons left">arrow_back_ios</i> Back to home
					</Link>
					<h4 style={{ color: "grey", textAlign:"center", border:"solid black" }}>
						<b style={{ color: 'red', fontSize: '40px' }}>Search</b>
						<span style={{ fontSize: '35px' }}> the News</span>
					</h4>
				</Col>

				<Col xs={12} md={3} />
				<Col xs={12} md={2} style={{textAlign:"center"}}>
					<img src="https://via.placeholder.com/100" alt="" style={{ borderRadius: '80px', marginBottom:"4px", display:"inline-block" }} />
					
					<p className="username" style={{marginBottom:"0px"}}>Username {props.user.username}</p>
					
					<button
						style={{
							width: '125px',
							float:"center",
							borderRadius: '3px',
							letterSpacing: '1.5px',
							marginTop: '3px',
						}}
						type="logout"
						className="btn btn-small waves-effect waves-light hoverable black-text blue lighten-4"
					>
						Log out
					</button>
				</Col>
			</Row>
		</Container>
	);
}

export default Profile;
