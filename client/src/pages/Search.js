import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import SearchResults from '../components/SearchResults/index';
import SearchBar from '../components/SearchBar/index';

function Search() {

    // const getItemsById = (userId) => {
    //     console.log('userId getItemsbyId: ', userId);
    //     async function fetchData() {
    //         // Async get request from axios
    //         await axios
    //             .get(`/api/users/browse/${userId}`)
    //             .then(response => {
    //                 console.log('response.data: ', response.data);
    //                 items = response.data;
    //                 console.log('item array', items)
    //             })
    //             .catch(err => console.log('catch api/users/browse: ', err));
    //     }
    //     fetchData();
    // }
    return (
        <Container>
            <Row>
                <Col className="pt-2">
                    <h4>Search for a items by username</h4>
                </Col>
            </Row>
            <Row>
                <Col className="col-6 border rounded">
                    <SearchBar />
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <SearchResults items={items} /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Search;