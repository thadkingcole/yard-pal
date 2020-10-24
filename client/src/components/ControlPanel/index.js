import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ControlPanel = ({
    handleShow,
    itemArray,
}) => {
    const itemArrayLength = itemArray.length;
    return (
        <>
            <Row className="controlPanel">
                <Col>
                    <Row className="d-inline-flex">
                        <Col>
                            <h6>Control Panel</h6>
                        </Col>
                        <Col>
                            <Button
                                variant="primary"
                                onClick={handleShow}>
                                Add
                            </Button>
                        </Col>
                        <Col>
                            {(itemArray &&
                                <h6>Displaying {itemArrayLength} items</h6>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ControlPanel;