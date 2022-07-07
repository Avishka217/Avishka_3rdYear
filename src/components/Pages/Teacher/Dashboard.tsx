import * as React from "react";
import Card from "../../Card/Card";

import { Row, Col, Container } from "react-bootstrap";
import "../../../Assets/Styles/main.scss";

// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from "../../Navbars/TopNavbar";
import LeftSidebar from "../../Sidebar/LeftSidebar";
import PanelContainer from "../../Layout/PanelContainer";
import { AiOutlineHistory } from "react-icons/ai";
import  Paymentpiechart  from "./Paymentpiechart";
import Monthlyattendancechart from "./Monthlyattendancechart";
import Enrollmentchart from "./Enrollmentchart";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Dashboard</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Upcoming Classes </h5>
            </div>
            <div className="PanelBody">
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="23-05-2022"
                btnname="Start"
              />
              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="24-05-2022"
                btnname="Start"
                // image={require("../../Assets/Images/testimg2.jpeg")}
              />

              <Card
                header="Mathematics"
                time="04:00pm- 06:00pm"
                date="25-05-2022"
                btnname="Start"
              />
            </div>
          </div>
        </Row>

        <Row>
          <Paymentpiechart />
          <Monthlyattendancechart />
          <Enrollmentchart />
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
