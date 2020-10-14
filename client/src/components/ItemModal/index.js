import React, { useState } from 'react';
// import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'react-bootstrap';
import { Button, Modal, Form } from 'react-bootstrap';


function ItemModal() {

    const [modalDisplay, useModal] = useState({
        modal: false,
        name: '',
        description: '',
        price: ''
    })

    const toggleActive = () => {
        console.log('first', modalDisplay.modal);
        useModal({ modal: !modalDisplay.modal });
    }
    

    // const onChange = (e) => {
    //     useModal({ [e.target.name]: e.target.value });
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const newItem = {
    //         name: this.state.name
    //     }
    //     this.props.addItem(newItem);
    //     this.toggle();
    // }

    return (
        <div>
            <Button
                color="dark"
                style={{ marginBottom: '2rem' }}
                onClick={toggleActive}
            >
                Add Item
            </Button>
            <Modal>
                <Modal.Header >
                    Add To Shopping List
                    </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label for="item">Item</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add Shopping Item"
                            />
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                            >Add Item</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ItemModal;