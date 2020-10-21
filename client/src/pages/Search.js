import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../components/SearchBar/index";
import { useParams } from "react-router-dom";
import axios from "axios";
import BrowseContainer from "../components/BrowseContainer";

function Search() {
  const [itemArray, setItemArray] = useState([]);

  const { userId } = useParams();
  console.log("this is the one we want", userId);

  useEffect(() => {
    if (userId) {
      console.log("I'm doing stuff here :)");
      async function fetchData() {
        const request = await axios.get(`/api/users/browse/${userId}`);
        console.log("this is the request that will make me super happy\n",request);
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
          <h4>Search for a items by username</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col-6 border rounded">
          <SearchBar />
        </Col>
      </Row>
      {userId && (
        <Row>
          <BrowseContainer
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
