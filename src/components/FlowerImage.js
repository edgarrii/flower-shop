import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Context } from "../index";

const FlowerImage = ({ image }) => {
  const { user } = useContext(Context);

  return (
    <Card style={{ width: "19.3rem", margin: 10 }}>
      <Card.Img
        style={{ cursor: "pointer" }}
        variant="top"
        src={image.webformatURL}
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
        <div className="d-flex justify-content-between">
          {user.admin ? (
            <div>
              <Button className="mx-2" variant="outline-dark">
                Edit
              </Button>
              <Button variant="outline-danger">Delete</Button>
            </div>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export default FlowerImage;
