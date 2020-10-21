import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

function ViewInterestModal({
    showViewInterest,
    closeViewInterestModal
}) {
    // Handle submit InterestModal
    async function handleSubmit(f) {
        f.preventDefault();
    };

    return (
        <Row>
            <Col>
                <Modal show={showViewInterest}>
                    <Modal.Header>
                        <Row>
                            <Col>
                                Please provide your information below
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={closeViewInterestModal} variant="light">X</Button>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <Form className="p-2" id="intf">
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
                            <Form.Label className="pt-1">Item for Reservation</Form.Label>
                            <Form.Control
                                type="text"
                                id="itemresrve"
                                className="form-control pt-2"
                                name="itemreserve"
                                placeholder="Please list one item only"
                            />
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                onClick={handleSubmit}
                            >Submit Form</Button>
                        </Form> */}
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default ViewInterestModal;