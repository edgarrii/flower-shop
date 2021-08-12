import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import FlowerList from "../components/FlowerList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import dotenv from "dotenv";

const Shop = () => {
  const [activeTags, setActiveTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <Header />
      <Row>
        <Col md={12}>
          <SearchBar term={term} searchText={(text) => setTerm(text)} />
          <FlowerList setTerm={setTerm} />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
