import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logout from '../Logout/index'
import LoggedInAs from '../LoggedInAs/loggedInAs'


const ControlPanel = ({
    state,
    handleLogout,
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
                            <Button
                                variant="primary"
                                onClick={handleShow}>
                                Add
                            </Button>
                        </Col>
                        <Col className="searchCount">
                            {(itemArray &&
                                <h6>displaying {itemArrayLength} items</h6>
                            )}
                        </Col>
                        <Col className="col">
                            <LoggedInAs
                                loggedInAs={state.loggedInAs}
                            />
                        </Col>
                        <Col className="col justify-content-right">
                            <Logout
                                handleLogout={handleLogout} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default ControlPanel;