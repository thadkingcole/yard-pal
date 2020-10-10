import React from 'react';
import LoginComponent from '../components/Login/index'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
    
    return (
        <Container>
            <Row>
                <Col className="col col-md-4 mx-auto mt-4">Please login by entering an email address and a desired password</Col>
            </Row>
            <Row >
                <Col>
                    <LoginComponent action="Login" />
                </Col>
            </Row>
        </Container>
    )
}
export default Login;