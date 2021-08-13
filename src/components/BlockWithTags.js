import React from "react";
import Tag from "./Tag";

const BlockWithTags = ({ tags, activeTags, setActiveTags }) => {
  return (
    <div>
      {tags.map((tag, index) => (
        <Tag
          text={tag}
          key={index}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
        />
      ))}
    </div>
  );
};

export default BlockWithTags;
