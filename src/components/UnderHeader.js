import React from "react";
import SearchBar from "./SearchBar";
import CurrentTags from "./CurrentTags";

const UnderHeader = ({
  searchInput,
  setSearchInput,
  setActiveTags,
  activeTags,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <SearchBar
        searchInput={searchInput}
        searchText={(text) => setSearchInput(text)}
      />
      <CurrentTags activeTags={activeTags} setActiveTags={setActiveTags} />
    </div>
  );
};

export default UnderHeader;
