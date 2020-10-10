import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';




function LoginComponent(props) {

    return (
        <Row>
            <Col className="col col-md-6 col-lg-4 border login bg-light mx-auto mt-4">
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
                        {props.action}
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default LoginComponent;