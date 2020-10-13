import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {

  return (
    <Container>
      <Row>
        <Col className="col col-md-4 mx-auto mt-4">Please login by entering an email address and a desired password</Col>
      </Row>
      <Row >
        <Col>
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
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Login;