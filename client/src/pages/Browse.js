import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ItemModal from '../components/ItemModal/index'
import BrowseContainer from '../components/BrowseContainer/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Browse() {
    // Declare itemArray as a setState variable, set to empty array
    const [itemArray, setItemArray] = useState([]);
    //useEffect loads once when page renders calling async fetchData
    const checkLoggedIn = (loggedIn) => {
        console.log('check log in function: ', loggedIn);
        switch(loggedIn) {
            case 'null':
                return false
                break
            default:
                return true
                break
        }

    }
    useEffect(() => {
        async function fetchData() {
            // Async get request from axios
            const request = await axios
                .get('/api/users/browseItems');
            // setItemArray pushes request to itemArray
            console.log('request browse.js ', request);
            console.log('index 0: ', request.data[0]);
            console.log('index 1: ', request.data[1]);
            // let sellerData = request.data[0];
            // let loggedIn = request.data[1];
            // checkLoggedIn(loggedIn);
            // console.log('sellerData: ', sellerData);
            // console.log('logged in: ', loggedIn);
            // let filteredSellerData = sellerData.filter((user, index) => sellerData.indexOf(user) === index);
            // console.log('filtered Seller Array: ', filteredSellerData);
            // setItemArray(filteredSellerData);
            return request;
        }
        fetchData();
        // Calls useEffect anytime itemArray is changed
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Row className="d-inline-flex">
                        <Col className="col" >
                            <ItemModal
                                setItemArray={setItemArray}
                                itemArray={itemArray}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Current Sellers</h3>
                            {/* {itemArray.map((username, index) => 
                            <p key={index}>{username}</p>
                            )} */}
                            {/* <BrowseContainer
                                itemArray={itemArray}
                                setItemArray={setItemArray}
                            /> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Browse;