import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

import "./Xheader.css";

export default function Xheader() {
  const data = [
    {
      id: 1,
      name: "Москва, ул. Науки 25",
      vaqt: "пн-сб:   08:00-19:00",
      bil: "В наличии",
      raqam: 1,
    },
    // {
    //   id: 2,
    //   name: "Москва, ул.  Южная 134",
    //   vaqt: "пн-сб:   08:00-19:00",
    //   bil: "В наличии",
    //   raqam: 2,
    // },
    // {
    //   id: 3,
    //   name: "Санкт-Петербург, ул. Красная 19",
    //   vaqt: "пн-сб:   08:00-19:00",
    //   bil: "Нет в наличии",
    //   raqam: 0,
    // },
    // {
    //   id: 4,
    //   name: "Санкт-Петербург, ул. Красная 19",
    //   vaqt: "пн-сб:   08:00-19:00",
    //   bil: "Нет в наличии",
    //   raqam: 0,
    // },
  ];

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
                <div className="text-end">
                  <input
                    type="text"
                    className="xurshid_input_input"
                    placeholder="Введите название магазина"
                  />
                </div>
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
          <Row className="mt-5">
            <div className="xurshid_section">
              <Col md={3} >
              
              <h5 className="adres">Адрес</h5>
             
              </Col>
              <Col md={3} xs={12}>
                <h5>Режим работы</h5>
              </Col>
              <Col md={2} xs={12}>
                <h5>Доступно</h5>
              </Col>
              <Col md={2} xs={12}>
                <h5 xs={12}>Количество</h5>
              </Col>
            </div>
          </Row>
          <Row className="mt-5">
            {data.map(({ name, vaqt, bil, raqam }) => (
              <>
                <div className="xurshidbek_div">
                  <Col  md={3} xs={12}>
                    <h5 className="xurshid_section1">{name}</h5>
                  </Col>
                  <Col md={3} xs={12}>
                    <h5 className="xurshid_section1">{vaqt}</h5>
                  </Col>
                  <Col md={2} xs={12}>
                    <h5 className="xurshid_section1">{bil}</h5>
                  </Col>
                  <Col md={3} xs={12}>
                    <h5 className="xurshid_section1">{raqam}</h5>
                  </Col>

                  <Col md={1} xs={12}>
                    <Button variant="primary" className="xurshidbek_button">КУПИТЬ</Button>
                  </Col>
                </div>
              </>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
