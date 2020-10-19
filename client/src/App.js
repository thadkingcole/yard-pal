import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import Search from './pages/Search';
import Browse from './pages/Browse';
import Logout from './components/Logout/index'
import LoggedInAs from './components/LoggedInAs/loggedInAs'
import About from './pages/About';

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const [loggedInAs, setLoggedInAs] = useState({
    msg: 'not logged in',
    isLoggedOn: false
  });

  useEffect(() => {
    dispatch({ type: LOADING });
    async function fetchData() {
      await axios.get('/api/users').then(response => {
        if (response.data.user) {
          console.log('response api/users: ', response)
          dispatch({ type: SET_USER, user: response.data.user });
          setLoggedInAs({
            msg: response.data.user.username,
            isLoggedOn: true
          });
          history.push('/Browse');
        } else {
          dispatch({ type: UNSET_USER });
          history.push('/login');
        }

      })
    }
    fetchData();
  }, [dispatch, history]);

  const handleLogout = (event) => {
    event.preventDefault();
    axios.post('/api/users/logout', {
      user: loggedInAs.msg
    })
      .then((response) => {
        setLoggedInAs({
          msg: "not logged in",
          isLoggedOn: false
        })
        console.log('response .POST:a/api/users/logout: ', response);
        if(response.status === 200) {
          alert('Logout Successful!');
          history.push('/Login');
        }
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
        <Route exact path="/Browse" render={props => <Browse {...props} loggedInAs={loggedInAs} />} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Search" component={Search} />

        {/* <Route exact path="/Browse/:userId" component={Browse} /> */}
      </Switch>
      <LoggedInAs
        loggedInAs={loggedInAs}
      />
      <Logout
        handleLogout={handleLogout} />
    </>
  );
}

export default App;
