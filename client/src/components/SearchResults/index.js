import React from 'react';
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

function SearchResults({ items }) {
    const handleDelete = (_id) => {
        console.log('_id handleDelte: ', _id);
    }
    return (
        <Table striped bordered hover>
            <tbody>
                {/* Map through Item array into table */}
                {items.map((entry, index) =>
                    <tr key={index}>
                        <td className="entry-img">
                            <img
                                className="shadow"
                                src={entry.imgUrl} alt={entry.name} width="100" height="100" /></td>
                        <td className="entry-name">{entry.name}</td>
                        <td className="entry-description">{entry.description}</td>
                        <td className="entry-price"><h4>$ {entry.price}</h4></td>
                        <td>
                            <Button
                                className="d-block mx-auto"
                                id="delete-btn"
                                onClick={() => handleDelete(entry._id)}
                            >X</Button>
                            <Button
                                className="d-block mx-auto mt-2"
                                id="edit-btn"
                                onClick={() => handleDelete(entry._id)}
                            >Edit</Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default SearchResults;