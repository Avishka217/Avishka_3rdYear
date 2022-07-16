import * as React from "react";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Container, Row, Col } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

type Instituterequest = {
  name?: string;
  btnname?:string;
  btnname1?:string;
 
};
export const Instituterequest: React.FC<Instituterequest> = (props) => {
  return (
    <div className="Instituterequest">
      <Container>
        <Row>
          <Card
            header={props.name}
            btnname={
              <button type="button" className="btn btn-success">
                Accept
              </button>
              
            }
            btnname1={
              <button type="button" className="btn btn-danger">
                Reject
              </button>
            }
          />
        </Row>
      </Container>
    </div>
  );
};

export default Instituterequest;
