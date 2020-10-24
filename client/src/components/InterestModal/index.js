import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function InterestModal({
    show,
    closeInterestModal,
    username,
    editItemInfo
}) {
    console.log('itemId: ', editItemInfo.itemId)
    const [interestInfo, setInterestInfo] = useState({
        name: '',
        email: '',
        message: '',
        username: 'everett.diuguid@gmail.com',
        itemId: '',
        
    });
    // Handle submit newItemModal
    async function handleSubmit(e) {

        e.preventDefault();
        closeInterestModal();
        await axios
            .put('/api/users/addInterest', interestInfo)
            .then((response) => {
                console.log('response PUT interestModal: ', response)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInterestInfo({ ...interestInfo, [name]: value });
    };

    return (
        <Row>
            <Col>
                <Modal show={show}>
                    <Modal.Header>
                        <Row>
                            <Col>
                                Please provide your information below
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={closeInterestModal} variant="light">X</Button>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="p-2" id="intf">
                            <Form.Label className="pt-1">Your Name</Form.Label>
                            <Form.Control
                                type="input"
                                id="name"
                                className="form-control"
                                name="name"
                                placeholder="Your name"
                                value={interestInfo.name}
                                onChange={handleChange}
                            />
                            <Form.Label className="pt-1">Your Email</Form.Label>
                            <Form.Control
                                type="input"
                                id="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                                value={interestInfo.email}
                                onChange={handleChange}
                            />
                            <Form.Label className="pt-1">Item or item description</Form.Label>
                            <Form.Control
                                type="input"
                                id="message"
                                className="form-control"
                                name="message"
                                placeholder="Item"
                                value={interestInfo.message}
                                onChange={handleChange}
                            />
                            <Form.Label className="pt-1">{editItemInfo.itemId} Please copy and paste this id into the form</Form.Label>
                            <Form.Control
                                type="input"
                                id="itemId"
                                className="form-control"
                                name="itemId"
                                placeholder="Item"
                                value={interestInfo.itemId}
                                onChange={handleChange}
                            />
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                onClick={handleSubmit}
                            >Submit Form</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default InterestModal;