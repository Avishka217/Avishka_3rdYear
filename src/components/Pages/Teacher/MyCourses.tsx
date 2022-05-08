import * as React from "react";
import Card from "../../Card/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../../../Assets/Styles/main.scss";
import PanelContainer from "../../Layout/PanelContainer";
import { Link } from "react-router-dom";


export const MyCourses = () => {
  return (
    <div className="MyCourses">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>MyCourses</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Active Courses</h5>
            </div>
            <div className="PanelBody">
              <Link to="/CourseDetails" className="link">
                <Card
                  header="Mathematics"
                  time="04:00pm- 06:00pm"
                  date="23-05-2022"
                  btnname="Start"
                />
              </Link>
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  time="04:00pm- 06:00pm"
                  date="24-05-2022"
                  btnname="Start"
                  // image={require("../../Assets/Images/testimg2.jpeg")}
                />
              </Link>
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  time="04:00pm- 06:00pm"
                  date="25-05-2022"
                  btnname="Start"
                />
              </Link>
            </div>
          </div>
        </Row>

        <Row>
          <PanelContainer />
          <div className="PanelHeader">
           
          </div>
          <div className="Panel">
            <div className="PanelSubheader">
             
            </div>
            <div className="PanelBody">
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  time="04:00pm- 06:00pm"
                  date="23-05-2022"
                  btnname="Start"
                />
              </Link>
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  time="04:00pm- 06:00pm"
                  date="24-05-2022"
                  btnname="Start"
                  // image={require("../../Assets/Images/testimg2.jpeg")}
                />
              </Link>
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  time="04:00pm- 06:00pm"
                  date="25-05-2022"
                  btnname="Start"
                />
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
