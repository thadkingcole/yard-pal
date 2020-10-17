import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import NavBar from './components/NavBar/index';
import Jumbo from './components/Jumbotron/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';
import "./App.css";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Browse from './pages/Browse';
import Logout from './components/Logout/index'
import LoggedInAs from './components/LoggedInAs/loggedInAs'
import About from './pages/About';

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const [loggedInAs, setLoggedInAs] = useState('not logged in');

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        setLoggedInAs(response.data.user.username)
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/Browse');
      } else {
        dispatch({ type: UNSET_USER });
        console.log('unset user @ app.js ln 44');
        history.push('/login');
      }
    });
  }, [dispatch, history]);

  const handleLogout = (event) => {
    event.preventDefault();
    axios.post('/api/users/logout', {
      user: loggedInAs
    })
      .then((response) => {
        setLoggedInAs("not logged in")
        history.push('/Login');
        console.log(response);
      })
    }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Jumbo />
            <NavBar />
          </Col>
        </Row>
      </Container>
      <Switch>
        <Route exact path="/Login" component={() => <Login loggedInAs={loggedInAs} setLoggedInAs={setLoggedInAs} />} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Browse" component={Browse} />
        <Route exact path="/About" component={About} />
      </Switch>
      <LoggedInAs
        loggedInAs={loggedInAs}
        setLoggedInAs={setLoggedInAs}
      />
      <Logout
        handleLogout={handleLogout} />
    </>
  );
}

export default App;
