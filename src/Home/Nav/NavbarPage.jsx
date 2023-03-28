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



export default function navbarPage() {
  return (
    <div>
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
            <img src={logo} alt="svg" id='logo' />
          </Col>

          <Col xs={5}>
            <div id='Navbar-box'>
              <img src={navigation} alt="svg" id='navigation-img' />
              <h4 id='nav-adress' >Москва,  ул. Науки  25</h4>

              <div id='profile-box'>
                <img src={Like} alt="" />
                <ModalNav />
                <img src={Card} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12}>
            <div id='nav-category-box'>
              <div id='category-box'>
                {
                  products.map((item) => {
                    return (
                      <button id="category-name">{item.name}</button>
                    )
                  })
                }
              </div>
            </div>
          </Col>
        </Row>
      </Container>



      <div id="advertisement-box">
        <Container>
          <Row>
            <Col xs={8}>
              <Carousel>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div >
  )
}
