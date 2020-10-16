import React from 'react';
import LoggedInAs from './loggedInAs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Jumbo() {
  return (
    <>
      <Row className="row d-inline-flex">
        <Col className="pt-3">
          <h1>YardPal</h1>
        </Col>
        <Col className="col d-inline-flex">
          <LoggedInAs />
        </Col>
      </Row>
    </>
  )
}

export default Jumbo;