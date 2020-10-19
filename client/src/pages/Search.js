import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from '../components/SearchBar/index';

function Search() {

    return (
        <Container>
            <Row>
                <Col className="pt-2">
                    <h4>Search for a items by username</h4>
                </Col>
            </Row>
            <Row>
                <Col className="col-6 border rounded">
                    <SearchBar />
                </Col>
            </Row>
        </Container>
    )
}

export default Search;