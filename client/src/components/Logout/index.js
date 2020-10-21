import React from 'react';
import Button from 'react-bootstrap/Button';


function Logout({ handleLogout }) {

    return (
        <Button className="logoutBtn" onClick={handleLogout}>Logout</Button>
    )
}

export default Logout;