import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Logout  from '../Logout/index'

function LoggedInAs() {

    const [loggedInAs, setLoggedInAs] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios
                .get('/api/users');
            console.log(request.data)
            setLoggedInAs(request.data.user.username);
            return request;
        }
        fetchData();
    }, [loggedInAs]);

    return (
        <>
            <Col className="col pt-4">{loggedInAs}</Col>
            <Col className="col pt-4">
            <Logout />
            </Col>
            
            
        </>
    )
}

export default LoggedInAs;