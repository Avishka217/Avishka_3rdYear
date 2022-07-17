import * as React from "react";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Row, Col, Container, Tab, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabs from "../../Tabs/Tabs";
import Details from "./Details";
import Notes from "./Notes";


import PendingPayments from "./PendingPayments";
import PanelContainer from "../../Layout/PanelContainer";
import UploadButton from "../../Button/UploadButton";
import { Homework } from "./Homework";
import { Students } from "./Students";



import "bootstrap/dist/css/bootstrap.min.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  joineddate: string,
  parentname: string,
  contact:string

) {
  return { name, joineddate, parentname,contact};
}






const rows= [
  createData("Arosh Perera", "2022-01-01", "J.B.C Silva", "0112729283"),
  createData("Arosh Perera", "2022-01-01", "J.B.C Silva", "0112729283"),
  createData("Arosh Perera", "2022-01-01", "J.B.C Silva", "0112729283"),
];




export const Course = () => {
  return (
    <div className="Course">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader">
              <h3>Mathematics Class</h3>
              <div className="PanelImage">
                <img src={require("../../../Assets/Images/testimg2.jpeg")} />
              </div>
            </div>

            <Tabs>
              <div className="Details">
                <Link to="/editdetails" className="link">
                  <Button
                    style={{
                      marginBottom: "20px",
                      marginRight: "20px",
                      float: "right",
                    }}
                  >
                    Edit Details
                  </Button>
                </Link>
                <Details label="Subject" value="Mathematics" symbol=":" />
                <Details label="Teacher" value="Mr. Lasitha Nuwan" symbol=":" />
                <Details label="Grade" value="8" symbol=":" />
                <Details
                  label="Description"
                  value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                />
                <Details label="Monthly Payment" value="LKR 2500" symbol=":" />
                <Details label="Started Date" value="2022-03-24" symbol=":" />
                <Details label="Institute" value="Sigma Institute" symbol=":" />
                <Details label="Duration" value="12 months" symbol=":" />
              </div>
              <div className="Notes">
                <Link className="link" to="/uploadnotes">
                  <Button
                    style={{
                      float: "right",
                      marginRight: "44px",
                    }}
                  >
                    Upload New notes
                  </Button>
                </Link>

                <div className="noteContainer">
                  <Notes topic="Note for week 1" date="04-05-2022" />
                  <Notes topic="Note for week 2" date="04-05-2022" />
                  <Notes topic="Note for week 3" date="04-05-2022" />
                  <Notes topic="Note for week 4" date="04-05-2022" />
                  <Notes topic="Note for week 5" date="04-05-2022" />
                </div>
              </div>
              <div className="Homework">
                <Link className="link" to="/uploadhomework">
                  <Button
                    style={{
                      float: "right",
                      marginRight: "44px",
                    }}
                  >
                    Upload Homework
                  </Button>
                </Link>

                <div className="homeworkContainer">
                  <Homework topic="Homework for week 1" date="04-05-2022" />
                  <Homework topic="Homework for week 2" date="04-05-2022" />
                  <Homework topic="Homework for week 3" date="04-05-2022" />
                  <Homework topic="Homework for week 4" date="04-05-2022" />
                  <Homework topic="Homework for week 5" date="04-05-2022" />
                </div>
              </div>

              <div className="Students">
                <div className="studentContainer">
                  <TableContainer component={Paper}>
                    <Table
                      size="medium"
                      aria-label="a dense table"
                      style={{ textAlign: "left" }}
                    >
                      <TableHead style={{ backgroundColor: "#9DD6DF" }}>
                        <TableRow>
                          <TableCell>
                            <b>Student Name</b>
                          </TableCell>
                          <TableCell align="left">
                            <b>Joined Date</b>
                          </TableCell>

                          <TableCell align="left">
                            <b>Parent Name</b>
                          </TableCell>
                          <TableCell align="left">
                            <b>Contact Number</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="left">{row.joineddate}</TableCell>
                            <TableCell align="left">{row.parentname}</TableCell>
                            <TableCell align="left">{row.contact}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>

              <div className="Schedules">
                <div className="scheduleContainer">
                  <Notes topic="Note for week 1" date="04-05-2022" />
                  <Notes topic="Note for week 2" date="04-05-2022" />
                  <Notes topic="Note for week 3" date="04-05-2022" />
                  <Notes topic="Note for week 4" date="04-05-2022" />
                  <Notes topic="Note for week 5" date="04-05-2022" />
                </div>
              </div>
              <div className="Pending Payments">
                <div className="paymentsContainer">
                  <TableContainer component={Paper}>
                    <Table
                      size="medium"
                      aria-label="a dense table"
                      style={{ textAlign: "left" }}
                    >
                      <TableHead style={{ backgroundColor: "#9DD6DF" }}>
                        <TableRow>
                          <TableCell>
                            <b>Student Name</b>
                          </TableCell>
                          <TableCell align="left">
                            <b>Joined Date</b>
                          </TableCell>

                          <TableCell align="left">
                            <b>Parent Name</b>
                          </TableCell>
                          <TableCell align="left">
                            <b>Contact Number</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="left">{row.joineddate}</TableCell>
                            <TableCell align="left">{row.parentname}</TableCell>
                            <TableCell align="left">{row.contact}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
