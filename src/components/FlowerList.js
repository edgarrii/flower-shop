import React, { useContext, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Context } from "../index";
import FlowerImage from "./FlowerImage";
import Row from "react-bootstrap/Row";

const FlowerList = ({ flower }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("flowers");
  const REACT_APP_PIXABAY_API_KEY = "22849846-8845f94e39fb8bff02e7224ca";

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Row md={3} className="mt-4">
      {images.map((image) => (
        <FlowerImage key={image.id} image={image} />
      ))}
    </Row>
  );
};

export default FlowerList;
