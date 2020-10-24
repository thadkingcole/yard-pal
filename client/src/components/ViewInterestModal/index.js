import React from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { INTEREST_INFO } from '../../store/actions';
import { useStoreContext } from '../../store/store';


function ViewInterestModal({
    showViewInterest,
    closeViewInterestModal
}) {
    const [ state, dispatch ] = useStoreContext();
    console.log('state view interest modal ', state)
    let interestArray = state.interestItem.interest[0];
    console.log('interest array', interestArray);

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
                        {(interestArray &&    
                        <Row>
                            <Col>
                                 <div>Buyer: {interestArray.name}</div>
                                 <div>Email: {interestArray.email}</div>
                                 <div>Message to Seller: {interestArray.message}</div>
                            </Col>
                        </Row>
                        )}
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default ViewInterestModal;