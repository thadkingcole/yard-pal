import React from 'react';
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="signUp">Sign-up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="browse">Browse Items</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="about">About</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar