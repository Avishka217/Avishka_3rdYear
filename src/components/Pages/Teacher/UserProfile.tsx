import * as React from "react";

import { Row, Col, Container, Form } from "react-bootstrap";
import UploadButton from "../../Button/UploadButton";
import LeftSidebar from "../../Sidebar/LeftSidebar";
import MainPanel from "./MainPanel";


export const Userprofile = () => {
  return (
    <Row>
      <div className="PanelHeader">
        <h4>UserProfile</h4>
      </div>
      <Col xl={3} className="LeftCol" style={{ height: "100vh" }}>
        <div className="profilesidebar">
          <div className="avatar">
            <div className="UserImg">
              <img src={require("../../../Assets/Images/testimg2.jpeg")} />
            </div>
          </div>
          <div className="profileinfo" style={{ marginTop: "30px" }}>
            <h5>Avishka Hettiarchchi</h5>
            <p>Bsc.Information Systems</p>
          </div>
        </div>
      </Col>
      <Col xl={9} className={"MiddleCol"} style={{}}>
        <div className="PanelHeader">
          <h4>Personal Info </h4>
        </div>
        <Form>
          <Form.Group controlId="form.Name">
            <Form.Label>
              <h6>
                <b>Name</b>
              </h6>
            </Form.Label>
            <p>Avishka Hettiarachchi</p>
            {/* <Form.Control type="text" placeholder="First Name" /> */}
          </Form.Group>

          <Form.Group controlId="form.Name">
            <Form.Label>Workplace </Form.Label>
            <p>Ananda College</p>

            {/* <Form.Control type="text" placeholder="Workspace" /> */}
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Qualifications </Form.Label>
            {/* <Form.Control type="text" placeholder="Qualifications" /> */}
            <p>Bsc.Information Systems</p>
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Description </Form.Label>
            <p>Hi I would Love to teach Mathematics for O/L Students.</p>
            {/* <Form.Control type="text" placeholder="Description" /> */}
          </Form.Group>
          <UploadButton />
        </Form>
      </Col>
    </Row>
  );
};

export default Userprofile;

