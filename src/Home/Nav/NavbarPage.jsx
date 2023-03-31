import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NavbarPage.css";
import Carousel from "react-bootstrap/Carousel";
import RubleFirst from "./image/icons8-рубль-50.svg";
import RubleSec from "./image/icons8-рубль-50 (1).svg";
import { motion } from "framer-motion";
import engine from "./image/engine.svg";
import { useTranslation } from "react-i18next";


export default function NavbarPage({size}) {
  const { t } = useTranslation()
  return (
    <div>
      <div id="advertisement-box">
        <Container>
          <Row>
            <Col xs={12} lg={9} className='d-none d-sm-block'>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/two-atv-riders-speed-race-forest-front-view-helmets-riding-quad-bike-extreme-sport-travelling-quadbike-offroad-adventure-129263028.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/atv-woods-racing-15759004.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/atv-grassy-sand-dune-27806819.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/action-shot-sport-atv-vehicle-running-mud-track-98196655.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/summer-offroad-adventure-atv-sand-quarry-male-rider-helmet-quad-bike-sandpit-129262519.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>


            <Col xs={12} lg={9} className='d-block d-sm-none'>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/two-atv-riders-speed-race-forest-front-view-helmets-riding-quad-bike-extreme-sport-travelling-quadbike-offroad-adventure-129263028.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block d-sm-none img-carousel"
                    src="https://thumbs.dreamstime.com/b/atv-woods-racing-15759004.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/atv-grassy-sand-dune-27806819.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/action-shot-sport-atv-vehicle-running-mud-track-98196655.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/summer-offroad-adventure-atv-sand-quarry-male-rider-helmet-quad-bike-sandpit-129262519.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col xs={12} lg={3} className='d-block d-sm-block'>
              <motion.div
                id="border-app"
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
              >
                <div id="sale-box">
                  <div className="button_group_asa">
                    <button id="sale">акция</button>
                  </div>
                  <div id="prices">
                    <p id="nineteen">
                      190 000 <img src={RubleFirst} id={RubleFirst} alt="" />
                    </p>
                    <p id="twenty">
                      225 000 <img src={RubleSec} id="RubleSec" alt="" />{" "}
                    </p>
                  </div>
                </div>

                <img src={engine} id="engine" alt="" />
                <h1 id="engine-info">
                  {t("text.EngineBoat")}
                </h1>

                <div id="date-box">
                  <h2 id="date-till">{t("text.promotion")}</h2>
                  <h1 id="date">31.08.2020</h1>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
