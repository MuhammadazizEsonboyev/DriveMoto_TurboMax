import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from './Cards/Cards'
import CardData from './Cards/CardNames'

const Section1 = ({ item, handleClick }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={8}>
            <h2 className='textFooter'>Популярные товары</h2>
            <ul className='list_footer'>
              <li className='list_item_footer'>запчасти</li>
              <li className='list_item_footer'>моторы</li>
              <li className='list_item_footer'>шины </li>
              <li className='list_item_footer'>электроника</li>
              <li className='list_item_footer'>инструменты</li>
              <li className='list_item_footer'>аксессуары</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {CardData?.map(item => {
        // console.log(item);
        return (
          <>
            <Container>
              <Row className='justify-content-center'>
                <Col xs={3}>
                  <Cards item={{item}} key={item.id} handleClick={handleClick} />
                </Col>
              </Row>
            </Container>
          </>
        )
      })}
    </>
  )
}

export default Section1
