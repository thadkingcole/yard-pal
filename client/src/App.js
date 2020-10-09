import React, { Component } from "react";
import NavBar from './components/NavBar/index'
import Jumbo from './components/Jumbotron/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./App.css";
import Signup from './pages/Signup'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbo />
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Signup />
        </Row>
      </Container>
    );
  }
}

export default App;
