import * as React from "react";
import "../../../Assets/Styles/main.scss";
import { Col, Container, Row } from "react-bootstrap";

const CourseTab1 = () => {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="Row">
        <Col xs={6}>Course Name:</Col>
        <Col xs={6}>Course Description:</Col>
      </Row>

      <Row className="Row">
        <Col xs={6}>Course Name:</Col>
        <Col xs={6}>Course Description:</Col>
      </Row>

      <Row className="Row">
        <Col xs={6}>Course Name:</Col>
        <Col xs={6}>Course Description:</Col>
      </Row>

      <Row className="Row">
        <Col xs={6}>Course Name:</Col>
        <Col xs={6}>Course Description:</Col>
      </Row>
    </Container>
  );
};

export default CourseTab1;
