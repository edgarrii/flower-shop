import React from "react";
import Tag from "./Tag";

const TagForm = ({ activeTags, tags, setActiveTags }) => {
  return (
    <div className="d-inline-flex flex-wrap mt-2">
      {tags.map((tag, index) => (
        <Tag
          activeTags={activeTags}
          onClickHandler={setActiveTags}
          key={index}
          text={tag}
        />
      ))}
    </div>
  );
};

export default TagForm;
