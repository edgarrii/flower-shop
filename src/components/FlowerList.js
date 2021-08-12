import React, { useEffect, useState } from "react";
import FlowerImage from "./FlowerImage";
import Row from "react-bootstrap/Row";
import SearchBar from "./SearchBar";
import TagForm from "./TagForm";
import dotenv from "dotenv";

const FlowerList = ({ flower }) => {
  const [images, setImages] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    dotenv.config();
    const REACT_APP_PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
    fetch(
      `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      {!isLoading && images.length !== 0 ? (
        <TagForm setActiveTags={setActiveTags} tags={activeTags} />
      ) : (
        ""
      )}
      {!isLoading && images.length === 0 && (
        <h1 className="d-flex justify-content-center mt-5">No images found</h1>
      )}
      {isLoading ? (
        <h1 className="d-flex justify-content-center mt-5">Loading...</h1>
      ) : (
        <Row md={3} className="mt-2">
          {images.map((image) => (
            <FlowerImage
              activeTags={activeTags}
              setActiveTags={setActiveTags}
              key={image.id}
              image={image}
              setTerm={setTerm}
            />
          ))}
        </Row>
      )}
    </>
  );
};

export default FlowerList;
