import React from 'react';
import LoginComponent from '../components/Login/index'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
    return(
        <Container>
        <Row>
            <Col className="col-6 mt-4">
            <h6>Login</h6>
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
export default Login;