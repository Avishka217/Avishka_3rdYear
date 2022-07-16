
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

import "bootstrap/dist/css/bootstrap.min.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Instituterequest } from "./Instituterequest";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];



export const Institutes = () => {
  return (
    <div className="Notifications">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubHeader"></div>

            <Tabs>
              <div className="Institutes I am working at">
                <Link to="/editdetails" className="link"></Link>

                <TableContainer component={Paper}>
                  <Table size="medium" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="New Institute Requests">
                <Link className="link" to="/uploadnotes"></Link>
                <br />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
                <Instituterequest name="Sigma Institute" />
              </div>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Institutes;
