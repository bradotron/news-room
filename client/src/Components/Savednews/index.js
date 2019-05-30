import React, { Component } from 'react';
import ArticleSaved from '../ArticleSaved';
import { Container, Row, Col } from 'react-grid-system';
import StockTicker from "../StockTicker";

class Savednews extends Component {
	state = {
		expanded: true,
	};

onCollapseClick = () => {
	this.setState({
		expanded: !this.state.expanded,
	});
};

render() {
	return (
		<Container style={{ border: 'solid #DDDDDD 1px', borderRadius: '5px', margin:"20px 0 40px 0" }}>
			<StockTicker></StockTicker>
				<hr/>
			{this.props.articles.length > 0 && (
		<Row>
			<Col>
				<button
					className="btn btn-small waves-effect waves-light hoverable grey accent-3"
					name="collapse"
					onClick={this.onCollapseClick}
					>
						{this.state.expanded ? 'Hide Archive' : 'Show Archive'}
				</button>
			</Col>

				{this.state.expanded &&
				this.props.articles.map(article => {
					return <ArticleSaved article={article} delete={this.props.delete} comment = {this.props.comment}/>;
				})}

			<Col>
				{this.state.expanded && (
				<button
				className="btn btn-small waves-effect waves-light hoverable grey accent-3"
				id="hide-show"
				name="collapse"
				onClick={this.onCollapseClick}
					>
						{this.state.expanded ? 'Hide Archive' : 'Show Archive'}
				</button>
				)}
			</Col>
		</Row>
	)}
</Container>
		);
	}
}

export default Savednews;


