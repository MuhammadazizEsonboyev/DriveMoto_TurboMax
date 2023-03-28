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
                <Navbar className="xurshid_nav">
                  <Container>
                    <Nav.Link>О товаре</Nav.Link>
                    <Nav.Link>Характеристики</Nav.Link>
                    <Nav.Link>Отзывы</Nav.Link>
                    <Nav.Link>Самовывоз</Nav.Link>
                    <Nav.Link>Доставка</Nav.Link>
                    <Nav.Link>Cервис</Nav.Link>
                    <Nav.Link>Гарантия</Nav.Link>
                  </Container>
                </Navbar>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="xurshid_input">
                <h6 className="xurshid_h6">Магазин</h6>
                <input
                  type="text"
                  className="xurshid_input_input"
                  placeholder="Введите название магазина"
                />
              </div>
            </Col>
            <Col xs={2}>
              <div className="div_xurshid_1">
                <input type="radio" name="b" />
                <h6 className="xurshid1_h6">Забрать сегодня</h6>
              </div>
            </Col>
            <Col xs={3}>
              <div className="div_xurshid_2">
                <input type="radio" name="b" />
                <h6 className="xurshid2_h6">Забрать в течение недели</h6>
              </div>
            </Col>
          </Row>
          <Row  className="mt-5">
            {/* <div className="xurshid_section"> */}
             <Col xs={3}>
              <h5>Адрес</h5>
             </Col>
             <Col xs={3}>
              <h5>Режим работы</h5>
             </Col>
             <Col xs={2}>
              <h5>Доступно</h5>
             </Col>
             <Col xs={2}>
              <h5>Доступно</h5>
             </Col>
            
            {/* </div> */}
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
