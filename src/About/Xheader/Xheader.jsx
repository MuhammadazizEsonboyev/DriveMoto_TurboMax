import React from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

export default function Xheader() {
  const arr = ["uzbekistan", "russia"];

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={6}>
            <Form.Control placeholder="Disabled input" />
            <Table striped bordered hover className="mt-5" >
              <thead >
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                </tr>
              </thead>
              <tbody>
               {arr.map((item,index) => {
                return(
                  <>
                   <tr>
                  <td>{index}</td>
                  <td>{item}</td>
                </tr>
                  </>
                )
               })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
