import React from 'react'
import LoginComponent from '../components/Login/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Signup() {
    return(
        <Container>
            <Row>
                <Col className="col col-md-4 mx-auto mt-4">Please sign up by entering an email address and a desired password</Col>
            </Row>
            <Row>
                <Col>
                <LoginComponent action="Signup" />
                </Col>
            </Row>
        </Container>
    )
}
export default Signup;