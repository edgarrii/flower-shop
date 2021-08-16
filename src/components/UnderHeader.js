import React from "react";
import SearchBar from "./SearchBar";
import CurrentTags from "./CurrentTags";
import { Button } from "react-bootstrap";

const UnderHeader = ({
  searchInput,
  setSearchInput,
  setActiveTags,
  activeTags,
}) => {
  return (
    <div className="d-flex justify-content-start">
      <SearchBar
        searchInput={searchInput}
        searchText={(text) => setSearchInput(text)}
      />
      <CurrentTags activeTags={activeTags} setActiveTags={setActiveTags} />
      <Button
        style={{ height: 38, marginTop: 16 }}
        className="py-0 mx-2"
        type="reset"
        variant="outline-dark"
        onClick={() => setActiveTags([])}
      >
        Reset
      </Button>
    </div>
  );
};

export default UnderHeader;
