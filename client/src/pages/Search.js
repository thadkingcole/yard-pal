import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../components/SearchBar/index";
import { useParams } from "react-router-dom";
import axios from "axios";
import BrowseContainer from "../components/BrowseContainer";

function Search({ loggedInAs }) {
  const [itemArray, setItemArray] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      async function fetchData() {
        const request = await axios.get(`/api/users/browse/${userId}`);
        setItemArray(request.data);
        return request;
      }
      fetchData();
    }
  }, [userId]);

  return (
    <Container>
      <Row>
        <Col className="pt-2">
          <SearchBar />
        </Col>
      </Row>
      {userId && (
        <Row>
          <BrowseContainer
            loggedInAs={loggedInAs}
            itemArray={itemArray}
            setItemArray={setItemArray}
            userId={userId}
          />
        </Row>
      )}
    </Container>
  );
}

export default Search;
