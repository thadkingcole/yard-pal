import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function ItemModal({ itemArray, setItemArray }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const [newItemInfo, setNewItemInfo] = useState({
        name: '',
        description: '',
        price: 0,
        imgUrl: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewItemInfo({ ...newItemInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(false);
        axios
            .put('/api/users/addItem', { 
                item: {
                    name: newItemInfo.name,
                    description: newItemInfo.description,
                    price: newItemInfo.price,
                    imgUrl: newItemInfo.imgUrl,
                }
            })
            .then((response) => {
                setItemArray(response.data.items)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Row>
            <Col>
                <Button className="mt-1" variant="primary" onClick={handleShow}>
                    Add
                    </Button>
                <Modal show={show}>
                    <Modal.Header>
                        Add item for Sale
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>

                                <Form.Label>Item</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="item"
                                    className="form-control"
                                    name="name"
                                    placeholder="Item Name"
                                    value={newItemInfo.name}
                                    onChange={handleChange} />

                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="description"
                                    className="form-control"
                                    name="description"
                                    placeholder="Item Description"
                                    value={newItemInfo.description}
                                    onChange={handleChange} />



                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="price"
                                    className="form-control"
                                    name="price"
                                    placeholder="Item Price"
                                    value={newItemInfo.price}
                                    onChange={handleChange} />
                                
                                <Form.Label>Image (URL)</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="imgUrl"
                                    className="form-control"
                                    name="imgUrl"
                                    placeholder="https://placekitten.com/200/200"
                                    value={newItemInfo.imgUrl}
                                    onChange={handleChange} />

                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    onClick={handleSubmit}
                                >Add Item</Button>
                            </Form.Group>
                        </Form>

                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default ItemModal;