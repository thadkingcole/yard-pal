import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoggedInAs({ loggedInAs }) {
    return (
        <>
            <Container>
                <Row>
                    <Col className="col m-1">Logged in as: {loggedInAs}</Col>
                </Row>
            </Container>
        </>
    )
}
export default LoggedInAs;