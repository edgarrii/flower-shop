import React from "react";
import Tag from "./Tag";

const CurrentTags = ({ activeTags, setActiveTags }) => {
  return (
    <div className="d-flex justify-content-between mt-4">
      {activeTags
        ? activeTags.map((activeTag, index) => (
            <Tag
              isActive={true}
              text={activeTag}
              key={index}
              setActiveTags={setActiveTags}
              activeTags={activeTags}
            />
          ))
        : null}
    </div>
  );
};

export default CurrentTags;
