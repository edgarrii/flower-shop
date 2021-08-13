import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ListWithCards from "../components/ListWithCards";
import Header from "../components/Header";
import UnderHeader from "../components/UnderHeader";
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

const Shop = () => {
  const [activeTags, setActiveTags] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        process.env.REACT_APP_PIXABAY_API_KEY
      }&q=${
        searchInput + "+" + activeTags.join("+")
      }&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchInput]);

  return (
    <Container>
      <Header onClick={() => history.push(LOGIN_ROUTE)} />
      <UnderHeader
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchText={(text) => setSearchInput(text)}
      />
      <ListWithCards
        setSearchInput={setSearchInput}
        images={images}
        isLoading={isLoading}
        setActiveTags={setActiveTags}
        activeTags={activeTags}
      />
    </Container>
  );
};

export default Shop;
