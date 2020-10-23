import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup() {
  const history = useHistory();
  const [ errorCode, setErrorCode ] = useState('');
  const [signUpCreds, setSignUpCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setErrorCode('');
    const { name, value } = event.target;
    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/users', {
        
        username: signUpCreds.username,
        password: signUpCreds.password,
      })
      .then((response) => {
        console.log('response signup: ', response)
        if (!response.data.error && !response.data.errors) {
          console.log('signup success');
          setErrorCode('');
          alert(`${response.data.username} is now signed up, please log in`);
          history.replace('/Login');
        } else if (response.data.error) {
          setErrorCode('Please choose a different username');
          
        } else {
          setErrorCode('You must use a valid email address and a password between 8 to 15 characters. Your password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
          
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Container>
      <Row>
        <Col className="col col-md-4 mx-auto mt-4">Please sign up by entering an email address and a desired password</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="col col-md-6 col-lg-4 border signup bg-light mx-auto mt-4">
              <Form>
                <Form.Group>
                  <Form.Label
                    htmlFor="inputEmail" className="sr-only"
                  >Email address</Form.Label>
                  <Form.Control
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    name="username"
                    placeholder="Email address"
                    value={signUpCreds.username}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label
                    htmlFor="inputEmail" className="sr-only"
                  >Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={signUpCreds.password}
                    onChange={handleChange} />
                </Form.Group>
                <Button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>
                  Sign Up
                </Button>
                {(errorCode &&
                  <Row>

                  <Col className="border rounded mt-4 errorCode">
                  <div>{errorCode}</div>
                  </Col>
                </Row>
                  )}
                
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup;