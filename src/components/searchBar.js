import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const SearchBar = ({ searchText, searchInput }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  useEffect(() => {
    setText(searchInput);
  }, [searchInput]);

  return (
    <div className="d-flex">
      <Form onSubmit={onSubmit} className="mt-3 d-flex m-auto">
        <FormControl
          value={text}
          style={{ width: 200 }}
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => {
            setText(e.target.value);
            e.target.value = text;
          }}
        />
        <Button className="mx-2" type="submit" variant="outline-dark">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
