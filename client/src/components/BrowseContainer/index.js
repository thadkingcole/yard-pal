import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Col, Row } from 'react-bootstrap';

function BrowseContainer() {
    const [itemArray, setItemArray] = useState([]);

    useEffect(() => {
        async function fetchData() {
            console.log('itemArray: before: ', itemArray);
            const request = await axios
                .get('/api/users/browseItems');
            console.log(request.data.items);
            setItemArray(request.data.items);
            console.log('itemArray: after: ', itemArray);

            return request;
        }
        fetchData();
    }, [itemArray]);

    return (
        <>
            <Row>
                <Col className="col bg-light p-3 border rounded itemTable">
                    <Row className="m-2 ">
                        <table>
                            <tbody>
                                <tr>
                                    <th><h4>Image</h4></th>
                                    <th><h4>Item</h4></th>
                                    <th><h4>Description</h4></th>
                                    <th><h4>Price</h4></th>
                                </tr>
                                {itemArray.map((entry, index) =>
                                    <tr key={index}>
                                        <td className="entry-id">{entry._id}</td>
                                        <td className="entry-name">{entry.name}</td>
                                        <td className="entry-description">{entry.description}</td>
                                        <td className="entry-">{entry.price}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default BrowseContainer;