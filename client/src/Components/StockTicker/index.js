import Stock from '../Stock';
import React, { Component } from 'react';
import './style.css';
//import { Link } from 'react-router-dom';
//import { Container, Row, Col } from 'react-grid-system';


class StockTicker extends Component {
constructor (){ 
	super ();
	this.state = {
		stocksList: [],
	}
	this.fetchData("hes");
	this.fetchData("amzn");
	this.fetchData("amd");
	this.fetchData("ge");
	this.fetchData("intc");
	this.fetchData("pfe");
	this.fetchData("amat");
	this.fetchData("aapl");
	this.fetchData("msft");
	this.fetchData("BA");
	this.fetchData("dow jones");
	this.fetchData("s&p 500");
	this.fetchData("brk-b");
	this.fetchData("dis");
	this.fetchData("ge");
	this.fetchData("nke");
	this.fetchData("t");
	this.fetchData("sbux");
	this.fetchData("hd");
	}


fetchData (symbol) {		
	var token = "pk_1ce387d26d9243fdb08169bf9d9469a5";
	var url = "https://cloud.iexapis.com/stable/stock/"+symbol+"/quote?token=";
	//var symbol = "aapl";
	fetch (url + token)
		.then(response => response.json())
		//.then(parseJson => console.log (parseJson.companyName))
		.then(parseJson => (
			{
			id:`${parseJson.companyName}`,
			name:`${parseJson.companyName}`,
			symbol:`${parseJson.symbol}`,
			change:`${parseJson.change}`
		}
	))
	.then(stock => {
		let stocksList = this.state.stocksList;
		stocksList.push(stock);
		this.setState({
			stocksList: stocksList
		});
	})
	.catch(error => console.log("error: ", error));
}
/*============taken from fetchdata()===============================	
.then(stock => this.stocksList.push(stock))
.then(stock1 => console.log(this.stocksList))
.then(parsejson => parsejson.map(stock => (
{
id:`${stock.nompanyName}`,
name:`${stock.companyName}`,
symbol:`${stock.symbol}`,
change:`${stock.change}`
}
)))
.then(stocksList => this.setState(stocksList))
===================taken from fetchdata()==========================*/
	
componentDidMount(){
	//this.fetchData();
	this.interval = setInterval(function () {
				
	var top = document.getElementById ('stock-ticker').scrollTop;
	var current = document.getElementById ('stock-ticker').scrollHeight -document.getElementById('stock-ticker').offsetHeight;
		if (top < current) {
			document.getElementById('stock-ticker').scrollTop = document.getElementById('stock-ticker').scrollTop +1;
		}
		else {
			document.getElementById('stock-ticker').scrollTop=0;
		}
	},50); 
}
	

componentWillUnmount() {	
	clearInterval(this.interval);
}


render () {
	//console.log(this.stocksList);
return (
	<div className = "stock-ticker" id = "stock-ticker" style={{margin:"12px 0 10px 0", backgroundColor:"#DDDDDD"}}> 
		{this.state.stocksList.map(
			(stock, i) => 
		<div className = "row" key = {i}> <Stock name = {stock.name} symbol = {stock.symbol} change = {stock.change} />
		</div>)}
	</div>
	);
};
};	
export default StockTicker;