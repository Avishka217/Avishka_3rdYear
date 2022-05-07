import * as React from 'react';
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PanelContainer from "../../Layout/PanelContainer";



export const MyCourses = () => {
  return (
    <div className="MyCourses">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>

          <div className="Panel">
            <Link to="/createcourse" className="link">
              <Button variant="primary">Add New Course +</Button>
            </Link>
            <div className="PanelBody">
              <Link to="/course" className="link">
                <Card header="Mathematics">
                  <div className="CardImg">
                    <img
                      src={require("../../../Assets/Images/testimg2.jpeg")}
                    />
                  </div>
                  <div className="CardContent">
                    <CardHeader>Mathematics class</CardHeader>
                    <CardDetails>Mr. Lasitha Nuwan</CardDetails>
                  </div>
                </Card>
              </Link>

              <Link to="/course" className="link">
                <Card header="Science">
                  <div className="CardImg">
                    <img
                      src={require("../../../Assets/Images/testimg2.jpeg")}
                    />
                  </div>
                  <div className="CardContent">
                    <CardHeader>Mathematics class</CardHeader>
                    <CardDetails>Mr. Lasitha Nuwan</CardDetails>
                  </div>
                </Card>
              </Link>

              <Link to="/course" className="link">
                <Card header="English">
                  <div className="CardImg">
                    <img
                      src={require("../../../Assets/Images/testimg2.jpeg")}
                    />
                  </div>
                  <div className="CardContent">
                    <CardHeader>Mathematics class</CardHeader>
                    <CardDetails>Mr. Lasitha Nuwan</CardDetails>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
