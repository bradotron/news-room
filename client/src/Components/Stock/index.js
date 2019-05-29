import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './style.css';

class Stock extends Component {
    render () {  
        return (
        <div className="container-fluid">
            <Container>
                <Row> 
                <Col className="indy-stock" xs={12} sm={5}> 
                <Col sm={{ size: 4, offset: 1 }}>
                    {this.props.name} 
                </Col>
                <Col sm={{ size:6, offset: 1 }}>
                        <div className = {this.props.change > 0 ? "gains" : "losses"}>
                        {this.props.change}({this.props.symbol}) 
                    </div>
                </Col>
                </Col>
                    <Col xs={12} sm={7} ></Col>
                </Row>
            </Container>
        </div>
        );
    };
};

export default Stock;
