import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import InterestModal from '../InterestModal'
import EditModal from '../EditModal'

function BrowseContainer({ itemArray, handleDelete, loggedInAs }) {

    const [showInterest, setShowInterest] = useState(false);
    const handleShowInterest = () => setShowInterest(true);
    const closeInterestModal = () => {
        setShowInterest(false)
    }
    const [editEntry, setEditEntry] = useState()
    const [showEdit, setShowEdit] = useState(false);
    const handleShowEdit = () => setShowEdit(true);
    const closeEditModal = () => {
        setShowEdit(false)
    }
    const handleEdit = (entry) => {
        console.log('at handleEdit: ', entry);
        setEditEntry(entry)
        handleShowEdit();
    }
    return (
        <Row>
            <Col className="col bg-light p-3 border rounded itemTable">
                <Row className="m-2 ">
                    <Table striped bordered hover>
                        <tbody>
                            {/* Map through Item array into table */}
                            {itemArray.map((entry, index) =>
                                <tr key={index}>
                                    <td className="entry-img">
                                        <img
                                            className="shadow"
                                            src={entry.imgUrl} alt={entry.name} width="100" height="100" /></td>
                                    <td className="entry-name">{entry.name}</td>
                                    <td className="entry-description">{entry.description}</td>
                                    <td className="entry-price"><h4>$ {entry.price}</h4></td>
                                    <td>
                                        {(loggedInAs.isLoggedOn ? 
                                        <>
                                            <Button
                                                className="d-block mx-auto"
                                                id="delete-btn"
                                                onClick={() => handleDelete(entry._id)}
                                            >X</Button>
                                            <Button
                                                className="d-block mx-auto mt-2"
                                                id="edit-btn"
                                                onClick={() => handleEdit(entry._id)}
                                            >Edit</Button>
                                            <EditModal
                                            entry={entry.name}
                                            handleShowEdit={handleShowEdit}
                                            show={showEdit}
                                            setShow={setShowEdit}
                                            closeEditModal={closeEditModal}
                                            />
                                        </> :
                                        <>
                                        <InterestModal
                                            handleShowInterest={handleShowInterest}
                                            show={showInterest}
                                            setShow={setShowInterest}
                                            closeInterestModal={closeInterestModal}
                                            />
                                            
                                        </>)}

                                    </td>
                                </tr>

                            )}
                        </tbody>
                    </Table>
                </Row>
            </Col>
        </Row>
    )
}

export default BrowseContainer;