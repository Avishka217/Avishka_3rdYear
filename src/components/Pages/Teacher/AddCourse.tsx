import * as React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { BsBoxArrowUp } from "react-icons/bs";
import UploadButton from "../../Button/UploadButton";

const AddCourse = () => {
  return (
    <Row>
      <div className="PanelHeader">
        <h2>Add a Course</h2>
      </div>
      <Container>
        <Form>
          <Form.Group controlId="form.Name">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="Topic" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" placeholder="Deadline" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label className="form-label" for="customFile">
              Notes File
            </Form.Label>
            <Form.Control
              type="file"
              className="form-control"
              id="customFile"
            />
          </Form.Group>
          <UploadButton />
        </Form>
      </Container>
    </Row>
  );};

export default AddCourse;
