import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Col, Row, Button } from 'react-bootstrap';

function BrowseContainer() {
    const [itemArray, setItemArray] = useState([]);
    let response;
    async function handleClick(e) {
        e.preventDefault();
        await axios
        .get('/api/users/browseItems')
        .then(items => {
            response = items.data.items;
            console.log('INSIDE AXIOS', items.data.items);
            
        }).then(() => {
            setItemArray(itemArray => [...itemArray, response])
        })
        .catch(err => console.log('get error', err));
        
        console.log('AFTER setItemArray: ', itemArray);    

    }
    
    return (
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