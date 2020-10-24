import axios from 'axios';
import React, { useEffect } from 'react';
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
 
  useEffect(() => {
    dispatch({ type: LOADING });
    async function fetchData() {
      await axios.get('/api/users').then(response => {
        if (response.data.user) {
          dispatch({ type: SET_USER, user: response.data.user, msg: response.data.user.username } );
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
    if (!state.loggedInAs.isLoggedOn) {
      alert('not logged on!')
    } else {
      axios.post('/api/users/logout', {
        user: state.loggedInAs.msg
      })
        .then((response) => {
          dispatch({ type: SET_USER, user: null, msg: 'not logged on'})
          if (response.status === 200) {
            alert('Logout Successful!');
            history.push('/Login');
          }
        }).catch(err => console.log(err));
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="pt-3">
          <Jumbo />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
      </Container>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Browse" render={props => <Browse {...props} dispatch={dispatch} state={state} loggedInAs={state.loggedInAs} />} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Browse/:userId" render={props => <Search {...props} loggedInAs={state.loggedInAs} />} />
      </Switch>
      <Container>
        <Row className="d-inline-flex border logout bg-light">
          <Col className="col">
            <Logout
              handleLogout={handleLogout} />
          </Col>
          <Col className="col">
            <LoggedInAs
              loggedInAs={state.loggedInAs}
            />
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default App;
