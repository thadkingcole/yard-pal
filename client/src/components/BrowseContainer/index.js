import React from 'react';
import axios from 'axios'
import { Col, Row, Button } from 'react-bootstrap';

function BrowseContainer() {
const handleClick = () => {

    axios
    .get('/api/users/browseItems')
    .then(items => {
        console.log('browse items', items);
    })
    .catch(err => console.log('get error', err));
}

    
    
    return(
        <Row>
            <Col className="col bg-light p-3 border rounded itemTable">
            <Row className="m-2 ">
                <Col className="col bg-white m-1 pt-1 border rounded">
                    <h4>Image</h4>
                </Col>
                <Col className="col bg-white m-1 pt-1 border rounded">
                    <h4>Item</h4>
                </Col>
                <Col className="col bg-white m-1 pt-1 border rounded">
                    <h4>Description</h4>
                </Col>
                <Col className="col bg-white m-1 pt-1 border rounded">
                    <h4>Price</h4>
                </Col>
            </Row>
            <Row>
                <Button onClick={handleClick} >Browse Items</Button>
                
            </Row>
            </Col>
        </Row>
    )
}

export default BrowseContainer;