import React from 'react'
import LoginComponent from '../components/Login/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Signup() {
    return(
        <Container>
            <Row>
                <Col className="col-6 mt-4">
                    <h6>Sign-up</h6>
                <h6>Please enter an email address and password</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                <LoginComponent />
                </Col>
            </Row>
        </Container>
    )
}
export default Signup;