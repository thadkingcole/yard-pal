import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';




function Login() {
    return (
        <Container>
            <Row>
                <Col className="col col-md-4 col-lg-6 border login bg-light">
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="float-right" id="loginSubmit" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;