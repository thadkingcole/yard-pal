import React, { useState } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function SearchBar() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const handleChange = (e) => setUsername(e.target.value);
    const handleClick = (e) => {
        e.preventDefault();
        const user = username;
        async function fetchData() {
            await axios.post('/api/users/searchUsername', { user })
                .then(response => {
                    const userId = response.data;
                    history.push(`/browse/${userId}`)
                    setUsername('');
                })
                .catch(err => console.log('catch error /api/users/searchUsername: ', err))
        }
        fetchData();
    }
    return (
        <Form>
            <Form.Group
                className="searchForm d-inline-flex p-1">
                <Form.Label></Form.Label>
                <Form.Control
                    type="text"
                    id="username"
                    className="form-control"
                    name="userSearch"
                    placeholder="Enter a Username"
                    value={username}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    id="usernameSub"
                    className="ml-2"
                    onClick={handleClick}
                >Search</Button>
            </Form.Group>
        </Form>
    )
}
export default SearchBar;