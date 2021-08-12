import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import FlowerList from "../components/FlowerList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Shop = () => {
  const [activeTags, setActiveTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  return (
    <Container>
      <Header />
      <Row>
        <Col md={12}>
          <SearchBar term={term} searchText={(text) => setTerm(text)} />
          <FlowerList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
