import React from "react";

const Tag = ({ text, activeTags, setActiveTags }) => {
  return (
    <span
      style={{
        fontSize: "small",
        color: "#DCDCDC",
        cursor: "pointer",
        fontWeight: 600,
        backgroundColor: "lightgray",
      }}
      onClick={() => {
        setActiveTags(activeTags, text);
        console.log(activeTags);
      }}
      className="text-black-50 d-inline-block rounded-pill py-1 px-1 mb-2 me-1"
    >
      #{text}
    </span>
  );
};

export default Tag;
