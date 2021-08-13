import React from "react";

const Tag = ({ isActive, text, activeTags, setActiveTags }) => {
  const deleteTag = () => {
    console.log("tag" + activeTags, "text" + text);
    if (activeTags) {
      setActiveTags(activeTags.filter((tag) => tag !== text));
    }
  };

  return (
    <div>
      {!isActive ? (
        <span
          style={{
            fontSize: "small",
            color: "#DCDCDC",
            cursor: "pointer",
            fontWeight: 600,
            backgroundColor: "lightgray",
          }}
          onClick={() => setActiveTags([...activeTags, text])}
          className="text-black-50 d-inline-block rounded-pill py-1 px-1 mb-2 me-1"
        >
          #{text}
        </span>
      ) : (
        <span
          style={{
            fontSize: "small",
            color: "#DCDCDC",
            fontWeight: 600,
            backgroundColor: "lightgray",
          }}
          className="text-black-50 d-inline-block rounded-pill py-1 px-1 mb-2 me-1"
        >
          #{text}
          <a
            onClick={() => deleteTag()}
            style={{
              cursor: "pointer",
              marginRight: 3,
              color: "red",
              textDecoration: "none",
            }}
          >
            &nbsp; X
          </a>
        </span>
      )}
    </div>
  );
};

export default Tag;
