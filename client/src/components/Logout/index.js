import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Logout({ handleLogout }) {
    
    return(
        <Container>
            <Row>
                <Col>
                <Button onClick={handleLogout} className="btn btn-primary m-1 logout">Logout</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Logout;