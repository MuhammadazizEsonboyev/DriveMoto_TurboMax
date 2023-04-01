import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from './Cards/Cards'
import CardData from './Cards/CardNames'

const Section1 = ({ handleClick }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}  className=' d-none d-sm-block'>
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
          <Col xs={12} lg={3} className=' d-block d-sm-none'>
            <h2 className='textFooter'>Популярные товары</h2>
            <ul className='list_footer'>
              <li className='list_item_footer'>запчасти</li>
              <li className='list_item_footer'>моторы</li>
              <li className='list_item_footer'>электроника</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
              <Row className='justify-content-center '>
      {CardData?.map((item, id) => {
        // console.log(item);
        return (
          
           
                <Col key={id} xs={12} lg={3} className=' d-block d-sm-block'>
                  <Cards item={{item}} key={item.id} handleClick={handleClick} />
                </Col>
              
          
        )
      })}
      </Row>
            </Container>
    </>
  )
}

export default Section1
