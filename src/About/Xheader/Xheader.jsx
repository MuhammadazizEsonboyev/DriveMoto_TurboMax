import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from "react";

import "./Xheader.css";
import { useTranslation } from "react-i18next";

export default function Xheader() {
  const { t } = useTranslation()

  const data = [
    {
      id: 1,
      name: `${t("about.xurshidbek_name")}`,
      vaqt: `пн  сб 08:00-19:00`,
      bil: `${t("about.xurshidbek_bil")}`,
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
const [get, setGet] = useState('')
console.log(get);
  return (
    <>
      <section className="xurshid">
        <Container>
          <Row>
            <Col>
              <div className="section_xurshid">
                <Navbar className="xurshid_nav">
                  <Container>
                    <Col md={2} xs={12}>
                      <Nav.Link className="xurshidbek_nav_1">{t("about.xurshidbek_nav1")}</Nav.Link>
                    </Col>
                    <Col md={2} xs={12}>
                      <Nav.Link>{t("about.xurshidbek_nav2")}</Nav.Link>
                    </Col>
                    <Col md={1} xs={12}>
                      <Nav.Link>{t("about.xurshidbek_nav3")}</Nav.Link>
                    </Col>
                    <Col md={1} xs={12}>
                      <Nav.Link>{t("about.xurshidbek_nav4")}</Nav.Link>
                    </Col>

                    <Col md={1} xs={12}>
                      <Nav.Link>{t("about.xurshidbek_nav5")}</Nav.Link>
                    </Col>
                    <Col md={1} xs={12}>
                      <Nav.Link>{t("about.xurshidbek_nav6")}</Nav.Link>
                    </Col>

                    <Col md={1} xs={12}>
                      <Nav.Link>{t("about.xurshidbek_nav7")}</Nav.Link>
                    </Col>
                  </Container>
                </Navbar>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="xurshid_input">
                <h6 className="xurshid_h6">{t("about.xurshidbek_shop")}</h6>


                <div className="text-end">
                  <input
                  onChange={(e) => setGet(e.target.value)}
                    type="text"
                    className="xurshid_input_input"
                    placeholder={t("about.xurshidbek_input")}
                  />
                </div>
              </div>
            </Col>
            <Col xs={2}>
              <div className="div_xurshid_1">
                <input type="radio" name="b" />
                <h6 className="xurshid1_h6">{t("about.xurshidbek_checked")}</h6>
              </div>
            </Col>
            <Col xs={3}>
              <div className="div_xurshid_2">
                <input type="radio" name="b" />
                <h6 className="xurshid2_h6">{t("about.xurshidbek_checked1")}</h6>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <div className="xurshid_section">
              <Col md={3}>
                <h5 className="adres">{t("about.xurshidbek_manzil")}</h5>
              </Col>
              <Col md={3} xs={12}>
                <h5>{t("about.xurshidbek_ish_tartibi")}</h5>
              </Col>
              <Col md={2} xs={12}>
                <h5>{t("about.xurshidbek_mavjud")}</h5>
              </Col>
              <Col md={2} xs={12}>
                <h5 xs={12}>{t("about.xurshidbek_miqdor")}</h5>
              </Col>
            </div>
          </Row>
          <Row className="mt-5">
            {data.filter((item) => {
              return get.toLowerCase() === '' ? item : item.name.toLowerCase( ).includes(get)
            }).map(({ name, vaqt, bil, raqam }) => (
              <>
                <div className="xurshidbek_div">
                  <Col md={3} xs={12}>
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
                    <Button variant="primary" className="xurshidbek_button">
                      КУПИТЬ
                    </Button>
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
