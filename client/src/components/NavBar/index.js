import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar({ state }) {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            {!state.loggedInAs.isLoggedOn &&
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/Login"
                    eventKey="login">Login</Nav.Link>
            </Nav.Item>
            }
            {!state.loggedInAs.isLoggedOn &&
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/Signup"
                    eventKey="signUp">Sign-up</Nav.Link>
            </Nav.Item>
            }
            <Nav.Item>
                <Nav.Link 
                as={Link}
                to="/Browse"
                eventKey="browse">Browse Items</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/About"
                    eventKey="about">About</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar