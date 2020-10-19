import React from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

function BrowseContainer({ itemArray, setItemArray }) {
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
                    setItemArray(request.data.items);
                    return request;
                }
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <Row>
            <Col className="col bg-light p-3 border rounded itemTable">
                <Row className="m-2 ">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th><h4>Image</h4></th>
                                <th><h4>Item</h4></th>
                                <th><h4>Description</h4></th>
                                <th><h4>Price</h4></th>
                                <th><h4>Edit/Delete</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map through Item array into table */}
                            {itemArray.map((entry, index) =>
                                <tr key={index}>
                                    <td className="entry-img">
                                        <img
                                        className="shadow" 
                                        src={entry.imgUrl} alt={entry.name} width="100" height="100" /></td>
                                    <td className="entry-name">{entry.name}</td>
                                    <td className="entry-description">{entry.description}</td>
                                    <td className="entry-price"><h4>$ {entry.price}</h4></td>
                                    <td>
                                        <Button
                                            className="d-block mx-auto"
                                            id="delete-btn"
                                            onClick={() => handleDelete(entry._id)}
                                        >X</Button>
                                        <Button
                                            className="d-block mx-auto mt-2"
                                            id="edit-btn"
                                            onClick={() => handleDelete(entry._id)}
                                        >Edit</Button>
                                    </td>
                                </tr>

                            )}
                        </tbody>
                    </Table>
                </Row>
            </Col>
        </Row>
    )
}

export default BrowseContainer;