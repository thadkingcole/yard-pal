import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

function ItemModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
            <Row>
                <Col>
                    <Button variant="primary" onClick={handleShow}>
                        Add Item
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            Add item for Sale
                    </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label for="item">Item</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="newItem-name"
                                        id="newItem-name"
                                        placeholder="Add Item"
                                    />
                                    <Form.Label for="item">Item Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="newItem-description"
                                        id="newItem-description"
                                        placeholder="Add Description"
                                    />
                                    <Form.Label for="item">Item Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="newItem-price"
                                        id="newItem-price"
                                        placeholder="Add Price"
                                    />
                                    <Button
                                        color="dark"
                                        style={{ marginTop: '2rem' }}
                                        onClick={handleClose}
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