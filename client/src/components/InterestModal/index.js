import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

function InterestModal({
    show,
    handleShowInterest,
    closeInterestModal
}) {
    // Handle submit InterestModal
    async function handleSubmit(f) {
        f.preventDefault();
    };

    return (
        <Row>
            <Col>
                <Button className="m-2" variant="primary" onClick={handleShowInterest}>
                    Interested?
                </Button>
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
                            <Form.Label className="pt-2">Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="customer"
                                className="form-control pt-2"
                                name="customer"
                                placeholder="Your Name"
                            />
                            <Form.Label className="pt-1">Email</Form.Label>
                            <Form.Control
                                type="text"
                                id="email"
                                className="form-control pt-2"
                                name="email"
                                placeholder="Your Email"
                            />
                            <Form.Label className="pt-1">Message</Form.Label>
                            <Form.Control
                                type="text"
                                id="message"
                                className="form-control pt-2"
                                name="message"
                                placeholder="Message for seller"
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