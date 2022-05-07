import * as React from "react";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PanelContainer from "../../Layout/PanelContainer";

export const CreateCourse = () => {
  return (
    <div className="MyCourses">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>

          <div className="Panel">
            <div className="PanelBody">
             <h3>Add a New Course </h3>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default CreateCourse;
