import React from "react";
import Tag from "./Tag";

const CurrentTags = ({ activeTags, setActiveTags }) => {
  return (
    <div className="d-flex justify-content-between mt-3">
      {activeTags.length !== 0
        ? activeTags.map((activeTag, index) => (
            <Tag text={activeTag} key={index} />
          ))
        : ""}
    </div>
  );
};

export default CurrentTags;
