import React from "react";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CreateFlower = (show, onHide) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new flower
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Enter the name of the flower" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateFlower;
