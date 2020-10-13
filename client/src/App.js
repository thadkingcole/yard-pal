import React, { Component } from "react";
import NavBar from './components/NavBar/index';
import Jumbo from './components/Jumbotron/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css";
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row>
            <Col>
              <Jumbo />
              <NavBar />
            </Col>
          </Row>
        </Container>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/About" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
