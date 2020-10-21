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
                                Buyer Interest
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={closeViewInterestModal} variant="light">X</Button>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <h1>interest goes here</h1>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default ViewInterestModal;