import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { INTEREST_INFO } from '../../store/actions';
import { useStoreContext } from '../../store/store';

function InterestModal({
    show,
    closeInterestModal,
}) {
    const history = useHistory();
    const [state, dispatch] = useStoreContext();
    const [interestArray, setInterestArray] = useState({
        name: '',
        email: '',
        message: '',
    })
    

    async function handleSubmit(e) {
        e.preventDefault();
        closeInterestModal();
        await axios
            .put('/api/users/addInterest', state.interestItem)
            .then((response) => {
                console.log('State inside of interest click: ', response);
                setInterestArray({
                    name: '',
                    email: '',
                    message: '',
                })
                history.push('/Search');
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleConfirm = () => {
        dispatch({
            type: INTEREST_INFO, interestItem: {
                name: state.interestItem.name,
                description: state.interestItem.description,
                price: state.interestItem.price,
                imgUrl: state.interestItem.imgUrl,
                itemId: state.interestItem.itemId,
                interest: interestArray,
                username: state.user_name,
            }
        })

    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInterestArray({ ...interestArray, [name]: value });
    };
    return (
        <Row>
            <Col>
                <Modal show={show}>
                    <Modal.Header>
                        <Row>
                            <Col>
                                Please provide your information below
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={closeInterestModal} variant="light">X</Button>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="p-2" id="intf">
                            <Form.Label className="pt-1">Your Name</Form.Label>
                            <Form.Control
                                type="input"
                                id="name"
                                className="form-control"
                                name="name"
                                placeholder="Your name"
                                value={interestArray.name}
                                onChange={handleChange}
                            />
                            <Form.Label className="pt-1">Your Email</Form.Label>
                            <Form.Control
                                type="input"
                                id="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                                value={interestArray.email}
                                onChange={handleChange}
                            />
                            <Form.Label className="pt-1">Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                type="input"
                                id="message"
                                className="form-control"
                                name="message"
                                placeholder="Message for the seller"
                                value={interestArray.message}
                                onChange={handleChange}
                            />
                            <Button
                                className="mr-2"
                                color="dark"
                                variant="success"
                                style={{ marginTop: '2rem' }}
                                onClick={handleConfirm}
                                
                            >Confirm Interest</Button>
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                onClick={handleSubmit}
                            >Submit Form</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default InterestModal;
