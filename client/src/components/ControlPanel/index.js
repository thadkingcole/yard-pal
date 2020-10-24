import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ViewInterestModal from '../ViewInterestModal/index'

const ControlPanel = ({
    handleShow,
    itemArray,
}) => {
    //Show or hide ViewInterestModal
    const [showViewInterest, setShowViewInterest] = useState(false);
    const handleShowViewInterest = () => setShowViewInterest(true);
    const closeViewInterestModal = () => {
        setShowViewInterest(false)
    }

    const itemArrayLength = itemArray.length;
    return (
        <>
            <Row className="border bg-light controlPanel">
                <Col>
                    <Row className="border bg-white innerControlPanel">
                        <Col>
                            <Row className="d-inline-flex">
                                <Col>
                                    <h6>Control Panel</h6>
                                </Col>
                                <Col>
                                    <Button
                                        className="m-1"
                                        variant="primary"
                                        onClick={handleShow}>
                                        Add
                            </Button>
                                </Col>
                                <Col>
                                    <Button
                                        closeViewInterestModal={closeViewInterestModal}
                                        setShowViewInterest={setShowViewInterest}
                                        showViewInterest={showViewInterest}
                                        handleShowViewInterest={handleShowViewInterest}
                                        onClick={handleShowViewInterest}
                                        className="m-1"
                                        variant="primary">
                                        View Interest
                            </Button>
                                </Col>
                                <Col>
                                    {(itemArray && 
                                       <h6>Number of Items: {itemArrayLength}</h6> 
                                        )} 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ViewInterestModal
                showViewInterest={showViewInterest}
                closeViewInterestModal={closeViewInterestModal}
            />
        </>
    )
}

export default ControlPanel;