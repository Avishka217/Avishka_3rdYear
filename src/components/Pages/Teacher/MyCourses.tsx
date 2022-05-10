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
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
            <div className="PanelBody">
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  teacher="Mr. Lasitha Nuwan"
                  time="04:00pm- 06:00pm"
                  date="Sunday"
                  image={
                    <img
                      src={require("../../../Assets/Images/testimg2.jpeg")}
                    />
                  }
                />
              </Link>
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  teacher="Mr. Lasitha Nuwan"
                  time="04:00pm - 06:00pm"
                  date="Sunday"
                  image={
                    <img
                      src={require("../../../Assets/Images/testimg2.jpeg")}
                    />
                  }
                />
              </Link>
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  teacher="Mr. Lasitha Nuwan"
                  time="04:00pm- 06:00pm"
                  date="Sunday"
                  image={
                    <img
                      src={require("../../../Assets/Images/testimg2.jpeg")}
                    />
                  }
                />
              </Link>
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  teacher="Mr. Lasitha Nuwan"
                  time="04:00pm- 06:00pm"
                  date="Sunday"
                  image={
                    <img
                      src={require("../../../Assets/Images/testimg2.jpeg")}
                    />
                  }
                />
              </Link>
              <Link to="/course" className="link">
                <Card
                  header="Mathematics"
                  teacher="Mr. Lasitha Nuwan"
                  time="04:00pm- 06:00pm"
                  date="Sunday"
                  image={
                    <img
                      src={require("../../../Assets/Images/testimg2.jpeg")}
                    />
                  }
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
