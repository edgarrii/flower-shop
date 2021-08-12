import React from "react";
import { Card } from "react-bootstrap";
import TagForm from "./TagForm";
import Tag from "./Tag";

const FlowerImage = ({ activeTags, image, setTerm, setActiveTags }) => {
  return (
    <Card style={{ width: "19.3rem", margin: 10 }}>
      <Card.Img
        style={{ cursor: "pointer" }}
        variant="top"
        src={image.webformatURL}
        alt="picture"
      />
      <Card.Body>
        <Card.Title
          style={{
            fontStyle: "italic",
            color: "rgb(76, 93, 237)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Photo by &nbsp; <b>{image.user}</b>
        </Card.Title>
        <Card.Text style={{ margin: 0 }}>
          <b>Views: </b>
          {image.views}
        </Card.Text>
        <Card.Text style={{ margin: 0 }}>
          <b>Likes: </b>
          {image.likes}
        </Card.Text>
        <Card.Text style={{ margin: 0 }}>
          <b>Downloads: </b>
          {image.downloads}
        </Card.Text>
        <TagForm
          setActiveTags={setActiveTags}
          activeTags={activeTags}
          tags={image.tags.split(",")}
        />
      </Card.Body>
    </Card>
  );
};

export default FlowerImage;
