import React, { Component, useState } from 'react';
import  {
    Button,
    Modal, 
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'react-boostrap';

function ItemModal() {
    
    const [ modal, useModal ] = useState({
        modal: false,
        item: ''
    })

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }
        this.props.addItem(newItem);
        this.toggle();
    }
    return(
        <div>
            <Button
            color="dark"
            style={{marginBottom: '2rem' }}
            onClick={this.toggle}
            >
                Add Item
            </Button>
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add To Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add Shopping Item"
                                onChange={this.onChange}>
                                </Input>
                                <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
            </Modal>
        </div>
    );
}

export default ItemModal;