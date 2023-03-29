import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './NavbarPage.css'
import logo from './image/лого.svg'
import navigation from './image/navigation.svg'
import Like from './image/Like.svg'
import Card from './image/Card.svg'
import ModalNav from './Modal'
import { products } from "././DataName";
import Carousel from 'react-bootstrap/Carousel';
import RubleFirst from './image/icons8-рубль-50.svg'
import RubleSec from './image/icons8-рубль-50 (1).svg'
import engine from './image/engine.svg'
import { motion } from "framer-motion"



export default function navbarPage() {
  return (
    <div>
      <nav id='nav-asad'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={5}>
              <div id='Navbar-box'>
                <h4 id='nav-market'>Магазины</h4>
                <h4 id='nav-market'>Акции</h4>
                <h4 id='nav-market'>Доставка и оплата</h4>
              </div>
            </Col>
            <Col xs={2}>
              <div id="image">
                <img src={logo} alt="svg" id='logo' />
              </div>
            </Col>
            <Col xs={5}>
              <div id='Navbar-box'>
                <img src={navigation} alt="svg" id='navigation-img' />
                <h4 id='nav-adress' >Москва,  ул. Науки  25</h4>
                <div id='profile-box'>
                  <img src={Like} alt=""
                  />
                  <ModalNav />
                  <img src={Card} alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>

      <div id='nav-category-box'>
        <Container>
          <Row>
            <Col xs={12}>
              <div id='category-box'>
                {
                  products.map((item) => {
                    return (
                      <button id="category-name">{item.name}</button>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="advertisement-box">
        <Container>
          <Row>
            <Col xs={9}>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/two-atv-riders-speed-race-forest-front-view-helmets-riding-quad-bike-extreme-sport-travelling-quadbike-offroad-adventure-129263028.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/atv-woods-racing-15759004.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/atv-grassy-sand-dune-27806819.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/action-shot-sport-atv-vehicle-running-mud-track-98196655.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block img-carousel"
                    src="https://thumbs.dreamstime.com/b/summer-offroad-adventure-atv-sand-quarry-male-rider-helmet-quad-bike-sandpit-129262519.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col xs={3}>
              <motion.div
                id='border-app'
                initial={{
                  x: 100,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                transition={{
                  delay: 0.5
                }}
              >

                <div id='sale-box' >
                  <div className="button_group_asa">
                    <button id='sale'>акция</button>
                  </div>
                  <div id='prices'>
                    <p id='nineteen'>190 000 <img src={RubleFirst} alt="" /></p>
                    <p id='twenty'>225 000 <img src={RubleSec} id="RubleSec" alt="" /> </p>
                  </div>
                </div>

                <img src={engine} id="engine" alt="" />
                <h1 id='engine-info'>Лодочный мотор <br />
                  Suzuki DF9.9BRS</h1>

                <div id='date-box'>
                  <h2 id='date-till'>Акция действует до</h2>
                  <h1 id='date'>31.08.2020</h1>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

    </div >
  )
}
