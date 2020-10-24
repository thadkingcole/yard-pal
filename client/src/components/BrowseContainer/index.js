import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import InterestModal from '../InterestModal'
import EditModal from '../EditModal'
import ViewInterestModal from '../ViewInterestModal/index'

function BrowseContainer({ itemArray, handleDelete, loggedInAs, setItemArray }) {

    const [showInterest, setShowInterest] = useState(false);
    const handleShowInterest = () => setShowInterest(true);
    const closeInterestModal = () => {
        setShowInterest(false)
    }

    const [showEdit, setShowEdit] = useState(false);
    const handleShowEdit = () => setShowEdit(true);
    const closeEditModal = () => {
        setShowEdit(false)
    }

    //Show or hide ViewInterestModal
    const [showViewInterest, setShowViewInterest] = useState(false);
    const handleShowViewInterest = () => setShowViewInterest(true);
    const closeViewInterestModal = () => {
        setShowViewInterest(false)
    }

    const [editItemInfo, setEditItemInfo] = useState({
        name: '',
        description: '',
        price: 0,
        imgUrl: '',
        itemId: ''
    });

    return (
        <Row>
            <Col className="col bg-light border rounded itemTable">
                <Row className="">
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
                                                >Delete</Button>
                                                <Button
                                                    className="d-block mx-auto mt-1 mb-1"
                                                    id="edit-btn"
                                                    onClick={() => {
                                                        handleShowEdit();
                                                        setEditItemInfo({
                                                            name: entry.name,
                                                            description: entry.description,
                                                            price: entry.price,
                                                            imgUrl: entry.imgUrl,
                                                            itemId: entry._id
                                                        })
                                                    }}
                                                >Edit</Button>
                                                <Button
                                                    onClick={handleShowViewInterest}
                                                    className=""
                                                    variant="primary">
                                                    View Interest
                                                </Button>
                                                <EditModal
                                                    setItemArray={setItemArray}
                                                    editItemInfo={editItemInfo}
                                                    setEditItemInfo={setEditItemInfo}
                                                    handleShowEdit={handleShowEdit}
                                                    show={showEdit}
                                                    setShow={setShowEdit}
                                                    closeEditModal={closeEditModal}
                                                />
                                                <ViewInterestModal
                                                    showViewInterest={showViewInterest}
                                                    closeViewInterestModal={closeViewInterestModal}
                                                />
                                            </> :
                                            <>
                                                <Button
                                                    className="m-2"
                                                    variant="primary"
                                                    onClick={() => {
                                                        handleShowInterest();
                                                        setEditItemInfo({
                                                            name: entry.name,
                                                            description: entry.description,
                                                            price: entry.price,
                                                            imgUrl: entry.imgUrl,
                                                            itemId: entry._id
                                                        })
                                                    }}
                                                    
                                                    >
                                                    Reserve Item
                                                </Button>
                                                <InterestModal
                                                    username={loggedInAs.msg}
                                                    editItemInfo={editItemInfo}
                                                    handleShowViewInterest={handleShowViewInterest}
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