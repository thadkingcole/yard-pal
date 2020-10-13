import React from 'react';
// import ItemModal from '../components/ItemModal/index'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Browse() {
    handleClick = () => {
        console.log('click');
    }
    return(
<Container>
    <Row>
        <Col>
        {/* <ItemModal /> */}
        <Button
        type="button"
        onClick={handleClick}
        >New Item</Button>
        </Col>
    </Row>
</Container>
    )
}

export default Browse;