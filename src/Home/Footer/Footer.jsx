
import React, { useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import "./footerMotor.css"
const motor1 = require("./img/motor1.png")
const rasm = require("./img/rasm.png")
const motor2 = require("./img/motor2.png")

export default function FooterPage() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={12} className='d-block d-sm-block'>
            <div className="boxBlue">
              <div className="textSaleMoto">
                <h2 className="motoText">CКИДКИ на все запчасти <br /> до 70%</h2>
              </div>

              <div className="imagesMotors">
                <img src={motor1} alt="" id='motor1'/>
                <button className="button_motor">ПОСМОТЕТЬ ВСЕ</button>
                <img src={motor2} alt="" id='motor2' />
              </div>
              
              <div className="trackBtn">
              </div>
            </div>

          </Col>
        </Row>
      </Container>


      <Container>
        <Row>
          <Col xs={8}>
            <h2 className="textFooter">С этим товаром покупают</h2>
            <ul className="list_footer">
              <li className="list_item_footer">запчасти</li>
              <li className="list_item_footer">моторы</li>
              <li className="list_item_footer">шины </li>
              <li className="list_item_footer">электроника</li>
              <li className="list_item_footer">инструменты</li>
              <li className="list_item_footer">аксессуары</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Col xs={3}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={rasm}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Col>

          </Carousel>
        </Row>
      </Container>

    </>
  )
}
