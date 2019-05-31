import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

class Search extends Component {
	state = {
		search: '',
		category: 'New York Times',
	};

	onInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onFormSubmit = e => {
		e.preventDefault();

		if (this.validateForm()) {
			//console.log('good form');
			this.props.sendSearchUp(this.state.search, this.state.category);
		} else {
			//console.log('bad form');
			alert('Please input some terms to search for.');
		}
	};

	validateForm = () => {
		return this.state.search !== '';
	};

	render() {
		return (
			<Container>
				<form>
					<Row className="search-bar" style={{marginTop: '5px', borderRadius: '10px 10px 0 0', display:"flex"}}>
						<Col xs={12} md={5} className="search-input">
							<div className="input-text">
							<label className="my-auto mx-1">
								Search:
								<input
									type="text"
									name="search"
									value={this.state.search}
									onChange={this.onInputChange}
								/>
							</label>
							</div>
						</Col>
						<Col xs={12} md={3} className="category">
							<div className="input-catergory">
							<label id="source" className="category-title">
								Source:
								<select 
									name="category"
									onChange={this.onInputChange}
									value={this.state.category}
									className="form-control select-fix"
								>
									<option value="New York Times">New York Times</option>
									<option value="Yahoo">Yahoo</option>
									{/* <option value="Test">Test</option> */}
								</select>
							</label>
						</div>
						</Col>
						<Col xs={12} md={2} className="search-button">
							<button
								className="btn btn-small waves-effect waves-light hoverable red accent-3"
								id="search"
								onClick={this.onFormSubmit}
								type="submit"
								style={{
									width: '150px',
									borderRadius: '3px',
									letterSpacing: '1.5px',
									marginTop: '1rem',
								}}
							>
								Search
							</button>
						</Col>
						<Col xs={12} md={2} className="archive-button">
							<Link to="/archive" id="archive-btn" className="btn-flat waves-effect light-blue-text">
								<i className="material-icons right">arrow_forward_ios</i>Archive
							</Link>
						</Col>
					</Row>
				</form>
			</Container>
		);
	}
}
export default Search;
