import React from 'react';
import ItemModal from '../components/ItemModal/index'
import BrowseContainer from '../components/BrowseContainer/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Browse() {
    return (
        <Container>
            <Row>
                <Col className="col col-md-6 p-3">
                    <Row className="justify-content-center">
                        <Col className="p-1 pl-3">
                            <ItemModal />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <BrowseContainer />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Browse;