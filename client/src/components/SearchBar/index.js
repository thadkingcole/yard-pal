import React, { useState } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap';

function SearchBar() {
    const [username, setUsername] = useState('');
    const handleChange = (e) => setUsername(e.target.value);
    const handleClick = (e) => {
        e.preventDefault();
        const user = username;
        console.log(user);
        async function fetchData() {
            await axios.post('/api/users/searchUsername', { user })
                .then(response => {
                    console.log('response /api/users/searchUsername: ', response);
                    const userId = response.data;
                    console.log('userId', userId);
                })
                .catch(err => console.log('catch error /api/users/searchUsername: ', err))
        }
        fetchData();
    }
    return (
        <Form>
            <Form.Group>
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
                    className="m-2"
                    onClick={handleClick}
                >Search</Button>
            </Form.Group>
        </Form>
    )
}
export default SearchBar;