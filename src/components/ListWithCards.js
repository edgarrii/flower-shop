import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

const ListWithCards = ({
  activeTags,
  setActiveTags,
  images,
  isLoading,
  setSearchInput,
}) => {
  return (
    <Row>
      <Col md={12}>
        {!isLoading && images.length === 0 && (
          <h1 className="d-flex justify-content-center mt-5">
            No images found
          </h1>
        )}
        {isLoading ? (
          <h1 className="d-flex justify-content-center mt-5">Loading...</h1>
        ) : (
          <Row md={3} className="mt-2">
            {images.map((image) => (
              <ImageCard
                activeTags={activeTags}
                setActiveTags={setActiveTags}
                key={image.id}
                image={image}
                setSearchInput={setSearchInput}
              />
            ))}
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default ListWithCards;
