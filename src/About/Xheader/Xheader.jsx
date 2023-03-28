import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Xheader.css";

export default function Xheader() {
  return (
    <>
      <section className="xurshid">
        <Container>
          <Row>
            <Col>
              <div className="section_xurshid">
                <Navbar bg="secondary" variant="dark">
                  <Container>
                    {/* <Nav className="me-auto"> */}
                    <Nav.Link>О товаре</Nav.Link>
                    <Nav.Link>Характеристики</Nav.Link>
                    <Nav.Link>Отзывы</Nav.Link>
                    <Nav.Link>Самовывоз</Nav.Link>
                    <Nav.Link>Доставка</Nav.Link>
                    <Nav.Link>Cервис</Nav.Link>
                    <Nav.Link>Гарантия</Nav.Link>

                    {/* </Nav> */}
                  </Container>
                </Navbar>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <h6>Магазин</h6>
            </Col>
            <Col xs={6}>
              <h1>d</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

// import React, { useState } from "react";
// import { Col, Container, Form, Row, Table } from "react-bootstrap";

// export default function Xheader() {
//   const arr = ["uzbekistan", "russia"];

//   const [value,setValue] = useState()

//   console.log(value);

//   return (
//     <div>
//       <Container>
//         <Row className="justify-content-center mt-5">
//           <Col xs={6}>
//             <Form.Control placeholder="Disabled input" onChange={(e) => setValue(e.target.value)} />
//             <Table striped bordered hover className="mt-5" >
//               <thead >
//                 <tr>
//                   <th>#</th>
//                   <th>First Name</th>
//                 </tr>
//               </thead>
//               <tbody>
//                {arr.filter((el) => {
//                 return el.toLocaleLowerCase === "" ? value : el.toLocaleLowerCase().includes(value)
//                }).map((item,index) => {
//                 return(
//                   <>
//                    <tr>
//                   <td>{index}</td>
//                   <td>{item}</td>
//                 </tr>
//                   </>
//                 )
//                })}
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
