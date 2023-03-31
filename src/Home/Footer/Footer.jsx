
import React, { useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import "./footerMotor.css"
const rasm = require("./img/rasm.png")

export default function FooterPage() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
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
