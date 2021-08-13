import React from "react";
import Tag from "./Tag";

const CurrentTags = ({ activeTags, setActiveTags }) => {
  return (
    <div className="d-flex justify-content-between mt-3">
      {console.log(activeTags)}
      {activeTags
        ? activeTags.map((activeTag, index) => (
            <Tag text={activeTag} key={index} setActiveTags={setActiveTags} />
          ))
        : ""}
    </div>
  );
};

export default CurrentTags;
