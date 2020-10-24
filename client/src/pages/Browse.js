import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import ItemModal from '../components/ItemModal/index'
import BrowseContainer from '../components/BrowseContainer/index'
import ControlPanel from '../components/ControlPanel/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SHOW_ADD } from '../store/actions';

function Browse({ loggedInAs, state, dispatch }) {

    const history = useHistory();
    // Declare itemArray as a setState variable, set to empty array
    const [itemArray, setItemArray] = useState([]);
    //useEffect loads once when page renders calling async fetchData
    const { userId } = useParams()
  
    useEffect(() => {
        if (!loggedInAs.isLoggedOn) {
            history.push('/Search');
        } else {
            async function fetchData() {
                // Async get request from axios
                const request = await axios
                    .get('/api/users/browseItems');
                // setItemArray pushes request to itemArray
                setItemArray(request.data[0]); 
            }
            fetchData();
        }
    }, []);

    //Show or hide anything inside this component
    const handleShow = () => { dispatch({ type: SHOW_ADD, showAdd: true }) }  
    const closeModal = () => { dispatch({ type: SHOW_ADD, showAdd: false }) }

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
                    console.log()
                    setItemArray(request.data[0]);
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
                {(state.loggedInAs.isLoggedOn && 
                <ControlPanel 
                itemArray={itemArray}
                handleShow={handleShow}
                 />
                )}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className="d-inline-flex">
                        <Col className="col" >
                            <ItemModal 
                                handleShow={handleShow}
                                closeModal={closeModal}
                                show={state.showAdd}
                                setItemArray={setItemArray}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BrowseContainer
                                loggedInAs={loggedInAs}
                                handleDelete={handleDelete}
                                itemArray={itemArray}
                                setItemArray={setItemArray}
                                userId={userId}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Browse;