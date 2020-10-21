import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios'

function EditModal({
    setItemArray,
    setShow,
    show,
    closeEditModal
}) {
    //declare variables for EditItenModal
    const [editItemInfo, setEditItemInfo] = useState({
        name: '',
        description: '',
        price: 0,
        imgUrl: '',
    });

    // Handle submit EditItemModal
    async function handleSubmit(e) {
        e.preventDefault();
        setShow(false);

        await axios
            .put('/api/users/editItem', editItemInfo)
            .then((response) => {
                console.log('edit item: ', response)
                // setItemArray(response.data.items);
            })
            .catch((error) => {
                console.log(error);
            });
        setEditItemInfo({
            name: "",
            description: "",
            price: 0,
            imgUrl: "",
        })
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditItemInfo({ ...editItemInfo, [name]: value });
    };

    return (
        <Row>
            <Col>
                <Modal show={show}>
                    <Modal.Header>
                        <Row>
                            <Col>
                                Edit item:
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={closeEditModal} variant="light">X</Button>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="p-2">
                            <Form.Group>
                                <Form.Label className="pt-1">Item</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="item"
                                    className="form-control pt-2"
                                    name="name"
                                    placeholder="Item Name"
                                    value={editItemInfo.name}
                                    onChange={handleChange} />
                                <Form.Label className="pt-1">Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="description"
                                    className="form-control pt-2"
                                    name="description"
                                    placeholder="Item Description"
                                    value={editItemInfo.description}
                                    onChange={handleChange} />
                                <Form.Label className="pt-1">Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="price"
                                    className="form-control pt-2"
                                    name="price"
                                    placeholder="Item Price"
                                    value={editItemInfo.price}
                                    onChange={handleChange} />
                                <Form.Label className="pt-1">Image (URL)</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="imgUrl"
                                    className="form-control mt-1"
                                    name="imgUrl"
                                    placeholder="https://placekitten.com/200/200"
                                    value={editItemInfo.imgUrl}
                                    onChange={handleChange} />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    onClick={handleSubmit}
                                >Edit Item</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default EditModal;