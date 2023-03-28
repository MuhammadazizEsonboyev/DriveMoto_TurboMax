import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./bfooter.css"

const Bfooter = () => {
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col>
            <h2 className='hbirbex'>С этим товаром покупают</h2>
            <ul className='listb'>
              <li className='list_itemb'>запчасти</li>
              <li className='list_itemb'>моторы</li>
              <li className='list_itemb'>шины </li>
              <li className='list_itemb'>электроника</li>
              <li className='list_itemb'>инструменты</li>
              <li className='list_itemb'>аксессуары </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '18rem', textAlign: 'center' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>BRP Audio-портативная система</Card.Title>
                <Card.Text> нет в наличии </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Сообщить о поступлении</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Bfooter