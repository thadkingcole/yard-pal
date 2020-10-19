import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
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
    const { userId } = useParams()
    // declare setState variables to show or hide itemModal
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        if (userId) {
            async function fetchData() {
                // Async get request from axios
                const request = await axios
                    .get(`/api/users/browse/${userId}`);
                // setItemArray pushes request to itemArray
                console.log('request (if userId) browse.js ', request);
                setItemArray(request.data[0]);
                return request;
            }
            fetchData();
        } else {
            async function fetchData() {
                // Async get request from axios
                const request = await axios
                    .get('/api/users/browseItems');
                // setItemArray pushes request to itemArray
                console.log('request api/browseItems: ', request);
                setItemArray(request.data[0]);
                return request;
            }
            fetchData();
        }
    }, []);

    //Show or hide anything inside this component
    const handleShow = () => setShow(true);
    const closeModal = () => setShow(false);

    const handleDelete = (_id) => {
        axios
            .put('/api/users/delItem', {
                itemId: _id
            })
            .then(() => {
                async function fetchData() {
                    // Async get request from axios
                    const request = await axios
                        .get('/api/users/browseItems');
                    // setItemArray pushes request to itemArray
                    console.log('resuest handleDelete BROWSE: ', request.data[0])
                    setItemArray(request.data[0]);
                    return request;
                }
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Row className="d-inline-flex">
                        <Col className="col" >
                            <ItemModal
                                handleShow={handleShow}
                                closeModal={closeModal}
                                show={show}
                                setShow={setShow}
                                setItemArray={setItemArray}
                                itemArray={itemArray}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* ternary operator switching between either search query for username or map item array, if search for username, 
                            onClick will pass username into route and return the username which will redirect to browse/:userId), or send please log in*/}
                            {/* {itemArray.map((username, index) => 
                            <p key={index}>{username}</p>
                            )} */}
                            <BrowseContainer
                                handleDelete={handleDelete}
                                itemArray={itemArray}
                                setItemArray={setItemArray}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Browse;