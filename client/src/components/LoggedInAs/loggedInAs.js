import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoggedInAs({ loggedInAs }) {
    
    return (
        <>
    <p>Logged in as: {loggedInAs.msg}</p>
        </>
    )
}
export default LoggedInAs;