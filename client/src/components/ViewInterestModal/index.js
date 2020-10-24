import React from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';

function ViewInterestModal({
    showViewInterest,
    closeViewInterestModal
}) {

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