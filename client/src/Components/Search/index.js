import React, { Component } from 'react';
import './style.css';

class Search extends Component {
	state = {
		search: '',
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
			this.props.sendSearchUp(this.state.search);
		} else {
			//console.log('bad form');
			alert('Please input some terms (authors, titles, subjects) to search for.');
		}
	};

	validateForm = () => {
		return this.state.search !== '';
	};

	render() {
		return (
			<div className="row justify-content-center align-items-center">
				<form>
					<label className="my-auto mx-1">
						Search:
						<input type="text" name="search" value={this.state.search} onChange={this.onInputChange} />
					</label>
					<label className="my-0">
						Source:
						<select className="form-control select-fix">
							<option>New York Times</option>
						</select>
					</label>
					<button className="btn btn-sm btn-primary" onClick={this.onFormSubmit} type="submit">
						Search
					</button>
				</form>
			</div>
		);
	}
}
export default Search;
